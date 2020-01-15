import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      info: [],
      isExpanded: [],
    }
  }

  componentDidMount() {

  fetch("https://api.github.com/emojis")
    .then(res => res.json())
    .then(json => {
      this.setState({
        info: json,
      })
    })
    
  }

  

render(){
  const {info} = this.state
   console.log(info)
   if (info.length === 0){
    return (
      <h1>Retrieving Data</h1>
    )
  }
     return (
      <div>
       <img src = {info.australia}></img>
       <img src = {info.airplane}></img>
       </div>
       )
     }

}

export default App;

