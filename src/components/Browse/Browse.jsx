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
      characters: [...this.state.characters, displayChars.data]
    });
  }

  render() {
    return (
      <>
        {this.state.characters.map((character, index) => {
          return (
            <React.Fragment key={index}>
              {character.map((char, index) => {
                return (
                  <div key={index} className="character-display">
                    <img width="30%" src={char.avatar} alt="" />
                    <h3 key={index}>{char.name}</h3>
                    <span>
                      <strong>Born:</strong> {char.born}
                    </span>
                    <span>
                      <strong>Died:</strong> {char.died ? char.died : "Not yet"}
                    </span>
                    <span>
                      <strong>Titles:</strong> {char.titles}
                    </span>
                    <strong>Aliases:</strong>
                    {char.aliases.map((alias, index) => {
                      return <li key={index}>{alias}</li>;
                    })}
                    <strong>Allegiances:</strong>
                    {char.allegiances.map((allegiance, index) => {
                      return <li key={index}>{allegiance}</li>;
                    })}
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </>
    );
  }
}
