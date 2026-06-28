import { prisma } from '@/lib/prisma'
import { Building2, Mail, MailOpen } from 'lucide-react'
import Link from 'next/link'
import DeleteRecruteurButton from './DeleteButton'
import MarkRecruteurLuButton from './MarkLuButton'

export default async function AdminRecruteursPage({ searchParams }: { searchParams: { statut?: string } }) {
  const { statut } = searchParams

  const recruteurs = await prisma.recruteur.findMany({
    where: statut === 'non-lu' ? { lu: false } : statut === 'lu' ? { lu: true } : {},
    orderBy: { createdAt: 'desc' },
  })

  const total = await prisma.recruteur.count()
  const nonLus = await prisma.recruteur.count({ where: { lu: false } })
  const lus = await prisma.recruteur.count({ where: { lu: true } })

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1A1A2E]">Demandes Recruteurs</h1>
        <p className="text-gray-500 text-sm">{nonLus} demande(s) non lue(s) sur {total}</p>
      </div>

      {/* Stats cliquables */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Total', value: total, color: 'bg-blue-500', href: '/admin/recruteurs' },
          { label: 'Non lues', value: nonLus, color: 'bg-[#E8001C]', href: '/admin/recruteurs?statut=non-lu' },
          { label: 'Lues', value: lus, color: 'bg-green-500', href: '/admin/recruteurs?statut=lu' },
        ].map(s => (
          <Link key={s.label} href={s.href} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
            <div className={`${s.color} w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}>
              <Building2 size={18} className="text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1A1A2E]">{s.value}</div>
              <div className="text-gray-500 text-xs">{s.label}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Filtres */}
      <div className="flex gap-2 mb-6">
        {[
          { label: 'Toutes', href: '/admin/recruteurs' },
          { label: 'Non lues', href: '/admin/recruteurs?statut=non-lu' },
          { label: 'Lues', href: '/admin/recruteurs?statut=lu' },
        ].map(f => (
          <Link key={f.label} href={f.href}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors
              ${(f.href === '/admin/recruteurs' && !statut) || f.href.includes(statut ?? '__')
                ? 'bg-[#E8001C] text-white border-[#E8001C]'
                : 'bg-white text-gray-600 border-gray-300 hover:border-[#E8001C]'}`}>
            {f.label}
          </Link>
        ))}
      </div>

      {/* Liste */}
      <div className="space-y-4">
        {recruteurs.map(r => (
          <div key={r.id} className={`bg-white rounded-xl shadow-sm p-6 border-l-4 ${r.lu ? 'border-gray-200' : 'border-[#E8001C]'}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className={`mt-1 shrink-0 ${r.lu ? 'text-gray-300' : 'text-[#E8001C]'}`}>
                  {r.lu ? <MailOpen size={18} /> : <Mail size={18} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="font-semibold text-[#1A1A2E]">{r.nom}</span>
                    <span className="badge bg-[#E8001C]/10 text-[#E8001C] text-xs">{r.role}</span>
                    <span className="badge bg-blue-100 text-blue-700 text-xs flex items-center gap-1">
                      <Building2 size={10} />{r.entreprise}
                    </span>
                    <a href={`mailto:${r.email}`} className="text-[#5ECFCF] text-sm hover:underline">{r.email}</a>
                    <span className="text-gray-300 text-xs">
                      {new Date(r.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mt-2 line-clamp-3 whitespace-pre-line">{r.message}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <MarkRecruteurLuButton id={r.id} />
                <Link href={`/admin/recruteurs/${r.id}`} className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                  Voir
                </Link>
                <a
                  href={`mailto:${r.email}?subject=Re: Votre demande de recrutement — Visum+ Akademie`}
                  className="px-3 py-1.5 text-xs font-medium bg-[#E8001C]/10 text-[#E8001C] rounded-lg hover:bg-[#E8001C] hover:text-white transition-colors"
                >
                  Repondre
                </a>
                <DeleteRecruteurButton id={r.id} />
              </div>
            </div>
          </div>
        ))}

        {recruteurs.length === 0 && (
          <div className="text-center py-20 text-gray-400 bg-white rounded-xl">
            <Building2 size={48} className="mx-auto mb-4 opacity-20" />
            <p>Aucune demande{statut ? ' dans cette categorie' : ''}</p>
          </div>
        )}
      </div>
    </div>
  )
}
