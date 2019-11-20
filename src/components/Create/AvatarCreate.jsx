import React from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
// import { displayAvatar } from "../../services/api";

export class AvatarCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: "",
      avatarName: "name",
      value: "select",
      top: [
        "No Hair",
        "Eyepatch",
        "Hijab",
        "Winter Hat 1",
        "Winter Hat 2",
        "Winter Hat 4",
        "Long Hair Big Hair",
        "Long Hair Bob",
        "Long Hair Curly",
        "Long Hair Curvy",
        "Long Hair Dreads",
        "Long Hair Frida",
        "Long Hair Fro",
        "Long Hair Fro Band",
        "Long Hair Not Too Long",
        "Long Hair Shaved Sides",
        "Long Hair Mia Wallace",
        "Long Hair Straight",
        "Long Hair Straight 2",
        "Long Hair Straight Strand",
        "Short Hair Dreads 01",
        "Short Hair Dreads 02",
        "Short Hair Frizzle",
        "Short Hair Shaggy Mullet",
        "Short Hair Short Curly",
        "Short Hair Short Flat",
        "Short Hair Short Round",
        "Short Hair Short Waved",
        "Short Hair Sides",
        "Short Hair The Caesar",
        "Short Hair The Caesar Side Part"
      ],
      accessories: [
        "Blank",
        "Kurt",
        "Prescription 01",
        "Prescription 02",
        "Sunglasses",
        "Wayfarers"
      ],
      hatColor: [
        "Black",
        "Blue",
        "Gray",
        "Heather",
        "Pastel",
        "Pink",
        "Red",
        "White"
      ],
      facialHair: [
        "Blank",
        "Beard Medium",
        "Beard Light",
        "Beard Magestic",
        "Moustache Fancy",
        "Moustache Magnum"
      ],
      facialHairColor: [
        "Auburn",
        "Black",
        "Blonde",
        "Blonde Golden",
        "Brown",
        "Brown Dark",
        "Platinum",
        "Red"
      ],
      clothes: [
        "Blazer Shirt",
        "Blazer Sweater",
        "Collar Sweater",
        "Graphic Shirt",
        "Overall",
        "Shirt Crew Neck",
        "Shirt Scoop Neck",
        "Shirt VNeck"
      ],
      fabricColor: [
        "Black",
        "Blue 01",
        "Blue 02",
        "Blue 03",
        "Gray 01",
        "Gray 02",
        "Heather",
        "Pastel Blue",
        "Pastel Green",
        "Pastel Orange",
        "Pastel Red",
        "Pastel Yellow",
        "Pink",
        "Red",
        "White"
      ],
      eyes: [
        "Close",
        "Cry",
        "Default",
        "Dizzy",
        "Eye Roll",
        "Happy",
        "Hearts",
        "Side",
        "Squint",
        "Surprised",
        "Wink",
        "Wink Wacky"
      ],
      eyebrow: [
        "Angry",
        "Angry Natural",
        "Default",
        "Default Natural",
        "Flat Natural",
        "Raised Excited",
        "Raised Excited Natural",
        "Sad Concerned",
        "Sad Concerned Natural",
        "Unibrow Natural",
        "Up Down",
        "Up Down Natural"
      ],
      mouth: [
        "Concerned",
        "Default",
        "Disbelief",
        "Eating",
        "Grimace",
        "Sad",
        "Scream Open",
        "Serious",
        "Smile",
        "Tongue",
        "Twinkle",
        "Vomit"
      ],
      skin: [
        "Tanned",
        "Yellow",
        "Pale",
        "Light",
        "Brown",
        "Dark Brown",
        "Black"
      ]
    };

    this.setAvatarName = this.setAvatarName.bind(this);
  }

  async displayAvatar() {
    const avatar = await Axios.get(
      `http://avatars.dicebear.com/v2/avataaars/${this.state.avatarName}.svg`
    );

    this.setState({ avatar: avatar.config.url });
  }

  setAvatarName(e) {
    console.log(e.target.value);
    this.setState({
      avatarName: e.target.value
    });
    this.displayAvatar();
  }

  async componentDidMount() {
    this.displayAvatar();
  }

  render() {
    return (
      <div className="avatar-create">
        <div className="avatar-create-left">
          <NavLink exact to="/">
            Back
          </NavLink>
          <span>Avatar Creation</span>
          <div className="radio-container">
            <input type="radio" name="avatar-circle" id="avatar-circle" />
            <label htmlFor="avatar-circle">Circle</label>
            <input
              type="radio"
              name="avatar-transparent"
              id="avatar-transparent"
            />
            <label htmlFor="avatar-transparent">Transparent</label>
          </div>
          <img src={this.state.avatar} alt="" />
        </div>
        {/* <div className="avatar-image">
        </div> */}
        <div className="avatar-options">
          <input
            type="text"
            name="avatar-name"
            id="avatar-name"
            placeholder="Avatar Name (no personal info pls)"
            onChange={this.setAvatarName}
          />
          {/* <button onClick={this.setAvatarName} value="SUBMIT">SUBMIT</button> */}
          <select name="top" id="av-top">
            {this.state.top.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select name="accessories" id="av-accessories">
            {this.state.accessories.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select name="hat-color" id="av-hat-color">
            {this.state.hatColor.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select name="facial-hair" id="av-facial-hair">
            {this.state.facialHair.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select name="facial-hair-color" id="av-facial-hair-color">
            {this.state.facialHairColor.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select name="clothes" id="av-clothes">
            {this.state.clothes.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select name="fabric-color" id="av-fabric-color">
            {this.state.fabricColor.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select name="eyes" id="av-eyes">
            {this.state.eyes.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select name="eyebrow" id="av-eyebrow">
            {this.state.eyebrow.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select name="mouth" id="av-mouth">
            {this.state.mouth.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select name="skin" id="av-skin">
            {this.state.skin.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
