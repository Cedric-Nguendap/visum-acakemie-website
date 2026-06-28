'use client'
import { useRouter } from 'next/navigation'
import { useState, useCallback } from 'react'
import { CheckCheck, Loader2 } from 'lucide-react'
import Toast, { ToastData } from '@/components/Toast'

interface Props {
  id: string
  full?: boolean
}

export default function MarkRecruteurLuButton({ id, full = false }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<ToastData | null>(null)
  const closeToast = useCallback(() => setToast(null), [])

  async function handle() {
    setLoading(true)
    const res = await fetch(`/api/admin/recruteurs/${id}`, { method: 'PATCH' })
    setLoading(false)
    if (res.ok) {
      setToast({ type: 'success', message: 'Demande marquee comme lue.' })
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
          onClick={handle}
          disabled={loading}
          className="flex items-center gap-3 bg-orange-50 border-2 border-orange-200 text-orange-700 rounded-xl px-5 py-3 font-medium text-sm hover:bg-green-50 hover:border-green-200 hover:text-green-700 transition-colors disabled:opacity-50"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <CheckCheck size={16} />}
          Marquer comme lu
        </button>
      </>
    )
  }

  return (
    <>
      {toast && <Toast {...toast} onClose={closeToast} />}
      <button
        onClick={handle}
        disabled={loading}
        className="p-2 text-gray-400 hover:text-green-500 transition-colors disabled:opacity-50"
        title="Marquer comme lu"
      >
        {loading ? <Loader2 size={16} className="animate-spin" /> : <CheckCheck size={16} />}
      </button>
    </>
  )
}
