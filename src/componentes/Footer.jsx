import './Footer.css'
import paloma from '../../public/paloma.png'

function Footer () {

    return (

        <div className='footer'>
          <nav className='navFooter'>
          <ul class="nav justify-content-start">
                     <li class="nav-item">
                       <a class="link-light link-offset-2 link-offset-3-hover link-underline
                       link-underline-opacity-0 link-underline-opacity-50-hover link-opacity-50-hover" href="#Header">Inicio</a>
                     </li>
                    <li class="nav-item">
                       <a class="link-light link-offset-2 link-offset-3-hover link-underline
                       link-underline-opacity-0 link-underline-opacity-50-hover link-opacity-50-hover" href="#encabezado">Acerca de</a>
                    </li>
                    <li class="nav-item">
                       <a class="link-light link-offset-2 link-offset-3-hover link-underline
                       link-underline-opacity-0 link-underline-opacity-50-hover link-opacity-50-hover" href="#trabajo">Trabajos</a>
                    </li>
                    <li class="nav-item">
                       <a class="link-light link-offset-2 link-offset-3-hover link-underline
                       link-underline-opacity-0 link-underline-opacity-50-hover link-opacity-50-hover" href='#form'>Contacto</a>
                    </li>
               </ul>
               <img className='paloma' src={paloma}/>
          </nav>

        </div>
    )
}

export default Footer