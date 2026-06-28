'use client'
import { useRouter } from 'next/navigation'
import { useState, useCallback } from 'react'
import { Trash2 } from 'lucide-react'
import ConfirmModal from '@/components/ConfirmModal'
import Toast, { ToastData } from '@/components/Toast'

export default function DeleteMessageButton({ id }: { id: string }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<ToastData | null>(null)
  const closeToast = useCallback(() => setToast(null), [])

  async function handleConfirm() {
    setLoading(true)
    const res = await fetch(`/api/admin/messages/${id}`, { method: 'DELETE' })
    setLoading(false)
    setOpen(false)
    if (res.ok) {
      setToast({ type: 'success', message: 'Message supprime.' })
      setTimeout(() => router.refresh(), 1000)
    } else {
      setToast({ type: 'error', message: 'Erreur lors de la suppression.' })
    }
  }

  return (
    <>
      {toast && <Toast {...toast} onClose={closeToast} />}
      <ConfirmModal
        open={open}
        title="Supprimer le message"
        message="Ce message sera definitivement supprime et ne pourra plus etre consulte."
        confirmLabel="Supprimer"
        loading={loading}
        onConfirm={handleConfirm}
        onCancel={() => setOpen(false)}
      />
      <button
        onClick={() => setOpen(true)}
        className="p-1.5 text-gray-400 hover:text-red-600 transition-colors"
        title="Supprimer"
      >
        <Trash2 size={15} />
      </button>
    </>
  )
}
