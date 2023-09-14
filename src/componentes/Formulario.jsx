
import './Formulario.css'
import mancharosaformulario from '../../public/mancharosa.png'
import { useForm} from '@formspree/react'



function Formulario (){
    

    return(
      <div id='contacto' className='Contacto Row my-5 justify-content-md-center'>
         <div className='Formulario shadow-sm p-1 mb-3 bg-body-tertiary rounded col-md-5'>
            <form className='Contenidoformulario' action="https://formspree.io/f/mdorkgov"
  method="POST">
                <div className='Form-group'>
                    <input className='Border border-primary-subtle rounded-3' type='text' placeholder='Nombre/Compañia' name='nombre' autoComplete='given-name'/>
                </div>
                <div className='Form-group'>
                    <input className='Border border-primary-subtle rounded-3' type='email' placeholder='Email' name='email' autoComplete='off'/>
                </div>
                <div className='Form-group'>
                    <textarea className='Texto border border-primary-subtle rounded-3' type='text' placeholder='Deja tu mensaje...' name='mensaje' autoComplete='given-text'/>
                </div>

                <img className='Mancharosaformulario' src={mancharosaformulario}/>

                <button type='submit' className="Boton btn btn-warning" ><strong>Enviar mensaje</strong> </button>

                <p className='Comentario'>Te respondere dentro de las 24 hs</p>
            </form>
            <a href='mailto:noeliafalkiewicz@gmail.com'></a>
         </div>
      </div>
    )
}
 export default Formulario


 