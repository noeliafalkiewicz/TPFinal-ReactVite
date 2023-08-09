import './Dibujos.css'
import pajarorosa from '../../public/pajarorosa.png'
import manchaazul from '../../public/manchaazul.png'

function Dibujos () {

    return (
         
        <div className='Imagenes'>
            
            <img className='Manchaazul' src={manchaazul}/>
            <img className='Pajarorosa' src={pajarorosa}/>
        </div>

    )
}

export default Dibujos