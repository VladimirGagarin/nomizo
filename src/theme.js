import { useEffect, useState } from 'react'

const STORAGE_KEY = 'nomizo-theme'

function getInitialTheme() {
  let stored = null

  try {
    stored = localStorage.getItem(STORAGE_KEY)
  } catch (error) {
    void error
  }

  if (stored === 'dark' || stored === 'light') {
    return stored
  }

  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light'
  }

  return 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#0b0c09' : '#faf7f0'
    )

    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch (error) {
      void error
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
