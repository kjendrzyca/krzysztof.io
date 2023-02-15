import { useHasMounted } from '@/lib/hasMounted'
import React from 'react'
import { Sun, Moon } from './Icons'
import { useTheme } from 'next-themes'

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      return
    }

    setTheme('dark')
  }

  return (
    <button
      className="theme-toggler-button"
      type="button"
      onClick={changeTheme}
      aria-label={
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      }
    >
      {theme === 'dark' ? (
        <Sun />
      ) : (
        <Moon />
      )}
    </button>
  )
}

export default ThemeToggler
