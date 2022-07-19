import React from "react";
import Character from "./component/Character";
import './App.css'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      characters: []
    }
  }

  async componentDidMount (){
    const request = await fetch ("https://thronesapi.com/api/v2/Characters")
    const response = await request.json();
    // console.log(response);

    this.setState({characters: response})
  }


  render(){
    console.log(this.state);

    return(
    <>
    <h1>Games of thrones</h1>
     <div className="containers">
      {this.state.characters.map((character) => (
      <Character
      name = {character.fullName}
      title = {character.title}
      image = {character.imageUrl}
      />
      ))}
      </div>
      </>
    )
  }

}

export default App

