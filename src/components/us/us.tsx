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
              Bacon ipsum dolor amet capicola chuck spare ribs pancetta.
              Shoulder tenderloin bacon sausage ground round pork belly
              kielbasa. Burgdoggen turducken spare ribs, swine andouille
              prosciutto bresaola pork belly pancetta ground round jowl. Tail
              pancetta strip steak turducken bacon buffalo hamburger landjaeger
              salami. Chislic t-bone pork boudin hamburger.
            </p>
            <p>
              Swine brisket ball tip filet mignon chicken hamburger venison
              bacon short loin boudin pastrami sausage pork chop. Cupim rump
              ball tip fatback ground round meatball shank pork loin pork chop
              buffalo turducken. Prosciutto meatball corned beef ham bresaola
              swine kielbasa strip steak burgdoggen drumstick boudin pork belly.
              Rump shankle chuck cow sirloin. Meatloaf rump buffalo cupim.
              Andouille turducken doner filet mignon picanha.
            </p>
            <p>
              Swine tail spare ribs beef. Swine short loin picanha hamburger.
              Turkey kevin t-bone swine ball tip beef boudin ham hock. Shankle
              cupim pork loin, landjaeger brisket drumstick t-bone turkey
              bresaola short loin strip steak. Pig turducken frankfurter jerky
              kevin biltong. Pastrami swine pig alcatra frankfurter meatball
              kielbasa sirloin rump chuck ribeye pancetta fatback.
            </p>
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
