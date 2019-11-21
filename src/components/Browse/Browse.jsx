import React from "react";

import { displayCharacters } from "../../services/api";

export class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  async componentDidMount() {
    const displayChars = await displayCharacters
      .get("/characters")
      .catch(e => console.error(e));
    console.log(displayChars);

    this.setState({
      characters: displayChars.data
    });
  }

  render() {
    return (
      <div className="character-container">
        {this.state.characters.map((character, index) => {
          return (
            <div key={index} className="character-display">
              <img src={character.avatar} alt="" />
              <h3 key={index}>{character.name}</h3>
              <span>
                <strong>Born:</strong> {character.born}
              </span>
              <span>
                <strong>Died:</strong> {character.died ? character.died : "Not yet"}
              </span>
              <span>
                <strong>Titles:</strong> {character.titles}
              </span>
              <strong>Aliases:</strong>
              {character.aliases.map((alias, index) => {
                return <li key={index}>{alias}</li>;
              })}
              <strong>Allegiances:</strong>
              {character.allegiances.map((allegiance, index) => {
                return <li key={index}>{allegiance}</li>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
