import React from 'react'
import PropTypes from 'prop-types'
import ContentButtons from './componentsHeader/ContentButtons'

function Header() {
    
   
    const buttons = {
        addTaks: {text:'Agregar tarea', value: true},
        showTaks: {text: 'Ver tareas', value: false}
    }
    
  return (
    <section>       
        <h1>MANEJA TUS TAREAS</h1> 
        <ContentButtons objectButtons={buttons}></ContentButtons>
    </section>
    
  )
}

Header.propTypes = {}

export default Header
