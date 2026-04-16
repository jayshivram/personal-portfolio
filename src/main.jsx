import React, { useState, useEffect, useCallback, createContext, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import MainLayout from './MainLayout.jsx'
import NotFound from './pages/NotFound.jsx'
import './index.css'

// ===== THEME CONTEXT (global) =====
export const ThemeContext = createContext(null)
export const useTheme = () => useContext(ThemeContext)

// ===== TOAST CONTEXT (global) =====
export const ToastContext = createContext(null)
export const useToast = () => useContext(ToastContext)

function Root() {
  const getInitialTheme = () => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    if (theme === 'dark') {
      document.body.setAttribute('data-theme', 'dark')
    } else {
      document.body.removeAttribute('data-theme')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = useCallback(() => setTheme(t => t === 'dark' ? 'light' : 'dark'), [])

  // ── Toast ──────────────────────────────────────────────────────────────
  const [toastState, setToastState] = useState({ message: '', visible: false })

  const showToast = useCallback((message) => {
    setToastState({ message, visible: true })
    setTimeout(() => setToastState(s => ({ ...s, visible: false })), 3000)
  }, [])

  // ── D-key shortcut ─────────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      const tag = document.activeElement?.tagName?.toLowerCase()
      if (tag === 'input' || tag === 'textarea') return
      if (e.key === 'd' || e.key === 'D') {
        setTheme(t => {
          const next = t === 'dark' ? 'light' : 'dark'
          showToast(next === 'dark' ? '🌙 Dark mode on' : '☀️ Light mode on')
          return next
        })
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [showToast])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ToastContext.Provider value={showToast}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout toastState={toastState} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ToastContext.Provider>
    </ThemeContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
