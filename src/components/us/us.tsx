import './us.css'
import photo1 from './assets/photo1.webp'
import photo2 from './assets/photo2.webp'

export default function Us() {
  return (
    <section id="us">
      <div className="main-content">
        <h1>Somos Rebestas</h1>
        <h2>Y hacemos Rock de barrio</h2>

        <div className="content">
          <article>
            <p>
              Allá por Mayo de 2022, Salva (bajo) y Lobo (batería), dos chicos
              normales, deciden dar forma a sus experimentos sonoros. No son
              ningunos expertos en su instrumento (aún) así que acaban llamando
              a Nacho (teclados), Rebe (voz) y Antonio (guitarra), que tampoco
              lo son (aún), y ahí comienza la aventura.
            </p>
            <p>
              Tras un comienzo accidentado como grupo de versiones, sin nadie al
              volante, comenzamos a componer nuestros propios temas abarcando un
              amplio abanico de estilos desde el rock'n'roll más sesentero hasta
              el hard rock, pasando por el garajeo y una pizquita de punk.
            </p>
          </article>
          <div className="polaroid">
            <img src={photo1} alt="rebestas-photo" />
          </div>
        </div>

        <div className="content">
          <div className="polaroid left">
            <img src={photo2} alt="rebestas-photo" />
          </div>
          <article>
            <p>
              En la primavera de 2024 cerramos nuestro repertorio y pensamos eso
              de "A tomar por el ojal, ¡vamos a tocar!". Comenzamos así a dar
              nuestras primeras actuaciones en Madrid. Es entonces cuando estos
              vividores empedernidos dan rienda suelta a su estilo en el
              escenario.
            </p>
            <p>
              Tras una serie de entradas y salidas de miembros, en la navidad de 2024
              se incorpora Vir a la voz, dando un nuevo aire a la banda y
              culminando la formación actual, formada por Vir (voz), Antonio (guitarra),
              Salva (bajo) y Lobo (batería).
            </p>
            <p>
              ¿Cómo nos podríamos definir? Somos como nuestro lugar de origen
              como banda: el barrio de Vallekas, en Madrid. Somos un grupo de
              personas de las distintas puntas de España, y tocamos un
              repertorio con música de las distintas puntas del Rock.
            </p>
            <div className="bottom-bio-line">
              Somos Rock de Barrio.
              <h3>Somos Rebestas.</h3>
              Y no hay nadie al volante.
            </div>
          </article>
        </div>
      </div>

      <hr />

      <div className="main-content">
        <div className="content photos">
          <div className="photo antonio">
            <div>
              <p className="photo-name">Antonio</p>
              <p>Cuerdas finitas</p>
            </div>
          </div>
          <div className="photo vir">
            <div>
              <p className="photo-name">Vir</p>
              <p>Gritos</p>
            </div>
          </div>
          <div className="photo lobo">
            <div>
              <p className="photo-name">Lobo</p>
              <p>Palitos</p>
            </div>
          </div>
          <div className="photo salva">
            <div>
              <p className="photo-name">Salbass</p>
              <p>Cuerdas gordas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
