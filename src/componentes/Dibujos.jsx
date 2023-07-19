import './Dibujos.css'
import pajarorosa from '../../public/pajarorosa.png'
import manchaazul from '../../public/manchaazul.png'

function Dibujos () {

    return (
         
        <div className='imagenes'>
            
            <img className='manchaazul' src={manchaazul}/>
            <img className='pajarorosa' src={pajarorosa}/>
        </div>

    )
}

export default Dibujos