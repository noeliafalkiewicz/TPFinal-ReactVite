
import './Principal.css'
import mancha from '../../public/foto1-modificada.png'


 
function Principal () {

    return(
        
            <div className="container border border-white alert alert-primary shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                
                 <div className='ContenedorPrincipal'>
                     <div className='ContenedorSecundario'>
                          <h1 className='Hola'>
                               Hola <br/>
                               Soy Nhoelya
                          </h1>
                          <h3 className='Noe'>Desarrolladora Web
                          </h3><a></a>
                          <button className="btn btn-warning" href='#contacto'  ><strong>Contratar</strong></button>
                      </div>
                      <img src={mancha} className='ManchaGrande' alt="mancha"/>   
                 </div>
            </div>

    )
}

export default Principal