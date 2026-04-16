export default function Toast({ message, type, visible }) {
  const icons = { success: '✅', error: '❌', info: 'ℹ️' }
  return (
    <div className={`toast${visible ? ' show' : ''}`} id="toast" aria-live="polite">
      {message}
    </div>
  )
}
