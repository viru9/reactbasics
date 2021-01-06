import React from 'react';

class CounterVaue extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            counter: 100,
            name : "zMessenger"
        }
    }


    descreaseValue = ()=> {
        console.log('descreaseValue')
        this.setState({counter:this.state.counter-1})
    }
    increasevalue = ()=> {
        console.log('increasevalue')
        this.setState({counter:this.state.counter+1})
    }

    render(){
        return(
            <div>{this.state.name}
            <button onClick={this.descreaseValue}>-</button>
            <label>{this.state.counter}</label>
            <button onClick={this.increasevalue}>+</button>
            </div>
        )
    }

}

export default CounterVaue;