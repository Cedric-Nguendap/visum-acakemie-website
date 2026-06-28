'use client'
import { useRouter } from 'next/navigation'
import { useState, useCallback } from 'react'
import { Loader2 } from 'lucide-react'
import Toast, { ToastData } from '@/components/Toast'

export default function MarkAsReadButton({ id }: { id: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<ToastData | null>(null)
  const closeToast = useCallback(() => setToast(null), [])

  async function handleMark() {
    setLoading(true)
    const res = await fetch('/api/admin/messages', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    setLoading(false)
    if (res.ok) {
      setToast({ type: 'success', message: 'Message marque comme lu.' })
      setTimeout(() => router.refresh(), 800)
    } else {
      setToast({ type: 'error', message: 'Erreur lors de la mise a jour.' })
    }
  }

  return (
    <>
      {toast && <Toast {...toast} onClose={closeToast} />}
      <button
        onClick={handleMark}
        disabled={loading}
        className="text-xs text-gray-400 hover:text-[#E8001C] whitespace-nowrap transition-colors shrink-0 disabled:opacity-50 inline-flex items-center gap-1"
      >
        {loading && <Loader2 size={11} className="animate-spin" />}
        Marquer lu
      </button>
    </>
  )
}
