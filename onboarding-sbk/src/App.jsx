import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [employees,setEmployees]= useState([])

  function addEmployee(){
    if(!name) return;

    const newEmployee = {
      id: Date.now(),
      name : name,
      rh : false,
      ti : false,
      manager :false 
    };
    setEmployees([...employees, newEmployee]);
    setName("");


  }
  return (
    <div>
      <input 
        type ="text"
        value = {name} 
        onChange = {(e)=>setName(e.target.value)}
        placeholder="Nome do Colaborador"
        />
      <button onClick={addEmployee}>Adicionar colaborador</button>  

    </div>
  )  

}

export default App