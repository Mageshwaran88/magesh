import React, { Component } from "react";

class Manymovies extends Component{
state ={
    count : 0
}


addingticket =()=>{
    this.setState({count :this.state.count+1})
}
    render(){
        return(
            <>
            <h1>movie name: {this.props.name}</h1>
            <h2>ticket: {this.state.count}</h2>
            <button onClick={this.addingticket}>add</button>
            </>
        )
    }
}

export default Manymovies