'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { useState, useCallback } from 'react'
import { Loader2 } from 'lucide-react'
import Toast, { ToastData } from '@/components/Toast'

const schema = z.object({
  titre: z.string().min(3, 'Titre requis'),
  niveau: z.enum(['DEBUTANT', 'ELEMENTAIRE', 'INTERMEDIAIRE', 'AVANCE', 'EXPERT']),
  domaine: z.string().min(2, 'Domaine requis'),
  description: z.string().min(10, 'Description requise'),
  programme: z.string().min(10, 'Programme requis'),
  prerequis: z.string().optional(),
  debouches: z.string().optional(),
  formateur: z.string().min(2, 'Formateur requis'),
  duree: z.string().min(1, 'Duree requise'),
  prix: z.string().min(1, 'Prix requis').refine(v => !isNaN(Number(v)) && Number(v) > 0, 'Prix invalide'),
  image: z.string().optional(),
  publie: z.boolean(),
})

type FormData = z.infer<typeof schema>
type Props = {
  defaultValues?: Partial<Omit<FormData, 'prix'>> & { prix?: number | string }
  formationId?: string
}

const NIVEAUX = [
  ['DEBUTANT',      'Debutant (A1)'],
  ['ELEMENTAIRE',   'Elementaire (A2)'],
  ['INTERMEDIAIRE', 'Intermediaire (B1)'],
  ['AVANCE',        'Avance (B2)'],
  ['EXPERT',        'Expert (C1)'],
] as const

export default function FormationForm({ defaultValues, formationId }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<ToastData | null>(null)
  const [imgPreview, setImgPreview] = useState(
    typeof defaultValues?.image === 'string' ? defaultValues.image : ''
  )
  const closeToast = useCallback(() => setToast(null), [])

  const { register, handleSubmit, formState: { errors }, getValues } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      publie: true,
      niveau: 'DEBUTANT',
      image: '',
      ...defaultValues,
      prix: defaultValues?.prix !== undefined ? String(defaultValues.prix) : '',
    },
  })

  async function onSubmit(data: FormData) {
    setLoading(true)
    const payload = { ...data, prix: Number(data.prix), image: data.image?.trim() || null }
    const url = formationId ? `/api/admin/formations/${formationId}` : '/api/admin/formations'
    const method = formationId ? 'PUT' : 'POST'
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    setLoading(false)
    if (res.ok) {
      setToast({ type: 'success', message: formationId ? 'Formation mise a jour !' : 'Formation creee avec succes !' })
      setTimeout(() => { router.push('/admin/formations'); router.refresh() }, 1200)
    } else {
      setToast({ type: 'error', message: 'Une erreur est survenue. Veuillez reessayer.' })
    }
  }

  return (
    <>
      {toast && <Toast {...toast} onClose={closeToast} />}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white rounded-xl shadow-sm p-8">
        <div className="grid md:grid-cols-2 gap-6">
          {([
            ['titre',    'Titre'],
            ['domaine',  'Domaine'],
            ['formateur','Formateur'],
            ['duree',    'Duree (ex: 3 mois)'],
            ['prix',     'Prix (FCFA)'],
          ] as const).map(([name, label]) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{label} *</label>
              <input {...register(name)} className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#E8001C]" />
              {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]?.message as string}</p>}
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Niveau *</label>
            <select {...register('niveau')} className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#E8001C]">
              {NIVEAUX.map(([val, label]) => (
                <option key={val} value={val}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
          <textarea {...register('description')} rows={3} className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#E8001C] resize-none" />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Programme *</label>
          <textarea {...register('programme')} rows={6} className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#E8001C] resize-none" placeholder="Detaillez les modules, une ligne par module..." />
          {errors.programme && <p className="text-red-500 text-xs mt-1">{errors.programme.message}</p>}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Prerequis</label>
            <textarea {...register('prerequis')} rows={3} className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#E8001C] resize-none" placeholder="Un prerequis par ligne..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Debouches</label>
            <textarea {...register('debouches')} rows={3} className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#E8001C] resize-none" placeholder="Un debouche par ligne..." />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image de couverture (URL)</label>
          <input
            {...register('image')}
            placeholder="https://exemple.com/image.jpg"
            onBlur={() => setImgPreview(getValues('image') || '')}
            className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#E8001C]"
          />
          <p className="text-gray-400 text-xs mt-1">Optionnel. URL directe vers une image.</p>
          {imgPreview && (
            <div className="mt-2 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 h-40 relative">
              <img src={imgPreview} alt="preview" className="w-full h-full object-cover" onError={() => setImgPreview('')} />
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" {...register('publie')} id="publie" className="w-4 h-4 accent-[#E8001C]" />
          <label htmlFor="publie" className="text-sm font-medium text-gray-700">Publier cette formation</label>
        </div>

        <div className="flex gap-4 pt-2">
          <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60 inline-flex items-center gap-2">
            {loading && <Loader2 size={16} className="animate-spin" />}
            {loading ? 'Enregistrement...' : formationId ? 'Mettre a jour' : 'Creer la formation'}
          </button>
          <button type="button" onClick={() => router.back()} className="btn-secondary">Annuler</button>
        </div>
      </form>
    </>
  )
}
