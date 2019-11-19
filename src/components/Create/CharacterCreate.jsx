import React from "react";
import { NavLink } from "react-router-dom";

// import { displayCharacters } from "../../services/api";
import Axios from "axios";

export class CharacterCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      culture: "",
      aliases: [],
      titles: [],
      allegiances: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    const name = e.target.name;
    const culture = e.target.culture;
    const aliases = e.target.aliases;
    const titles = e.target.titles;
    const allegiances = e.target.allegiances;

    this.setState({
      [name]: e.target.value,
      [culture]: e.target.value,
      [aliases]: [e.target.value],
      [titles]: [e.target.value],
      [allegiances]: [e.target.value]
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    await Axios.post("http://5dd1790315bbc2001448d20b.mockapi.io/characters", {
      name: this.state.name,
      culture: this.state.culture,
      aliases: [this.state.aliases],
      titles: [this.state.titles],
      allegiances: [this.state.allegiances]
    })
      .then(res => {
        console.log(res);
      })
      .catch(e => console.error(e));
  };

  render() {
    return (
      <div className="character-create">
        <h2>Character Info</h2>
        <form onSubmit={this.handleSubmit} method="POST">
          <input
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Name"
            type="text"
            name="name"
            id="input-name"
          />
          <input
            onChange={this.handleChange}
            value={this.state.aliases}
            placeholder="Aliases"
            type="text"
            name="aliases"
            id="input-aliases"
          />
          <input
            onChange={this.handleChange}
            value={this.state.titles}
            placeholder="Titles"
            type="text"
            name="titles"
            id="input-titles"
          />
          <input
            onChange={this.handleChange}
            value={this.state.culture}
            placeholder="Culture"
            type="text"
            name="culture"
            id="input-culture"
          />
          <input
            onChange={this.handleChange}
            value={this.state.allegiances}
            placeholder="Allegiances"
            type="text"
            name="allegiances"
            id="input-allegiances"
          />
          <input
            type="submit"
            value="submit"
            onSubmit={this.handleSubmit}
            label="submit"
          />
        </form>
        {/* <button onClick={this.handleSubmit}>Submit</button> */}
        <NavLink exact to="/avatar-create">
          Avatar Creation
        </NavLink>
      </div>
    );
  }
}
