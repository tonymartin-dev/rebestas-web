import './App.css'
import Header from './components/header/header'
import logo from './assets/logo-full.png'
import Us from './components/us/us'
import Listen from './components/listen/listen'

function App() {
  return (
    <>
      <Header></Header>
      <section id="home">
        <img className="full-logo" src={logo} alt="Rebestas" />
      </section>

      <Us></Us>

      <Listen></Listen>
    </>
  )
}

export default App
