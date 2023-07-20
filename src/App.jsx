import { useState } from 'react'
import './App.css'
import Header from './componentes/Header'
import Principal from './componentes/Principal'
import Footer from './componentes/Footer'
import About from './componentes/About'
import Cuadros from './componentes/Cuadros'
import Work from './componentes/Work'
import Dibujos from './componentes/Dibujos'
import DibujoYTitulo from './componentes/DibujoYTitulo'
import Formulario from './componentes/Formulario'
import Redes from './componentes/Redes'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <Principal/>
        <Header/>
        <About/>
        <Cuadros/> 
        <Dibujos/>
        <Work/>
        <DibujoYTitulo/>
        <Redes/>
        <Formulario/>
        <Footer/>
       
        
        
      </div>
      
      
    </>
  )
}

export default App
