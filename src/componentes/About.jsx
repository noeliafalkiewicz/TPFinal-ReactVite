
import './About.css'
import mancharosa from '../../public/mancharosa.png'
import pajaroazul from '../../public/pajaroazul.png'


function About () {

    return (
        <div className='Encabezado' id='encabezado'>
           <section className='Dibujos'>
              <img className='ManchaRosa' src={mancharosa}/>
              <img className='PajaroAzul' src={pajaroazul}/>
           </section>  

          <div className='About'>
              <h4 className='Titulo'>Acerca de mi</h4>
              <p>
                  Un desarrollador web materializa en formato virtual  esas <br/> ideas  que  estan dando vueltas en la  cabeza<br/> de alguien
              </p>

          </div>

        </div>
        
    )
}

export default About