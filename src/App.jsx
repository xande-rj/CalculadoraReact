import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [result,Setresult] = useState('')
 
  function calcular(tipo, valor){
    if(tipo == 'numero'){
      Setresult(result+valor)
    }
    else if(valor == '+'||valor == '-'||valor == '*'||valor == '/'){
      Setresult(result+valor)
  
    }
    if(valor == '='){
        var valor_campo = eval(result)
        Setresult(valor_campo)
      }
      if(valor =='clear'){
        Setresult('')
      }
    }
  
  return (
    <>
     <div>
      <input type="text" name='result' value={result} disabled/>
     </div>
     <div>
      <button onClick={()=>calcular('numero', '0')}>0</button>
      <button onClick={()=>calcular('numero', '1')}>1</button>
      <button onClick={()=>calcular('numero', '2')}>2</button>
      <button onClick={()=>calcular('numero', '3')}>3</button>
      <button onClick={()=>calcular('numero', '4')}>4</button>
      <button onClick={()=>calcular('numero', '5')}>5</button>
      <button onClick={()=>calcular('numero', '6')}>6</button>
      <button onClick={()=>calcular('numero', '7')}>7</button>
      <button onClick={()=>calcular('numero', '8')}>8</button>
      <button onClick={()=>calcular('numero', '9')}>9</button>
     </div>
     <div>
      <button onClick={()=>calcular('acao', '+')}>+</button>
      <button onClick={()=>calcular('acao', '-')}>-</button>
      <button onClick={()=>calcular('acao', '*')}>*</button>
      <button onClick={()=>calcular('acao', '/')}>/</button>
     </div>
     <div>
      <button onClick={()=>calcular('acao', '=')}>=</button>
      <button onClick={()=>calcular('acao', 'clear')}>Clear</button>
     </div>
    
    </>
  )
}

export default App
