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
        <h1>Character Info</h1>
        <form onSubmit={this.handleSubmit} method="POST">
          <input
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="&#xf007; Name"
            type="text"
            name="name"
            id="input-name"
            style={{ fontFamily: "masonregular, FontAwesome" }}
          />
          <input
            onChange={this.handleChange}
            value={this.state.aliases}
            placeholder="&#xf21b; Aliases"
            type="text"
            name="aliases"
            id="input-aliases"
            style={{ fontFamily: "masonregular, FontAwesome" }}
          />
          <input
            onChange={this.handleChange}
            value={this.state.titles}
            placeholder="&#xf0b1; Titles"
            type="text"
            name="titles"
            id="input-titles"
            style={{ fontFamily: "masonregular, FontAwesome" }}
          />
          <input
            onChange={this.handleChange}
            value={this.state.culture}
            placeholder="&#xf0ac; Culture"
            type="text"
            name="culture"
            id="input-culture"
            style={{ fontFamily: "masonregular, FontAwesome" }}
          />
          <input
            onChange={this.handleChange}
            value={this.state.allegiances}
            placeholder="&#xf0c0; Allegiances"
            type="text"
            name="allegiances"
            id="input-allegiances"
            style={{ fontFamily: "masonregular, FontAwesome" }}
          />
          <input
            type="submit"
            value="submit"
            onSubmit={this.handleSubmit}
            label="&#xf2f6; submit"
            style={{ fontFamily: "masonregular, FontAwesome" }}
          />
        </form>

        <NavLink exact to="/avatar-create">
          Avatar Creation
        </NavLink>
      </div>
    );
  }
}
