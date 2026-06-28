import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, User, Mail, Building2, Briefcase, Calendar, MessageSquare } from 'lucide-react'
import DeleteRecruteurButton from '../DeleteButton'
import MarkRecruteurLuButton from '../MarkLuButton'

export default async function RecruteurDetailPage({ params }: { params: { id: string } }) {
  const recruteur = await prisma.recruteur.findUnique({ where: { id: params.id } })
  if (!recruteur) notFound()

  const infos = [
    { icon: User,       label: 'Nom complet',   value: recruteur.nom },
    { icon: Building2,  label: 'Entreprise',     value: recruteur.entreprise },
    { icon: Briefcase,  label: 'Rôle',           value: recruteur.role },
    { icon: Mail,       label: 'Email',          value: recruteur.email },
    { icon: Calendar,   label: 'Date de demande', value: new Date(recruteur.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) },
  ]

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <Link href="/admin/recruteurs" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#E8001C] transition-colors text-sm">
          <ArrowLeft size={16} />Retour aux recruteurs
        </Link>
        <span className={`badge px-3 py-1 text-sm font-semibold ${recruteur.lu ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
          {recruteur.lu ? '✓ Lu' : '⏳ Non lu'}
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
        <div className="flex items-center gap-4 mb-8 pb-6 border-b">
          <div className="w-16 h-16 bg-[#E8001C]/10 rounded-full flex items-center justify-center shrink-0">
            <Building2 size={28} className="text-[#E8001C]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1A1A2E]">{recruteur.nom}</h1>
            <p className="text-gray-500 text-sm">{recruteur.entreprise} · {recruteur.role}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {infos.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="w-9 h-9 bg-[#F5F5F5] rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <Icon size={16} className="text-[#E8001C]" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
                <p className="text-[#1A1A2E] font-medium mt-0.5">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare size={16} className="text-[#E8001C]" />
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Besoin en recrutement</p>
          </div>
          <div className="bg-[#F5F5F5] rounded-xl p-4 text-gray-700 text-sm leading-relaxed whitespace-pre-line">
            {recruteur.message}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mt-2">
        {!recruteur.lu && <MarkRecruteurLuButton id={recruteur.id} full />}
        <DeleteRecruteurButton id={recruteur.id} redirectAfter="/admin/recruteurs" full />
        <a
          href={`mailto:${recruteur.email}?subject=Re: Votre demande de recrutement — Visum+ Akademie`}
          className="btn-primary text-sm inline-flex items-center gap-2"
        >
          <Mail size={15} />Repondre par email
        </a>
      </div>
    </div>
  )
}
