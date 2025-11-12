import './header.css'
import rbLogo from './assets/rb.png'
import { useCallback, useEffect, useState } from 'react'
import SocialMediaLinks from '../shared/social-media-links/social-media-links'

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false)

  const onScroll = useCallback(() => {
    const htmlElement = document.querySelector('#root')
    setHasScrolled(!!htmlElement?.scrollTop && htmlElement.scrollTop > 0)
  }, [setHasScrolled])

  useEffect(
    () => document.querySelector('#root')?.addEventListener('scroll', onScroll),
    []
  )

  const headerClass = hasScrolled ? ' scrolled' : ''

  // TODO: marcar con la clase .active el li de la sección seleccionada
  return (
    <header className={`main-header${headerClass}`}>
      <a href="" className="logo-container">
        <img src={rbLogo} className="logo" alt="Rebestas logo" />
      </a>
      <ul className="main-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        
        <li>
          <a href="#us">Conócenos</a>
        </li>
        <li>
          <a href="#listen">Nuestra música</a>
        </li>
        
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>

      <SocialMediaLinks></SocialMediaLinks>
    </header>
  )
}
