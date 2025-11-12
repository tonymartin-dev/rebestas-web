import './home.css'
import logo from './assets/logo-full.png'

export default function Home() {
  return (
    <section id="home">
      <div className="hero-container">
        <img className="full-logo" src={logo} alt="Rebestas" />
        <h1>Rock de barrio</h1>
      </div>
    </section>
  )
}
