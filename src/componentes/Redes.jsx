import './Redes.css'
import whatsapp from '../../public/whatsapp.png'
import facebook from '../../public/facebook.png'
import linkedin from '../../public/linkedin.png'
import instagram from '../../public/instagram.png'


function Redes () {

    return (

        <div className='contenedorRedesyFormulario'>
            <div className='bloque container text-start'>

               <div className='datos'>
                  <span><a href=''>
                         <img className='log' src={whatsapp} />
                         <p className='info'><strong>+12345678910</strong></p>
                  </a></span>
               </div>

               <div className='datos'>
                  <span><a href='https://www.facebook.com/noeliareg?mibextid=ZbWKwL' target='_blank'>
                      <img className='log' src={facebook} />
                       <p className='info'><strong>Regina Falkiewicz</strong></p>
                  </a></span>
               </div>

               <div className='datos'>
                     <span><a href='https://www.linkedin.com/in/noelia-falkiewicz' target='_blank'>
                           <img className='log' src={linkedin}  />
                           <p className='info' ><strong>Noelia Falkiewicz</strong></p>  
                     </a></span>
               </div>

               <div className='datos'>
                    <span><a href='https://instagram.com/noilita_?igshid=MzNlNGNkZWQ4Mg==' target='_blank'>
                        <img className='log' src={instagram} />
                        <p className='info'><strong>@noilita_</strong></p>
                    </a></span>  
               </div>
               
           </div>
           
        </div>

        
    )
}

export default Redes