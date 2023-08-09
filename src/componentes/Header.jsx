import './Header.css'
import logo from '../../public/logo.png'
import menu from '../../public/menuHamburguesa.svg'


function Header () {
    return (
        
        <header className="alert header" role="alert">
            
            <div className='logoContenedor shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-circle'>
               <img src={logo} className='logo' /> 
            </div>
            <section className='seccion'>
               <img src={menu} className='menu'/>  
            </section>
            <nav className='nav'>
                <ul className="nav justify-content-end">
                     <li className="nav-item">
                       <a className="link-danger link-offset-2 link-offset-3-hover link-underline
                       link-underline-opacity-0 link-underline-opacity-50-hover link-opacity-50-hover" href="#Header">Inicio</a>
                     </li>
                    <li className="nav-item">
                       <a className="link-danger link-offset-2 link-offset-3-hover link-underline
                       link-underline-opacity-0 link-underline-opacity-50-hover link-opacity-50-hover" href="#encabezado">Acerca de</a>
                    </li>
                    <li className="nav-item">
                       <a className="link-danger link-offset-2 link-offset-3-hover link-underline
                       link-underline-opacity-0 link-underline-opacity-50-hover link-opacity-50-hover" href="#trabajos">Trabajos</a>
                    </li>
                    <li className="nav-item">
                       <a className="link-danger link-offset-2 link-offset-3-hover link-underline
                       link-underline-opacity-0 link-underline-opacity-50-hover link-opacity-50-hover" href='#contacto'>Contacto</a>
                    </li>
               </ul>
            </nav>

        </header> 
    )
}

export default Header