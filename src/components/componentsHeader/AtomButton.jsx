import React from 'react'
import PropTypes from 'prop-types'
import {ChangeComponent} from '../../pages/App'
import { useContext } from 'react'

function AtomButton({text, value}) {

 
  const {setShowComponent}= useContext(ChangeComponent)
  
  const handleButton = () =>{
    
    setShowComponent(value)  
  }
  
  return (
    <button onClick={handleButton}>{text}</button>
  )
}

AtomButton.propTypes = {
    text: PropTypes.string.isRequired,
    value : PropTypes.bool.isRequired
}

export default AtomButton
