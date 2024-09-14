import React from 'react'
import PropTypes from 'prop-types'
import AtomButton from './AtomButton'

function ContentButtons({objectButtons}) {
  return (   
    <nav>
         
     <AtomButton  text={objectButtons.addTaks.text} value ={objectButtons.addTaks.value}></AtomButton>
     <AtomButton text={objectButtons.showTaks.text} value = {objectButtons.showTaks.value}></AtomButton>   
    </nav>
  )
}

ContentButtons.propTypes = {
    objectButtons: PropTypes.object.isRequired
}

export default ContentButtons
