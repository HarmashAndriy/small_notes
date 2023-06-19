import React, { useEffect, useState } from 'react'
import s from './Theme.module.css'

const Theme = () => {
  const [theme, setTheme] = useState('')
  useEffect(() => {
    const nowaTheme = localStorage.getItem('theme')
    setTheme(nowaTheme)
    document.documentElement.dataset.theme = nowaTheme
  }, [])
  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  const handleChange = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <div
      className={[s.root, theme === 'dark' ? s.dark : s.light].join(' ')}
      onClick={handleChange}
    />
  )
}

export default Theme