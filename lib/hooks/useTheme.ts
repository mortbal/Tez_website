'use client'

import { useState, useEffect } from 'react'

export type Theme = 'light' | 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'

    const initialTheme = savedTheme || systemTheme
    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  // Apply theme to document element
  const applyTheme = (newTheme: Theme) => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Update theme and persist to localStorage
  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  // Set specific theme
  const setSpecificTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  return {
    theme,
    toggleTheme,
    setTheme: setSpecificTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  }
}
