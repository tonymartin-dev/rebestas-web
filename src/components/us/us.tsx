import './us.css'
import photo1 from './assets/photo1.jpg'

export default function Us() {
  return (
    <section id="us">
      <div className="main-content">
        <h1>Somos Rebestas</h1>
        <h2>Y hacemos Rock de barrio</h2>

        <div className="content">
          <article>
            <p>
              Dos madrileños, dos malagueñ@s y un gallego entran a un local de
              ensayo de Vallekas y... ¡así nace Rebestas!.
            </p>
            <p>
              Allá por Mayo de 2022, Salva (bajo) y Lobo (batería), dos chicos
              normales, deciden dar forma a sus experimentos sonoros. No son
              ningunos expertos en su instrumento (aún) así que acaban llamando
              a Nacho, Rebe y Antonio, que tamoco lo son (aún), y empezando esta
              aventura que llega hasta día de hoy.
            </p>
            <p>
              Tras un comienzo accidentado como grupo de versiones, sin nadie al
              volante, comiezan a componer sus propios temas abarcando un amplio
              abanico de estilos desde el rock'n'roll más sesentero hasta el
              hard rock, pasando por el garajeo y una pizquita de punk.
            </p>
            <p>
              En la primavera de 2024 cierran su repertorio y piensan eso de "A
              tomar por el ojal, ¡vamos a tocar!". Comienzan así a dar sus
              primeras actuaciones en Madrid. Es entonces cuando estos vividores
              empedernidos dan rienda suelta a su estilo en el escenario.
            </p>
            <p>
              ¿Cómo los podríamos definir? Son como su origen como banda: el
              barrio de Vallekas, en Madrid. Son un grupo de personas de las
              distintas puntas de España, que toca un repertorio con música de
              las distintas puntas del Rock.
            </p>
            <p>Son Rock de Barrio.</p>
            <p>Son Rebestas.</p>
          </article>
          <div className="polaroid">
            <img src={photo1} alt="rebestas-photo" />
          </div>
        </div>
      </div>

      <hr />

      <div className="main-content">
        <div className="content">
          <div className="photo nacho">
            <div>
              <p>Nacho</p>
            </div>
          </div>
          <div className="photo antonio">
            <div>
              <p>Antonio</p>
            </div>
          </div>
          <div className="photo rebe">
            <div>
              <p>Rebe</p>
            </div>
          </div>
          <div className="photo lobo">
            <div>
              <p>Lobo</p>
            </div>
          </div>
          <div className="photo salva">
            <div>
              <p>Salva</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
