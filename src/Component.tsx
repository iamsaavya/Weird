import "./App.css"
import {useState} from 'react';

function Message(){

    const [name, getname] = useState('');

    const changeKarde = (event : any) => {

        if (event.key === 'Enter'){

            getname(event.target.value);
        }

        
    }

    return (
    <>
    <div id="lol">

    <h1 id="current">
    <span className="material-icons" id="hand"> back_hand </span>  Hello 
     
    <div id="op">{name}</div>
     
     </h1>
    <input onKeyDown={changeKarde} placeholder="Enter your name : "/>

    </div>
    </>

    )

}

export default Message;