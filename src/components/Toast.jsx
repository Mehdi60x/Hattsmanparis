import { useStore } from '../context/StoreContext'

export default function Toast() {
  const { toasts } = useStore()
  if (!toasts.length) return null
  return (
    <div className="toast-container" role="status" aria-live="polite">
      {toasts.map((t) => (
        <div className="toast" key={t.id}>
          {t.message}
        </div>
      ))}
    </div>
  )
}
