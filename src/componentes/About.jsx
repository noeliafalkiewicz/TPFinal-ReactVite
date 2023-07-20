
import './About.css'
import mancharosa from '../../public/mancharosa.png'
import pajaroazul from '../../public/pajaroazul.png'


function About () {

    return (
        <div className='encabezado' id='encabezado'>
           <box className='dibujos'>
              <img className='manchaRosa' src={mancharosa}/>
              <img className='pajaroAzul' src={pajaroazul}/>
           </box>  

          <div className='About'>
              <h4 className='titulo'>Acerca de mi</h4>
              <p>
                  Un desarrollador web materializa en formato virtual  esas <br/> ideas  que  estan dando vueltas en la  cabeza<br/> de alguien
              </p>

          </div>

        </div>
        
    )
}

export default About