import './Work.css'
import tp1 from '../../public/tp1.png'
import tp2 from '../../public/tp2.png'
import tp3 from '../../public/tp3.png'

function Work () {

    return (

        <div>
            <h4 className='titulo' id='trabajos'>Mis trabajos</h4>
            <p>
                ¡Mira algunos de los proyectos en los que he estado trabajando!
            </p>
            <section>
                <section className='cajas'>
                   <div className='caja1'>
                    <img className='tp1' src={tp1}/>
                   </div>
                   <div className='caja2'>
                    <img className='tp2' src={tp2} />
                   </div> 
                </section>
                <div className='caja3'>
                    <img className='tp3' src={tp3} />
                </div>
            </section>


        </div>
    )
}

export default Work