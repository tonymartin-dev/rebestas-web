import './contact.css'

import { FormEvent, useCallback, useRef } from 'react'

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  const submitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    if (!formRef?.current) {
      alert('Ha habido un error al enviar el formulario.')
      return
    }

    const formData = new FormData(formRef.current)
    const formValues = Object.fromEntries(formData)
    console.log({ formValues })

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
    <section id="contact">
      <h2>Contacta con nosotros</h2>

      <form
        ref={formRef}
        name="contact"
        method="POST"
        className="contact-form"
        data-netlify="true"
        onSubmit={submitHandler}
      >
        <input type="hidden" name="form-name" value="contact" />

        <input type="hidden" name="subject" value="contact" />
        <label>
          <span>Nombre: </span>
          <input
            type="text"
            name="name"
            placeholder="¿Cómo te llamas?"
            required
          />
        </label>

        <label>
          <span>Email: </span>
          <input
            type="email"
            name="email"
            placeholder="Danos tu email para que podamos contactar contigo"
            required
          />
        </label>

        <label>
          <span>Mensaje: </span>
          <textarea
            name="message"
            placeholder="¡Cuéntanos lo que quieras!"
          ></textarea>
        </label>

        <div data-netlify-recaptcha="true"></div>

        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}
