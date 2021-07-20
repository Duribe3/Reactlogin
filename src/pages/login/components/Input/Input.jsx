import React from 'react';
import './Input.css';

const Input = ({atribute,handleChange,param}) =>{
return (

<div>

<input 

id={atribute.id}
name={atribute.name}
placeholder={atribute.placeholder}
type={atribute.type}
onChange0={(e) => handleChange(e.target.name, e.target.value)}
className='regular-style'

/>


</div>



)


};

export default Input;