import './Redes.css'
import whatsapp from '../../public/whatsapp.png'
import facebook from '../../public/facebook.png'
import linkedin from '../../public/linkedin.png'
import instagram from '../../public/instagram.png'


function Redes () {

    return (

        <div className='contenedorRedesyFormulario'>
            <div className='bloque container text-center'>
               <div className='datos'>
                   <img className='log' src={whatsapp} />
                   <p className='info'><strong>+12345678910</strong></p>
                </div>
                <div className='datos'>
                     <img className='log' src={facebook} />
                     <p className='info'><strong>Regina Falkiewicz</strong></p>
                </div>
                <div className='datos row align-items-center '>
                     <span><a href='https://www.linkedin.com/in/noelia-falkiewicz' target='_blank'>
                        <div className='col-2'>
                            <img className='log' src={linkedin}  />
                        </div>
                        <div className='col-4'>
                           <p className='info' ><strong>Noelia Falkiewicz</strong></p>
                        </div>
                     </a></span>
                   
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