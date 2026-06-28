'use client'
import { useEffect } from 'react'
import { AlertTriangle, Loader2, X } from 'lucide-react'

interface Props {
  open: boolean
  title: string
  message: string
  confirmLabel?: string
  cancelLabel?: string
  danger?: boolean
  loading?: boolean
  onConfirm: () => void
  onCancel: () => void
}

export default function ConfirmModal({
  open, title, message,
  confirmLabel = 'Confirmer',
  cancelLabel = 'Annuler',
  danger = true,
  loading = false,
  onConfirm, onCancel,
}: Props) {
  // Fermer avec Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onCancel() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onCancel])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={loading ? undefined : onCancel}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-modal-in">
        {/* Bouton fermer */}
        <button
          onClick={onCancel}
          disabled={loading}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
        >
          <X size={18} />
        </button>

        {/* Icone */}
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5
          ${danger ? 'bg-red-100' : 'bg-blue-100'}`}>
          <AlertTriangle size={28} className={danger ? 'text-red-600' : 'text-blue-600'} />
        </div>

        {/* Contenu */}
        <h3 className="text-lg font-bold text-[#1A1A2E] text-center mb-2">{title}</h3>
        <p className="text-gray-500 text-sm text-center leading-relaxed mb-6">{message}</p>

        {/* Boutons */}
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            disabled={loading}
            className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className={`flex-1 px-4 py-2.5 rounded-xl font-medium text-sm text-white inline-flex items-center justify-center gap-2 transition-colors disabled:opacity-60
              ${danger ? 'bg-red-600 hover:bg-red-700' : 'bg-[#E8001C] hover:bg-[#c0001a]'}`}
          >
            {loading && <Loader2 size={15} className="animate-spin" />}
            {loading ? 'En cours...' : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
