import './header.css'
import rbLogo from './assets/rb.png'
import igLogo from './assets/ig.svg'
import ytLogo from './assets/yt.svg'
import tkLogo from './assets/tiktok.svg'
import { useCallback, useEffect, useState } from 'react'

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
      <ul>
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

      <ul>
        <li>
          <a href="https://www.instagram.com/rebestas/" target="_blank">
            <img src={igLogo} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@rebestas" target="_blank">
            <img src={ytLogo} alt="youtube" />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@rebestas" target="_blank">
            <img src={tkLogo} alt="tiktok" />
          </a>
        </li>
      </ul>
    </header>
  )
}
