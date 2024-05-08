import './App.css'
import Header from './components/header/header'
import logo from './assets/logo-full.png'
import Us from './components/us/us'
import Listen from './components/listen/listen'
import Contact from './components/contact/contact'

function App() {
  return (
    <>
      <Header></Header>

      <section id="home">
        <img className="full-logo" src={logo} alt="Rebestas" />
      </section>

      <Us></Us>

      <Listen></Listen>

      <Contact></Contact>
    </>
  )
}

export default App
