import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  CheckCircle, ArrowRight, Star, Clock, Shield, Plane, BookOpen,
  Stethoscope, Wrench, ChefHat, Baby, Leaf,
  Building2, Cpu, Scissors, AlertCircle, FileText,
  Banknote, Home, Users, GraduationCap, Award,
  Landmark, Globe, Briefcase, CalendarCheck
} from 'lucide-react'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Formations Professionnelles en Allemagne',
  description: 'Découvrez les formations professionnelles rémunérées en Allemagne (Ausbildung) — diplômes reconnus, résidence permanente, salaire dès le 1er jour.',
}

const avantages = [
  { icon: Banknote, titre: 'Formation rémunérée',            valeur: '600 – 1 200 €/mois',  color: 'bg-green-500' },
  { icon: Award,    titre: 'Diplôme reconnu UE',             valeur: 'Berufsabschluss',     color: 'bg-blue-500' },
  { icon: Home,     titre: 'Titre de séjour permanent',           valeur: '2 à 5 ans aprés formation',          color: 'bg-purple-500' },
  { icon: Shield,   titre: 'Avantages sociaux',             valeur: 'Complète dès M+1',     color: 'bg-orange-500' },
  { icon: Plane,    titre: 'Démarches clair et assisté ',                  valeur: 'Visa Ausbildung',      color: 'bg-[#5ECFCF]' },
  { icon: Star,     titre: 'Évolution rapide',               valeur: 'Meister · Études sup.', color: 'bg-[#E8001C]' },
]

const formations = [
  {
    icon: Stethoscope, secteur: 'Santé',
    metiers: [
      { nom: 'Infirmier(ère) (Pflegefachmann/-frau)', duree: '3 ans', salaire: '1 100 – 1 400 €/mois' },
      { nom: 'Aide-soignant(e) (Pflegehelfer/in)', duree: '1 an', salaire: '800 – 1 000 €/mois' },
      { nom: 'Assistant(e) médical(e) (MFA)', duree: '3 ans', salaire: '700 – 950 €/mois' },
      { nom: 'Technicien(ne) de radiologie', duree: '3 ans', salaire: '1 000 – 1 200 €/mois' },
      { nom: 'Pharmacien(ne) assistant(e)', duree: '3 ans', salaire: '900 – 1 100 €/mois' },
    ],
    color: 'border-red-200 bg-red-50', badge: 'bg-red-100 text-red-700',
  },
  {
    icon: Baby, secteur: 'Petite enfance & Social',
    metiers: [
      { nom: 'Éducateur(trice) de jeunes enfants (Erzieher/in)', duree: '3 ans', salaire: '1 000 – 1 300 €/mois' },
      { nom: 'Assistant(e) social(e)', duree: '3 ans', salaire: '900 – 1 100 €/mois' },
      { nom: 'Auxiliaire de vie (Altenpfleger/in)', duree: '3 ans', salaire: '1 000 – 1 200 €/mois' },
    ],
    color: 'border-pink-200 bg-pink-50', badge: 'bg-pink-100 text-pink-700',
  },
  {
    icon: Wrench, secteur: 'Artisanat & Technique',
    metiers: [
      { nom: 'Électricien(ne) (Elektroniker/in)', duree: '3,5 ans', salaire: '700 – 1 000 €/mois' },
      { nom: 'Mécanicien(ne) automobile (KFZ-Mechatroniker/in)', duree: '3,5 ans', salaire: '700 – 950 €/mois' },
      { nom: 'Plombier / Chauffagiste (Anlagenmechaniker/in)', duree: '3,5 ans', salaire: '700 – 950 €/mois' },
      { nom: 'Menuisier(ère) (Tischler/in)', duree: '3 ans', salaire: '600 – 850 €/mois' },
    ],
    color: 'border-orange-200 bg-orange-50', badge: 'bg-orange-100 text-orange-700',
  },
  {
    icon: ChefHat, secteur: 'Hôtellerie & Restauration',
    metiers: [
      { nom: 'Cuisinier(ère) (Koch/Köchin)', duree: '3 ans', salaire: '600 – 900 €/mois' },
      { nom: 'Serveur(euse) / Restauration (Restaurantfachmann/-frau)', duree: '3 ans', salaire: '600 – 850 €/mois' },
      { nom: 'Réceptionniste hôtelier(ère)', duree: '3 ans', salaire: '700 – 950 €/mois' },
    ],
    color: 'border-yellow-200 bg-yellow-50', badge: 'bg-yellow-100 text-yellow-700',
  },
  {
    icon: Cpu, secteur: 'Informatique & Digital',
    metiers: [
      { nom: 'Informaticien(ne) (Fachinformatiker/in)', duree: '3 ans', salaire: '800 – 1 100 €/mois' },
      { nom: 'Technicien(ne) systèmes & réseaux', duree: '3 ans', salaire: '800 – 1 050 €/mois' },
      { nom: 'Développeur(euse) web (Mediengestalter/in)', duree: '3 ans', salaire: '750 – 1 000 €/mois' },
    ],
    color: 'border-blue-200 bg-blue-50', badge: 'bg-blue-100 text-blue-700',
  },
  {
    icon: Building2, secteur: 'Commerce & Gestion',
    metiers: [
      { nom: 'Assistant(e) commercial(e) (Kaufmann/-frau)', duree: '3 ans', salaire: '700 – 1 000 €/mois' },
      { nom: 'Gestionnaire de paie (Steuerfachangestellte/r)', duree: '3 ans', salaire: '700 – 950 €/mois' },
      { nom: 'Logisticien(ne) (Fachkraft für Lagerlogistik)', duree: '3 ans', salaire: '700 – 900 €/mois' },
    ],
    color: 'border-teal-200 bg-teal-50', badge: 'bg-teal-100 text-teal-700',
  },
  {
    icon: Leaf, secteur: 'Agriculture & Environnement',
    metiers: [
      { nom: 'Agriculteur(trice) (Landwirt/in)', duree: '3 ans', salaire: '600 – 850 €/mois' },
      { nom: 'Jardinier(ère) paysagiste (Gärtner/in)', duree: '3 ans', salaire: '600 – 800 €/mois' },
    ],
    color: 'border-green-200 bg-green-50', badge: 'bg-green-100 text-green-700',
  },
  {
    icon: Scissors, secteur: 'Beauté & Bien-être',
    metiers: [
      { nom: 'Coiffeur(euse) (Friseur/in)', duree: '3 ans', salaire: '600 – 800 €/mois' },
      { nom: 'Esthéticien(ne) (Kosmetiker/in)', duree: '3 ans', salaire: '600 – 800 €/mois' },
    ],
    color: 'border-purple-200 bg-purple-50', badge: 'bg-purple-100 text-purple-700',
  },
]

const criteres = [
  {
    icon: GraduationCap, titre: 'Niveau scolaire', color: 'bg-blue-500',
    items: [
      { label: 'Baccalauréat', note: 'minimum' },
      { label: 'BEPC / CAP', note: 'certains métiers techniques' },
      { label: 'Licence', note: 'filières santé avancées' },
    ],
  },
  {
    icon: BookOpen, titre: "Niveau d'allemand", color: 'bg-[#E8001C]',
    items: [
      { label: 'B1 minimum', note: 'pour la plupart des formations' },
      { label: 'B2 recommandé', note: 'santé & social' },
      { label: 'Certification', note: 'Goethe · TELC · ÖSD · ECL exigée' },
    ],
  },
  {
    icon: FileText, titre: 'Documents requis', color: 'bg-orange-500',
    items: [
      { label: 'Passeport valide', note: '2 ans minimum' },
      { label: 'Diplômes traduits', note: 'apostillés' },
      { label: 'CV Europass', note: 'en allemand' },
      { label: 'Casier judiciaire', note: 'vierge' },
    ],
  },
  {
    icon: Users, titre: 'Profil personnel', color: 'bg-purple-500',
    items: [
      { label: 'Âge', note: '18 à 35 ans' },
      { label: 'Condition physique', note: 'santé obligatoire' },
      { label: 'Motivation', note: 'démontrable' },
      { label: 'Adaptabilité', note: 'culturelle' },
    ],
  },
]

const etapes = [
  { num: '01', titre: "Apprendre l'allemand", desc: 'Atteindre le niveau B1/B2 avec Visum Akademie. Durée : 6 à 18 mois selon votre point de départ.', color: 'bg-[#E8001C]' },
  { num: '02', titre: 'Obtenir la certification', desc: "Passer et réussir l'examen Goethe-Zertifikat, TELC, Ösd, ECL ou Telc pour valider officiellement votre niveau.", color: 'bg-orange-500' },
  { num: '03', titre: 'Préparer le dossier', desc: 'Rassembler et faire traduire tous vos documents. Visum Akademie vous accompagne dans cette étape.', color: 'bg-blue-500' },
  { num: '04', titre: 'Trouver un employeur', desc: "Postuler auprès d'entreprises allemandes. Nous vous mettons en relation avec nos partenaires.", color: 'bg-purple-500' },
  { num: '05', titre: 'Obtenir le visa', desc: "Déposer votre demande de visa Ausbildung à l'ambassade d'Allemagne. Délai : 4 à 8 semaines.", color: 'bg-teal-500' },
  { num: '06', titre: 'Démarrer en Allemagne', desc: 'Arriver en Allemagne, intégrer votre entreprise et commencer à percevoir votre salaire de formation.', color: 'bg-green-500' },
]

export default function FormationsProfessionnellesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] text-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Texte */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Formez-vous en Allemagne,<br />
                <span className="text-[#5ECFCF]">payé dès le 1er mois</span>
              </h1>
              <p className="text-gray-300 text-base mb-8 leading-relaxed">
                La Ausbildung : travail en entreprise, salaire dès le départ, diplôme reconnu dans toute l&apos;Europe.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/inscription" className="btn-primary px-8 py-3 text-base">Démarrer mon parcours</Link>
                <Link href="/contact" className="btn-outline-white px-8 py-3 text-base">Parler à un conseiller</Link>
              </div>
            </div>
            {/* Image */}
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                // src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                src="https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Étudiant en formation professionnelle en Allemagne"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#5ECFCF] rounded-full flex items-center justify-center text-[#1A1A2E] font-black text-sm">✓</div>
                  <div>
                    <p className="text-white font-semibold text-sm">Formation rémunérée dès M+1</p>
                    <p className="text-gray-300 text-xs">600 – 1 400 € / mois en entreprise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Chiffres clés */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            {[
              { value: '1 – 3 ans', label: 'Durée de formation' },
              { value: '600 – 1 400 €', label: 'Salaire mensuel' },
              { value: '300+', label: 'Métiers disponibles' },
              { value: '100%', label: 'Diplôme reconnu UE' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-black text-[#5ECFCF]">{s.value}</div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AVANTAGES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal animation="fade-up">
            <div className="text-center mb-14">
              <h2 className="section-title">Pourquoi choisir la Ausbildung ?</h2>
              <p className="section-subtitle">Un système unique au monde qui combine travail, formation et rémunération dès le premier mois.</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {avantages.map(({ icon: Icon, titre, valeur, color }, i) => (
              <Reveal key={titre} animation="fade-up" delay={i * 80} className="border border-gray-100 rounded-2xl p-5 hover:shadow-lg transition-shadow flex items-center gap-4">
                <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}>
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A2E] text-sm">{titre}</h3>
                  <p className="text-gray-400 text-xs mt-0.5">{valeur}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMATIONS DISPONIBLES ── */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal animation="fade-up">
            <div className="text-center mb-14">
              <h2 className="section-title">Formations disponibles en Allemagne</h2>
              <p className="section-subtitle">Plus de 300 métiers sont accessibles via l&apos;Ausbildung. Voici les secteurs les plus demandés par les candidats africains.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {formations.map(({ icon: Icon, secteur, metiers, color, badge }, i) => (
              <Reveal key={secteur} animation="fade-up" delay={i * 60} className={`rounded-2xl border-2 ${color} p-6`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Icon size={20} className="text-[#1A1A2E]" />
                  </div>
                  <h3 className="font-bold text-[#1A1A2E] text-lg">{secteur}</h3>
                </div>
                <div className="space-y-3">
                  {metiers.map(m => (
                    <div key={m.nom} className="bg-white rounded-xl p-4 flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <p className="font-medium text-[#1A1A2E] text-sm">{m.nom}</p>
                        <span className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                          <Clock size={11} />{m.duree}
                        </span>
                      </div>
                      <span className={`badge ${badge} text-xs whitespace-nowrap shrink-0`}>{m.salaire}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">* Salaires indicatifs bruts. Ils varient selon la région, l&apos;entreprise et l&apos;année de formation.</p>
        </div>
      </section>

      {/* ── CRITÈRES D'ADMISSIBILITÉ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal animation="fade-up">
            <div className="text-center mb-14">
              <h2 className="section-title">Critères d&apos;admissibilité</h2>
              <p className="section-subtitle">Voici les conditions générales pour accéder à une formation professionnelle en Allemagne. Certains critères varient selon le secteur.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {criteres.map(({ icon: Icon, titre, color, items }, i) => (
              <Reveal key={titre} animation="fade-up" delay={i * 100} className="bg-[#F5F5F5] rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${color} w-9 h-9 rounded-lg flex items-center justify-center shrink-0`}>
                    <Icon size={17} className="text-white" />
                  </div>
                  <h3 className="font-bold text-[#1A1A2E]">{titre}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {items.map(item => (
                    <div key={item.label} className="bg-white rounded-xl px-3 py-2 flex items-center gap-2">
                      <CheckCircle size={13} className="text-green-500 shrink-0" />
                      <div>
                        <span className="text-xs font-semibold text-[#1A1A2E]">{item.label}</span>
                        <span className="text-gray-400 text-xs block leading-tight">{item.note}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal animation="fade-up" delay={100}>
            <div className="bg-[#E8001C]/5 border-2 border-[#E8001C]/20 rounded-2xl p-6 flex items-start gap-4">
              <AlertCircle size={24} className="text-[#E8001C] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[#1A1A2E] mb-1">Le niveau d&apos;allemand est la clé</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sans un niveau B1 minimum certifié, votre dossier ne sera pas retenu par les employeurs allemands. C&apos;est pourquoi Visum+ Akademie vous prépare spécifiquement aux certifications officielles (Goethe, TELC, ÖSD, ECL) avant de vous accompagner dans vos démarches d&apos;Ausbildung.
                </p>
                <Link href="/formations" className="inline-flex items-center gap-2 text-[#E8001C] font-semibold text-sm mt-3 hover:underline">
                  Voir nos cours d&apos;allemand <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PARCOURS EN 6 ÉTAPES ── */}
      <section className="py-20 bg-[#1A1A2E] text-white">
        <div className="max-w-5xl mx-auto px-4">
          <Reveal animation="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Votre parcours en 6 étapes</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                De l&apos;apprentissage de l&apos;allemand à votre premier jour en entreprise en Allemagne.
              </p>
            </div>
          </Reveal>
          {/* Timeline verticale */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/10" />
            <div className="space-y-0">
              {etapes.map(({ num, titre, desc, color }, i) => (
                <Reveal key={num} animation="fade-left" delay={i * 80}>
                  <div className="relative flex gap-6 pb-8 last:pb-0">
                    <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-base shrink-0 z-10 relative`}>{num}</div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex-1 hover:bg-white/10 transition-colors">
                      <h3 className="font-bold text-white mb-1">{titre}</h3>
                      <p className="text-gray-400 text-sm">{desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉTUDES UNIVERSITAIRES EN ALLEMAGNE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal animation="fade-up">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <GraduationCap size={16} />Voie universitaire
              </div>
              <h2 className="section-title">Étudier en Allemagne</h2>
              <p className="section-subtitle">
                L&apos;Allemagne propose des universités publiques de rang mondial, majoritairement <strong>gratuites ou à frais très réduits</strong>. Une alternative sérieuse pour ceux qui visent un diplôme de Licence, Master ou Doctorat.
              </p>
            </div>
          </Reveal>

          {/* Atouts études */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {([
              { Icon: Landmark,     color: 'bg-blue-500',   titre: 'Universités publiques gratuites',  desc: 'Frais de scolarité quasi nuls dans la plupart des Länder (0 – 500 €/semestre)' },
              { Icon: Globe,        color: 'bg-teal-500',   titre: 'Diplômes reconnus mondialement',   desc: "Bachelor, Master, Doctorat reconnus dans toute l'UE et à l'international" },
              { Icon: Briefcase,    color: 'bg-orange-500', titre: 'Droit de travailler',              desc: "120 jours/an d'emploi autorisé pendant les études, salaire étudiant possible" },
              { Icon: CalendarCheck,color: 'bg-purple-500', titre: 'Résidence après études',           desc: "18 mois de droit au séjour pour chercher un emploi après l'obtention du diplôme" },
            ] as const).map(({ Icon, color, titre, desc }, i) => (
              <Reveal key={titre} animation="fade-up" delay={i * 80} className="bg-[#F5F5F5] rounded-2xl p-5">
                <div className={`${color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-[#1A1A2E] text-sm mb-2">{titre}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </Reveal>
            ))}
          </div>

          {/* Conditions + Processus côte à côte */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Conditions */}
            <Reveal animation="fade-right">
              <div className="bg-[#F5F5F5] rounded-2xl p-7">
                <h3 className="font-bold text-[#1A1A2E] text-lg mb-5 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                    <FileText size={16} className="text-white" />
                  </div>
                  Conditions d&apos;admission
                </h3>
                <div className="space-y-3">
                  {[
                    { label: 'Niveau d\'allemand', note: 'C1 minimum (DSH ou TestDaF)', color: 'bg-blue-500' },
                    { label: 'Baccalauréat reconnu', note: 'ou équivalence via uni-assist', color: 'bg-teal-500' },
                    { label: 'Dossier académique', note: 'relevés de notes, lettres de motivation', color: 'bg-purple-500' },
                    { label: 'Passeport valide', note: '+ photo biométrique', color: 'bg-orange-500' },
                    { label: 'Preuve de financement', note: '11 208 € sur compte bloqué (2025)', color: 'bg-green-500' },
                    { label: 'Assurance maladie', note: 'obligatoire avant inscription', color: 'bg-red-500' },
                  ].map(item => (
                    <div key={item.label} className="bg-white rounded-xl px-4 py-3 flex items-center gap-3">
                      <div className={`${item.color} w-2 h-2 rounded-full shrink-0`} />
                      <div>
                        <span className="text-sm font-semibold text-[#1A1A2E]">{item.label}</span>
                        <span className="text-gray-400 text-xs block">{item.note}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Processus */}
            <Reveal animation="fade-left" delay={100}>
              <div className="bg-[#1A1A2E] rounded-2xl p-7 text-white">
                <h3 className="font-bold text-[#5ECFCF] text-lg mb-5 flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#5ECFCF]/20 rounded-lg flex items-center justify-center shrink-0">
                    <ArrowRight size={16} className="text-[#5ECFCF]" />
                  </div>
                  Parcours en 5 étapes
                </h3>
                <div className="space-y-4">
                  {[
                    { num: '01', titre: 'Atteindre le niveau C1', desc: 'Se préparer au DSH ou TestDaF avec Visum+ Akademie', color: 'bg-[#E8001C]' },
                    { num: '02', titre: 'Choisir son université', desc: 'Rechercher via uni-assist ou directement les universités allemandes', color: 'bg-blue-500' },
                    { num: '03', titre: 'Soumettre son dossier', desc: 'Diplômes traduits et apostillés, lettre de motivation, CV', color: 'bg-orange-500' },
                    { num: '04', titre: 'Ouvrir le compte bloqué', note: '11 208 € via Fintiba, Coracle ou banque allemande', color: 'bg-purple-500' },
                    { num: '05', titre: 'Demander le visa étudiant', desc: 'Déposer à l\'ambassade d\'Allemagne — délai 4 à 12 semaines', color: 'bg-teal-500' },
                  ].map(e => (
                    <div key={e.num} className="flex items-start gap-4">
                      <div className={`${e.color} w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-xs shrink-0 mt-0.5`}>{e.num}</div>
                      <div>
                        <p className="font-semibold text-white text-sm">{e.titre}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{e.desc ?? e.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Note d'info */}
          <Reveal animation="fade-up" delay={100}>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 flex items-start gap-4">
              <AlertCircle size={22} className="text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[#1A1A2E] mb-1">Le niveau C1 est indispensable pour les études universitaires</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  La plupart des universités allemandes exigent le DSH-2 ou le TestDaF 4×4 (équivalent C1). Visum+ Akademie vous accompagne de A1 jusqu&apos;au C1 pour vous préparer à ces certifications et maximiser vos chances d&apos;admission.
                </p>
                <Link href="/formations" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm mt-3 hover:underline">
                  Commencer la préparation C1 <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      
      {/* ── COMPARATIF ── */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto px-4">
          <Reveal animation="fade-up">
            <div className="text-center mb-14">
              <h2 className="section-title">Ausbildung vs Études classiques</h2>
              <p className="section-subtitle">Pourquoi l&apos;Ausbildung est souvent le meilleur choix pour les candidats africains.</p>
            </div>
          </Reveal>
          <Reveal animation="zoom" delay={100}>
            {/* Desktop : tableau */}
            <div className="hidden md:block rounded-2xl shadow-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="bg-[#1A1A2E] text-left px-6 py-5 font-semibold text-gray-400 w-1/3">Critère</th>
                    <th className="bg-[#E8001C] text-center px-6 py-5 font-bold text-white">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-2xl">🇩🇪</span>
                        <span className="text-base">Ausbildung</span>
                        <span className="text-red-200 text-xs font-normal">Formation professionnelle</span>
                      </div>
                    </th>
                    <th className="bg-[#1A1A2E] text-center px-6 py-5 font-semibold text-gray-400">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-2xl">🎓</span>
                        <span>Études universitaires</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Rémunération', '✅ Oui, dès le 1er mois', '❌ Non (frais de scolarité)'],
                    ['Durée', '1 à 3 ans', '3 à 5 ans'],
                    ['Niveau allemand requis', 'B1 / B2', 'B2 minimum'],
                    ['Visa', 'Visa Ausbildung (contrat de travail)', 'Visa étudiant (pas de contrat)'],
                    ['Titre de séjour permanent', '✅ Après 2 ans de travail', '✅ Après études + travail'],
                    ['Insertion professionnelle', '✅ Quasi immédiate', '⏳ Variable'],
                    ['Reconnaissance diplôme', '✅ UE + international', '✅ UE + international'],
                  ].map(([critere, ausbildung, etudes], i) => (
                    <tr key={critere} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/80'}>
                      <td className="px-6 py-4 font-semibold text-[#1A1A2E] border-r border-gray-100">{critere}</td>
                      <td className="px-6 py-4 text-center font-semibold text-green-700 bg-green-50/50 border-x-2 border-[#E8001C]/15">
                        {ausbildung}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-400">{etudes}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="px-6 py-4 bg-gray-100" />
                    <td className="px-6 py-5 bg-[#E8001C]/5 border-x-2 border-[#E8001C]/15 text-center">
                      <Link href="/inscription" className="btn-primary text-xs py-2.5 px-5 inline-block">
                        Démarrer mon Ausbildung →
                      </Link>
                    </td>
                    <td className="px-6 py-4 bg-gray-100 text-center text-gray-400 text-xs">Option classique</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Mobile : cartes empilées */}
            <div className="md:hidden space-y-3">
              {/* Header mobile */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#E8001C] rounded-2xl p-4 text-white text-center">
                  <div className="text-2xl mb-1">🇩🇪</div>
                  <div className="font-bold text-sm">Ausbildung</div>
                  <div className="text-red-200 text-xs">Formation pro</div>
                </div>
                <div className="bg-[#1A1A2E] rounded-2xl p-4 text-white text-center">
                  <div className="text-2xl mb-1">🎓</div>
                  <div className="font-semibold text-sm">Études univ.</div>
                  <div className="text-gray-400 text-xs">Classique</div>
                </div>
              </div>
              {/* Lignes */}
              {[
                ['Rémunération', '✅ Dès le 1er mois', '❌ Frais de scolarité'],
                ['Durée', '1 à 3 ans', '3 à 5 ans'],
                ['Niveau allemand', 'B1 / B2', 'B2 minimum'],
                ['Visa', 'Visa Ausbildung', 'Visa étudiant'],
                ['Titre de séjour', '✅ Après 2 ans', '✅ Après études'],
                ['Insertion pro', '✅ Quasi immédiate', '⏳ Variable'],
                ['Diplôme', '✅ UE + international', '✅ UE + international'],
              ].map(([critere, ausbildung, etudes], i) => (
                <div key={critere} className={`rounded-xl overflow-hidden ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <div className="px-4 py-2 bg-[#1A1A2E]/5 text-xs font-bold text-[#1A1A2E] uppercase tracking-wide">
                    {critere}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-100">
                    <div className="px-4 py-3 text-sm font-semibold text-green-700 bg-green-50/60 text-center">
                      {ausbildung}
                    </div>
                    <div className="px-4 py-3 text-sm text-gray-400 text-center">
                      {etudes}
                    </div>
                  </div>
                </div>
              ))}
              {/* CTA mobile */}
              <Link href="/inscription" className="btn-primary w-full text-center block py-3 text-sm mt-2">
                Démarrer mon Ausbildung →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 bg-[#E8001C] text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Reveal animation="zoom">
            <div className="text-5xl mb-4">🇩🇪</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à construire votre avenir en Allemagne ?</h2>
            <p className="text-red-100 text-lg mb-2">La première étape, c&apos;est l&apos;allemand.</p>
            <p className="text-red-200 text-sm mb-10 max-w-xl mx-auto">
              Commencez dès aujourd&apos;hui votre formation linguistique avec Visum Akademie. Nos formateurs vous préparent spécifiquement aux exigences de l&apos;Ausbildung.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/inscription" className="bg-white text-[#E8001C] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">S&apos;inscrire maintenant</Link>
              <Link href="/formations" className="btn-outline-white px-8 py-3">Voir nos cours d&apos;allemand</Link>
              <Link href="/contact" className="btn-outline-white px-8 py-3">Parler à un conseiller</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
