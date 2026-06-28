'use client'
import { useRouter } from 'next/navigation'
import { useState, useCallback } from 'react'
import { CheckCircle, RotateCcw, Loader2 } from 'lucide-react'
import Toast, { ToastData } from '@/components/Toast'

interface Props {
  id: string
  traite: boolean
  /** Si true, affiche icone + texte (mode bloc). Si false, icone seule (mode tableau). */
  full?: boolean
}

export default function MarkTraiteButton({ id, traite, full = false }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<ToastData | null>(null)
  const closeToast = useCallback(() => setToast(null), [])

  async function handleToggle() {
    setLoading(true)
    const res = await fetch(`/api/admin/inscriptions/${id}/traite`, { method: 'PATCH' })
    setLoading(false)
    if (res.ok) {
      setToast({
        type: 'success',
        message: traite ? 'Marque comme en attente.' : 'Marque comme traite.',
      })
      setTimeout(() => router.refresh(), 800)
    } else {
      setToast({ type: 'error', message: 'Erreur lors de la mise a jour.' })
    }
  }

  if (full) {
    return (
      <>
        {toast && <Toast {...toast} onClose={closeToast} />}
        <button
          onClick={handleToggle}
          disabled={loading}
          className={`flex items-center gap-3 rounded-xl px-5 py-3 border-2 font-medium text-sm transition-colors disabled:opacity-50
            ${traite
              ? 'bg-green-50 border-green-200 text-green-700 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700'
              : 'bg-orange-50 border-orange-200 text-orange-700 hover:bg-green-50 hover:border-green-200 hover:text-green-700'
            }`}
        >
          {loading
            ? <Loader2 size={16} className="animate-spin" />
            : traite
              ? <RotateCcw size={16} />
              : <CheckCircle size={16} />
          }
          {traite ? 'Marquer comme non traite' : 'Marquer comme traite'}
        </button>
      </>
    )
  }

  // Mode icone seule (tableau)
  return (
    <>
      {toast && <Toast {...toast} onClose={closeToast} />}
      <button
        onClick={handleToggle}
        disabled={loading}
        className={`p-2 transition-colors disabled:opacity-50
          ${traite ? 'text-green-500 hover:text-orange-500' : 'text-gray-400 hover:text-green-600'}`}
        title={traite ? 'Marquer comme non traite' : 'Marquer comme traite'}
      >
        {loading
          ? <Loader2 size={16} className="animate-spin" />
          : traite ? <RotateCcw size={16} /> : <CheckCircle size={16} />
        }
      </button>
    </>
  )
}
