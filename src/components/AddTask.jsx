import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

function AddTask({setListState, list}) {

   //creacion de estados para los inputs de tittle y text
  const [tittleState, setTittleState] = useState('')
  const [textState, setTextState] = useState('')

  //función flecha que agrega una nueva nota al array existente
  const agregarNota = (e) =>{
    e.preventDefault()
    //creación del diccionario que conteniene la data de cada nota
    let nota ={tittle: tittleState, text: textState}
    setListState([...list, nota])
    //limpiar campos
    setTittleState('')
    setTextState('')
    
  }
  
  return (
    <section className='functions_add'>
        <h1>Agrega tu tarea</h1>
        <form onSubmit={agregarNota}>
            <input name='tittle' type="text" value={tittleState} onChange={(e) => setTittleState(e.target.value)} />
            <input name='text' type="text" value = {textState}onChange={(e) => setTextState(e.target.value)}/>
            <button type = 'submit'>Agregar Tarea</button>
        </form>
    </section>
  )
}

AddTask.propTypes = {
  setListState : PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
  
}

export default AddTask
