import './Redes.css'
import whatsapp from '../../public/whatsapp.png'
import facebook from '../../public/facebook.png'
import linkedin from '../../public/linkedin.png'
import instagram from '../../public/instagram.png'


function Redes () {

    return (

        <div className='ContenedorRedesyFormulario'>
            <div className='Bloque container text-start'>

               <div className='Datos'>
                  <span><a href=''>
                         <img className='Log' src={whatsapp} />
                         <p className='Info'><strong>+12345678910</strong></p>
                  </a></span>
               </div>

               <div className='Datos'>
                  <span><a href='https://www.facebook.com/noeliareg?mibextid=ZbWKwL' target='_blank'>
                      <img className='Log' src={facebook} />
                       <p className='Info'><strong>Regina Falkiewicz</strong></p>
                  </a></span>
               </div>

               <div className='Datos'>
                     <span><a href='https://www.linkedin.com/in/noelia-falkiewicz' target='_blank'>
                           <img className='Log' src={linkedin}  />
                           <p className='Info' ><strong>Noelia Falkiewicz</strong></p>  
                     </a></span>
               </div>

               <div className='Datos'>
                    <span><a href='https://instagram.com/noilita_?igshid=MzNlNGNkZWQ4Mg==' target='_blank'>
                        <img className='Log' src={instagram} />
                        <p className='Info'><strong>@noilita_</strong></p>
                    </a></span>  
               </div>
               
           </div>
           
        </div>

        
    )
}

export default Redes