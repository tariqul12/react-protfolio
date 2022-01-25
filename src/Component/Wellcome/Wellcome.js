import React,{Component} from 'react';

class Welcome extends Component{
    DoThisFromClass(a){
        alert(a);
    }

    render(){
        return (
            <div>
                <button onClick={this.DoThisFromClass.bind(this,"Hello I am from Pera")}>Click Me</button>
                <h1>My name is : {this.props.name}</h1>
            </div>
        )
    }
}
export default Welcome;