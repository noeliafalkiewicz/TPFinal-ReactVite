import './Cuadros.css'
import gorro from '../../public/gorro.png'
import portafolio from '../../public/portafolio.png'
import luz from '../../public/luz.png'



function Cuadros () {

    return(
        <div className='contenedores'>
            <section className='contenedor shadow p-3 mb-5 bg-body-tertiary rounded-5'>
                <img className='figura' src={gorro} />
                <h6>Estudios</h6>
            </section>
            <section className='contenedor shadow p-3 mb-5 bg-body-tertiary rounded-5'>
                <img className='figura' src={portafolio} ></img>
                <h6>Experiencia</h6>
            </section>
            <section className='contenedor shadow p-3 mb-5 bg-body-tertiary rounded-5'>
                <img className='figura' src={luz} ></img>
                <h6>Proyectos</h6>
            </section>

        </div>
    )
}

export default Cuadros