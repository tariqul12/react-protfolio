import React from "react";

function Hello(props){
    function DoThis(a){
        alert(a);
        
    }

    return(
       <div>
            <button onClick={DoThis.bind(this,'Hello I am from Pera..')}>Click Me</button>
            <h1>Her Name:{props.name} And Age:{props.age}</h1>
       </div>
       
    );

}
export default Hello;