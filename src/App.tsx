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

      <section id="contact">
        <h1>Contacta con nosotros</h1>

        <form name="contact" method="POST" data-netlify="true">
          <input
            type="hidden"
            name="subject"
            value="Message from Rebestas Form"
          />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </section>
    </>
  )
}

export default App
