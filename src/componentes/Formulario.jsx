
import './Formulario.css'
import mancharosaformulario from '../../public/mancharosa.png'
import { useForm} from '@formspree/react'



function Formulario (){
    

    return(
      <div className='row my-5 justify-content-md-center'>
         <div className='formulario shadow-sm p-1 mb-3 bg-body-tertiary rounded col-md-5'>
            <form className='contenidoformulario' action="https://formspree.io/f/mdorkgov"
  method="POST">
                <div className='form-group'>
                    <label></label>
                    <input className='border border-primary-subtle rounded-3' type='text' placeholder='Nombre/Compañia' name='nombre'/>
                </div>
                <div className='form-group'>
                    <label></label>
                    <input className='border border-primary-subtle rounded-3' type='email' placeholder='Email' name='email'/>
                </div>
                <div className='form-group'>
                    <label></label>
                    <label htmlFor="nombre"></label>
                    <textarea className='texto border border-primary-subtle rounded-3' type='text' placeholder='Deja tu mensaje...' name='mensaje'/>
                </div>

                <img className='mancharosaformulario' src={mancharosaformulario}/>

                <button type='submit' class="boton btn btn-warning" ><strong>Enviar mensaje</strong> </button>

                <p className='comentario'>Te respondere dentro de las 24 hs</p>
            </form>
            <a href='mailto:noeliafalkiewicz@gmail.com'></a>
         </div>
      </div>
    )
}
 export default Formulario


