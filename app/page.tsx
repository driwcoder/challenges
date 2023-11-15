'use client'
import Header from '@/components/Header';
import { useState } from 'react';

const themes = {
  light: {
    bg: 'bg-white',
    color: 'text-black',
    txtb: 'Escuro'
  },
  dark: {
    bg: 'bg-black',
    color: 'text-white',
    txtb: 'Claro'
  }
}

export default function Home() {
    // inicializa com tema claro
    const [theme, setTheme] = useState(true)
    // função para trocar de tema
    const toggleTheme = () => {
      setTheme(!theme)
    }
    // condicional para alternar entre temas
    const themeStyles = theme ? themes.light : themes.dark
  
  return (
    <main className={`${themeStyles.bg} min-h-screen `}>
      <Header theme={theme} toggleTheme={toggleTheme} themes={themes} />
    </main>
  )
}
