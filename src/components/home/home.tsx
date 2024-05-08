import './home.css'
import logo from './assets/logo-full.png'

export default function Home() {
  return (
    <section id="home">
      <img className="full-logo" src={logo} alt="Rebestas" />
    </section>
  )
}
