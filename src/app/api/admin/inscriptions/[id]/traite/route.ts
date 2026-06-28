import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// PATCH /api/admin/inscriptions/[id]/traite  → bascule le statut traite
export async function PATCH(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const inscription = await prisma.inscription.findUnique({ where: { id: params.id }, select: { traite: true } })
    if (!inscription) return NextResponse.json({ error: 'Non trouve' }, { status: 404 })
    const updated = await prisma.inscription.update({
      where: { id: params.id },
      data: { traite: !inscription.traite },
    })
    return NextResponse.json(updated)
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
