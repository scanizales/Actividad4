
import React from 'react';
import PropTypes from 'prop-types';

function ShowTaks({ list }) {
  //obtenemos los datos de la lista de nota
  const elements = list.map((item, index) => (
    <div key={index} className="task-container">
        <h2>{ item.tittle || 'Tareas'}</h2>
        <p>{item.text }</p>  
    </div>
  ));

  return (
    //retornamos el dato 
    <div className="functions_show" >
      <ul>{elements}</ul>
    </div>
  );
}

ShowTaks.propTypes = {
  list: PropTypes.array.isRequired,
};

export default ShowTaks;