import Link from 'next/link'
import { Button } from './ui/button'

interface HeaderProps {
  theme: boolean
  toggleTheme: () => void
  themes: {
    light: {
      bg: string
      color: string
      txtb: string
    }
    dark: {
      bg: string
      color: string
      txtb: string
    }
  }
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, themes }) => {
  const themesStyles = theme ? themes.light : themes.dark

  return (
    <header>
      <div className={` flex justify-between w-screen p-10 ${themesStyles.bg} ${themesStyles.color}`}>
        <nav className={`flex gap-5`}>
          <Link href={'/'}>Inicio</Link>
          <Link href={'/'}>Desafios</Link>
          <Link href={'/'}>Apredizagem</Link>
          <Link href={'/'}>Sobre</Link>
        </nav>
        <Button variant="outline" onClick={toggleTheme}>{themesStyles.txtb}</Button>
      </div>
    </header>
  )
}

export default Header
