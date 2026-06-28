'use client'
import { useRouter } from 'next/navigation'
import { useState, useCallback } from 'react'
import { Trash2, Loader2 } from 'lucide-react'
import ConfirmModal from '@/components/ConfirmModal'
import Toast, { ToastData } from '@/components/Toast'

interface Props {
  id: string
  redirectAfter?: string
  full?: boolean
}

export default function DeleteInscriptionButton({ id, redirectAfter, full = false }: Props) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<ToastData | null>(null)
  const closeToast = useCallback(() => setToast(null), [])

  async function handleConfirm() {
    setLoading(true)
    const res = await fetch(`/api/admin/inscriptions/${id}`, { method: 'DELETE' })
    setLoading(false)
    setOpen(false)
    if (res.ok) {
      setToast({ type: 'success', message: 'Inscription supprimee.' })
      setTimeout(() => {
        if (redirectAfter) router.push(redirectAfter)
        else router.refresh()
      }, 1000)
    } else {
      setToast({ type: 'error', message: 'Erreur lors de la suppression.' })
    }
  }

  const modal = (
    <ConfirmModal
      open={open}
      title="Supprimer l inscription"
      message="Cette inscription sera definitivement supprimee. Cette action est irreversible."
      confirmLabel="Supprimer"
      loading={loading}
      onConfirm={handleConfirm}
      onCancel={() => setOpen(false)}
    />
  )

  if (full) {
    return (
      <>
        {toast && <Toast {...toast} onClose={closeToast} />}
        {modal}
        <button
          onClick={() => setOpen(true)}
          disabled={loading}
          className="flex items-center gap-3 bg-red-50 border-2 border-red-200 text-red-700 rounded-xl px-5 py-3 font-medium text-sm hover:bg-red-100 hover:border-red-300 transition-colors disabled:opacity-50"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
          Supprimer
        </button>
      </>
    )
  }

  return (
    <>
      {toast && <Toast {...toast} onClose={closeToast} />}
      {modal}
      <button
        onClick={() => setOpen(true)}
        disabled={loading}
        className="p-2 text-gray-400 hover:text-red-600 transition-colors disabled:opacity-50"
        title="Supprimer"
      >
        {loading ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
      </button>
    </>
  )
}
