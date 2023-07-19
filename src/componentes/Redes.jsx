import './Redes.css'
import whatsapp from '../../public/whatsapp.png'
import facebook from '../../public/facebook.png'
import linkedin from '../../public/linkedin.png'
import instagram from '../../public/instagram.png'


function Redes () {

    return (

        <div className='contenedorRedesyFormulario'>
            <div className='bloque'>
               <div className='datos'>
                   <img className='log' src={whatsapp} />
                   <p className='info'><strong>+12345678910</strong></p>
                </div>
                <div className='datos'>
                     <img className='log' src={facebook} />
                     <p className='info'><strong>Regina Falkiewicz</strong></p>
                </div>
                <div className='datos'>
                   <img className='log' src={linkedin} />
                   <p className='info'><strong>Noelia Falkiewicz</strong></p>
                </div>
                <div className='datos'>
                   <img className='log' src={instagram} />
                   <p className='info'><strong>@noilita_</strong></p>
                </div>
           </div>
           
        </div>

        
    )
}

export default Redes