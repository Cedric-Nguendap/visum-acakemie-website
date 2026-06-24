import Link from 'next/link'
import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import { MessageCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'Niveaux de formation' }

const niveaux = [
  {
    code: 'A1', label: 'Débutant', couleur: 'bg-green-500', ring: 'ring-green-500', text: 'text-green-600', bar: 'bg-green-500',
    duree: '2 mois', prix: '45 000', progress: 10,
    competences: ['Alphabet & sons', 'Salutations', 'Chiffres & couleurs', 'Famille & quotidien'],
    objectif: 'Premiers échanges simples en allemand',
  },
  {
    code: 'A2', label: 'Élémentaire', couleur: 'bg-teal-500', ring: 'ring-teal-500', text: 'text-teal-600', bar: 'bg-teal-500',
    duree: '3 mois', prix: '55 000', progress: 28,
    competences: ['Vie quotidienne', 'Achats & services', 'Voyages', 'Loisirs'],
    objectif: 'Communiquer dans les situations courantes',
  },
  {
    code: 'B1', label: 'Intermédiaire', couleur: 'bg-blue-500', ring: 'ring-blue-500', text: 'text-blue-600', bar: 'bg-blue-500',
    duree: '4 mois', prix: '70 000', progress: 50,
    competences: ['Grammaire avancée', 'Vocabulaire pro', 'Culture germanophone', 'Oral autonome'],
    objectif: 'Autonomie réelle à l\'oral et à l\'écrit',
  },
  {
    code: 'B2', label: 'Avancé', couleur: 'bg-orange-500', ring: 'ring-orange-500', text: 'text-orange-600', bar: 'bg-orange-500',
    duree: '5 mois', prix: '85 000', progress: 72,
    competences: ['Expression avancée', 'Rédaction pro', 'Allemand des affaires', 'Médias germanophones'],
    objectif: 'Aisance professionnelle en entreprise',
  },
  {
    code: 'C1', label: 'Confirmé', couleur: 'bg-red-600', ring: 'ring-red-600', text: 'text-red-600', bar: 'bg-red-600',
    duree: '6 mois', prix: '110 000', progress: 92,
    competences: ['Maîtrise écrite', 'Oral avancé', 'Littérature & culture', 'Examens officiels'],
    objectif: 'Certification Goethe / TELC / ÖSD',
  },
]

export default function NiveauxPage() {
  return (
    <>
      <section className="bg-[#1A1A2E] text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Nos Niveaux de Formation</h1>
        <p className="text-gray-300 max-w-xl mx-auto">Du débutant complet au certifié C1 — un parcours progressif conforme au Cadre Européen Commun de Référence (CECR).</p>
      </section>

      {/* ── BARRE DE PROGRESSION CECR ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <Reveal animation="fade-up">
            <div className="flex items-center justify-between mb-3 px-1">
              {niveaux.map(n => (
                <div key={n.code} className="flex flex-col items-center gap-1">
                  <span className={`text-xs font-bold ${n.text}`}>{n.code}</span>
                </div>
              ))}
            </div>
            {/* Barre globale */}
            <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-full flex">
                {['bg-green-500','bg-teal-500','bg-blue-500','bg-orange-500','bg-red-600'].map((c, i) => (
                  <div key={i} className={`${c} flex-1 ${i > 0 ? 'ml-0.5' : ''}`} />
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400 px-1">
              <span>Débutant</span>
              <span>Certifié</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CARTES NIVEAUX ── */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="space-y-6">
          {niveaux.map((n, i) => (
            <Reveal key={n.code} animation="fade-up" delay={i * 60}>
              <div className={`bg-white rounded-2xl shadow-sm border-2 ${n.ring.replace('ring-', 'border-')}/20 overflow-hidden`}>
                <div className="grid md:grid-cols-[180px_1fr_1fr] gap-0">

                  {/* Colonne niveau */}
                  <div className={`${n.couleur} p-6 flex flex-col items-center justify-center text-white text-center`}>
                    <div className="text-4xl font-black mb-1">{n.code}</div>
                    <div className="text-sm font-semibold opacity-90">{n.label}</div>
                    <div className="mt-3 text-xs opacity-75">{n.duree}</div>
                    <div className="mt-1 font-bold text-sm">{n.prix} FCFA</div>
                  </div>

                  {/* Compétences travaillées */}
                  <div className="p-6 border-r border-gray-100">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Compétences travaillées</p>
                    <div className="grid grid-cols-2 gap-2">
                      {n.competences.map(c => (
                        <div key={c} className="flex items-center gap-2 text-sm text-[#1A1A2E]">
                          <div className={`w-1.5 h-1.5 rounded-full ${n.couleur} shrink-0`} />
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Objectif + barre + CTA */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Objectif</p>
                      <p className={`font-semibold ${n.text} text-sm mb-4`}>{n.objectif}</p>
                      {/* Barre de progression */}
                      <div className="mb-2">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>Progression CECR</span>
                          <span>{n.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className={`${n.bar} h-full rounded-full transition-all`} style={{ width: `${n.progress}%` }} />
                        </div>
                      </div>
                    </div>
                    <Link href={`/inscription?formation=${n.code}`}
                      className="mt-4 btn-primary text-center text-sm py-2 inline-flex items-center justify-center gap-2">
                      S&apos;inscrire <ArrowRight size={14} />
                    </Link>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CONSEIL PÉDAGOGIQUE ── */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal animation="fade-right">
            <div className="bg-[#F5F5F5] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#E8001C]/10 rounded-xl flex items-center justify-center">
                  <MessageCircle size={20} className="text-[#E8001C]" />
                </div>
                <h2 className="text-xl font-bold text-[#1A1A2E]">Pas sûr(e) de votre niveau ?</h2>
              </div>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Notre équipe vous propose un test de positionnement gratuit pour identifier votre niveau exact et vous orienter vers la formation la plus adaptée à votre profil.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary text-center text-sm py-2.5">Prendre rendez-vous</Link>
                <Link href="/formations" className="btn-secondary text-center text-sm py-2.5">Voir les formations</Link>
              </div>
            </div>
          </Reveal>

          <Reveal animation="fade-left" delay={150}>
            <div className="bg-[#1A1A2E] text-white rounded-2xl p-8">
              <h3 className="font-bold text-[#5ECFCF] mb-5 text-lg">Certifications visées par niveau</h3>
              <div className="space-y-3">
                {[
                  { niveau: 'A1 – A2', cert: 'Goethe Start Deutsch', couleur: 'bg-green-500' },
                  { niveau: 'B1',      cert: 'Goethe-Zertifikat B1 / TELC B1', couleur: 'bg-blue-500' },
                  { niveau: 'B2',      cert: 'Goethe-Zertifikat B2 / TELC B2', couleur: 'bg-orange-500' },
                  { niveau: 'C1',      cert: 'Goethe C1 / TELC C1 / ÖSD C1', couleur: 'bg-red-500' },
                ].map(r => (
                  <div key={r.niveau} className="flex items-center gap-3">
                    <span className={`${r.couleur} text-white text-xs font-bold px-2.5 py-1 rounded-lg shrink-0 w-14 text-center`}>{r.niveau}</span>
                    <span className="text-gray-300 text-sm">{r.cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
