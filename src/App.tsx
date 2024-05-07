import './App.css'
import Header from './components/header/header'
import logo from './assets/logo-full.png'
import Us from './components/us/us'
import Listen from './components/listen/listen'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function App() {
  const [formValues, setFormValues] = useState<Record<string, string>>({})

  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (!e.target?.name) {
        return
      }

      const target = e.target

      return setFormValues({
        ...formValues,
        [target.name]: target.value,
      })
    },
    [formValues, setFormValues]
  )

  const submitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formValues }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error))

    e.preventDefault()
  }, [])

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

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={submitHandler}
        >
          <input type="hidden" name="form-name" value="contact" />

          <input type="hidden" name="subject" value="contact" />
          <p>
            <label>
              Your Name:{' '}
              <input type="text" name="name" onChange={changeHandler} />
            </label>
          </p>
          <p>
            <label>
              Your Email:{' '}
              <input type="email" name="email" onChange={changeHandler} />
            </label>
          </p>
          <p>
            <label>
              Message:{' '}
              <textarea name="message" onChange={changeHandler}></textarea>
            </label>
          </p>
          <div data-netlify-recaptcha="true"></div>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </section>
    </>
  )
}

export default App
