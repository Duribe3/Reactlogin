import React ,{useState}from 'react';
import './Login.css';

import Title from './components/title/title';
import Label from './components/label/Label';
import Input from './components/Input/Input';



 

const Login =()=>{

    const [user,setUser]= useState('');
    const [password,setPassword]= useState('');

    function handleChange(name,value){
       if (name ==='usuario') {
           setUser(value)
       }   else {
                setPassword(value)
       }
         
    };

function handleSubmit(){

    let account ={user,password}

    if(account){

        console.log('account:', account)
    }
}

return (

    <div className ='login-container '>
<Title text ='Daniel Uribe Mazo'/>
<Label text='Usuario'/>
<Input 
atribute={{

    id:'usuario',
    name:'usuario',
    type:'text',
    placeholder:'Ingrese su usuario'
}}

handleChange={handleChange}


/>
<Label text='Contraseña'/>
<Input 
atribute={{

    id:'contraseña',
    name:'contraseña',
    type:'password',
    placeholder:'Ingrese su contraseña'
}}

handleChange={handleChange}


/>

<button onClick={(e)=> handleSubmit}>

    Ingresar
</button>
    </div>
)


};


export default Login;














