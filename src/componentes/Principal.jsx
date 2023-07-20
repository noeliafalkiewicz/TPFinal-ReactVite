
import './Principal.css'
import mancha from '../../public/foto1-modificada.png'


 
function Principal () {

    return(
        
            <div class="uno border border-white alert alert-primary shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                
                 <div className='contenedorPrincipal'>
                     <div className='contenedorSecundario'>
                          <h1 className='hola'>
                               Hola <br/>
                               Soy Nhoelya
                          </h1>
                          <h3 className='noe'>Desarrolladora Web
                          </h3>
                          <button class="btn btn-warning"><strong>Contratar</strong></button>
                      </div>
                      <img src={mancha} className='manchaGrande' alt="mancha"/>   
                 </div>
            </div>

    )
}

export default Principal