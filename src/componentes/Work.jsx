import './Work.css'
import tp1 from '../../public/tp1.png'
import tp2 from '../../public/tp2.png'
import tp3 from '../../public/tp3.png'

function Work () {

    return (

        <div className='work'>
            <h4 className='Titulo' id='trabajos'>Mis trabajos</h4>
            <p>
                ¡Mira algunos de los proyectos en los que he estado trabajando!
            </p>
            <section>
                <section className='Cajas'>
                   <div className='Caja1'>
                    <img className='Tp1' src={tp1}/>
                   </div>
                   <div className='Caja2'>
                    <img className='Tp2' src={tp2} />
                   </div> 
                </section>
                <div className='Caja3'>
                    <img className='Tp3' src={tp3} />
                </div>
            </section>


        </div>
    )
}

export default Work