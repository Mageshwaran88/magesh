import React, { Component } from "react";
import Manymovies from "./Manymovies";
// import { loadEnv } from "vite";

class Movie extends Component{

state = {
    movie:'jawan',
    count :0
}

changecount =()=>{
    this.setState({count: this.state.count+1})

}

    render(){
        return(
            <>
            <h1>movie : {this.state.movie}</h1>
            <h1>movie : {this.state.movie}</h1>
            <h1>movie : {this.state.movie}</h1>
            <button onClick={this.changecount}>add</button>

            <Manymovies name={"leo"}/>
            {/* <Manymovies name={"jailer"}/>
            <Manymovies name={"markantony"}/> */}
            </>
        )
    }
}

export default Movie