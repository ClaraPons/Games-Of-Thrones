import React, { useState } from "react";
import Character from "./component/Character";
import './App.css'
import Continent from "./component/Continent";

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      characters: [],
      favorites: [],
      continent: [],
      display: "character"
    }
  }


  async componentDidMount (){
    const request = await fetch ("https://thronesapi.com/api/v2/Characters")
    const response = await request.json();
    const requestBis = await fetch ("https://thronesapi.com/api/v2/Continents")
    const responseBis = await requestBis.json();

    this.setState({characters: response})
    this.setState({continent: responseBis})
  }


  handleFavoriteClick = (character) => {

    const clonedFavorites = [...this.state.favorites, character]

    this.setState({
      favorites: clonedFavorites
    })
  }

  handlePersoClick = () => {
    this.setState({
      display: "character"
    })
  }

  handleContinentClick = () => {
    this.setState({
      display: "continent"
    })
  }


  render(){
    console.log(this.state.isContinentDisplay);


    return(
    <>
    <h1>Games of thrones</h1>
    <nav> 
      <button className="button-tab" onClick={this.handlePersoClick}>Personnages</button>
      <button className="button-tab" onClick={this.handleContinentClick}>Continent</button>
    </nav>
    {this.state.display === "character" ?
     <div className="containers-perso">
      {this.state.characters.map((character) => (
      <Character
        key={`${character.fullName}${character.id}`}
        name = {character.fullName}
        title = {character.title}
        image = {character.imageUrl}
        addFavorite = {() => this.handleFavoriteClick(character)}
      />
      ))}
      </div>
      :
      <div className="containers-continent">
        {this.state.continent.map((continent) => 
        <Continent 
          continent = {continent.name}
        />
        )}
      </div>
    }
    <h2>Favorite</h2>
    <div className="containers-favorite"> 
        {this.state.favorites.map((favorite) => 
          <Character 
          key={`${favorite.fullName}${favorite.id}`}
          name = {favorite.fullName}
          title = {favorite.title}
          image = {favorite.imageUrl}
          />
        )}
    </div>
      </>
    )
  }

}

export default App

