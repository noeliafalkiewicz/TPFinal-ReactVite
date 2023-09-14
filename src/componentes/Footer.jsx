import './Footer.css'
import paloma from '../../public/paloma.png'

function Footer () {

    return (

        <div className='Footer'>
          <nav className='NavFooter'>
          <ul className="Nav justify-content-start">
                     <li className="Nav-item">
                       <a className="palabra Link-light link-offset-2 link-offset-3-hover link-underline
                       link-underline-opacity-0 link-underline-opacity-50-hover link-opacity-50-hover" href='#Header'>Inicio</a>
                     </li>
                    <li className="Nav-item">
                       <a className="palabra Link-light link-offset-2 link-offset-3-hover link-underline
                       link-underline-opacity-0 link-underline-opacity-50-hover link-opacity-50-hover" href='#encabezado'>Acerca de</a>
                    </li>
                    <li className="Nav-item">
                       <a className="palabra Link-light link-offset-2 link-offset-3-hover link-underline
                       link-underline-opacity-0 link-underline-opacity-50-hover link-opacity-50-hover" href='#trabajos'>Trabajos</a>
                    </li>
                    <li className="Nav-item">
                       <a className="palabra Link-light link-offset-2 link-offset-3-hover link-underline
                       link-underline-opacity-0 link-underline-opacity-50-hover link-opacity-50-hover" href='#contacto'>Contacto</a>
                    </li>
               </ul>
               <img className='Paloma' src={paloma}/>
          </nav>

        </div>
    )
}

export default Footer