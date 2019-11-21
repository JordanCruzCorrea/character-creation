// import React from "react";
import React from "react";

import { NavLink } from "react-router-dom";
// import Axios from "axios";
// import { displayAvatar } from "../../services/api";

export class AvatarCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: "https://avataaars.io/?",
      // avatarName: "http://avatars.dicebear.com/v2/avataaars/hello.svg",
      // initialOption: '?options',
      options: [],
      topValue: "",
      accessoriesValue: "",
      hatColorValue: "",
      facialHairValue: "",
      facialHairColorValue: "",
      clothesValue: "",
      fabricColorValue: "",
      eyesValue: "",
      eyebrowValue: "",
      mouthValue: "",
      skinValue: "",
      top: [
        "NoHair",
        "Eyepatch",
        "Hijab",
        "WinterHat1",
        "WinterHat2",
        "WinterHat4",
        "LongHairBig Hair",
        "LongHairBob",
        "LongHairCurly",
        "LongHairCurvy",
        "LongHairDreads",
        "LongHairFrida",
        "LongHairFro",
        "LongHairFroBand",
        "LongHairNotTooLong",
        "LongHairShavedSides",
        "LongHairMiaWallace",
        "LongHairStraight",
        "LongHairStraight2",
        "LongHairStraightStrand",
        "ShortHairDreads01",
        "ShortHairDreads02",
        "ShortHairFrizzle",
        "ShortHairShaggyMullet",
        "ShortHairShortCurly",
        "ShortHairShortFlat",
        "ShortHairShortRound",
        "ShortHairShortWaved",
        "ShortHairSides",
        "ShortHairTheCaesar",
        "ShortHairTheCaesarSidePart"
      ],
      accessories: [
        "Blank",
        "Kurt",
        "Prescription01",
        "Prescription02",
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
        "BeardMedium",
        "BeardLight",
        "BeardMagestic",
        "MoustacheFancy",
        "MoustacheMagnum"
      ],
      facialHairColor: [
        "Auburn",
        "Black",
        "Blonde",
        "BlondeGolden",
        "Brown",
        "BrownDark",
        "Platinum",
        "Red"
      ],
      clothes: [
        "BlazerShirt",
        "BlazerSweater",
        "CollarSweater",
        "GraphicShirt",
        "Overall",
        "ShirtCrewNeck",
        "ShirtScoopNeck",
        "ShirtVNeck"
      ],
      fabricColor: [
        "Black",
        "Blue01",
        "Blue02",
        "Blue03",
        "Gray01",
        "Gray02",
        "Heather",
        "PastelBlue",
        "PastelGreen",
        "PastelOrange",
        "PastelRed",
        "PastelYellow",
        "Pink",
        "Red",
        "White"
      ],
      eyes: [
        "Close",
        "Cry",
        "Default",
        "Dizzy",
        "EyeRoll",
        "Happy",
        "Hearts",
        "Side",
        "Squint",
        "Surprised",
        "Wink",
        "WinkWacky"
      ],
      eyebrow: [
        "Angry",
        "AngryNatural",
        "Default",
        "DefaultNatural",
        "FlatNatural",
        "RaisedExcited",
        "RaisedExcited Natural",
        "SadConcerned",
        "SadConcernedNatural",
        "UnibrowNatural",
        "UpDown",
        "UpDownNatural"
      ],
      mouth: [
        "Concerned",
        "Default",
        "Disbelief",
        "Eating",
        "Grimace",
        "Sad",
        "ScreamOpen",
        "Serious",
        "Smile",
        "Tongue",
        "Twinkle",
        "Vomit"
      ],
      skin: ["Tanned", "Yellow", "Pale", "Light", "Brown", "DarkBrown", "Black"]
    };

    // this.setAvatarName = this.setAvatarName.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.displayAvatar = this.displayAvatar.bind(this);
  }

  // https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Sunglasses&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Dizzy&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Black

  displayAvatar() {
    // const avatar =
    // `http://avatars.dicebear.com/v2/avataaars/${this.state.avatarName}.svg?options`
    // `https://avataaars.io/?`;
    // );
    this.setState({ avatar: this.state.avatar + this.state.options });
    // this.setState({ avatar: this.state.avatar + this.state.options });
  }

  // setAvatarName(e) {
  //   console.log(e.target.value);
  //   this.setState({
  //     avatarName: e.target.value
  //   });
  //   this.displayAvatar();
  // }

  componentDidMount() {
    this.displayAvatar();
  }

  // ?options[top][]=turban&options[hatColor][]=black

  updateAvatar(e) {
    // const opt = e.target.value;
    this.setState({
      value: e.target.value,
      options: this.state.options + `${e.target.name}=${e.target.value}&`
      // avatar: this.state.avatar + this.state.options
      // options: [
      //   ...this.state.options,
      //   `${e.target.name}=${e.target.value}`
      // ],
      // avatar: this.state.avatar + this.state.options
    });
    // this.state.options.join('')
    // console.log(this.state.avatar);
    // console.log(this.state.options);
    // console.log("e.target.name", e.target.name);
    // console.log("e.target.value", e.target.value);

    console.log("state of value: ", this.state.value);
    console.log("options: ", this.state.options);
    this.displayAvatar();
    console.log('displayAvatar fired')
  }

  render() {
    return (
      <div className="avatar-create">
        {/* https://avataaars.io/?
        avatarStyle=Circle
        &topType=LongHairStraight
        &accessoriesType=Prescription01
        &hatColor=Blue01
        &hairColor=Red
        &facialHairType=MoustacheFancy
        &facialHairColor=Platinum
        &clotheType=CollarSweater
        &clotheColor=PastelGreen
        &eyeType=WinkWacky
        &eyebrowType=SadConcernedNatural
        &mouthType=Eating
        &skinColor=Light */}

        <div className="avatar-create-left">
          {/* <span> */}
          <NavLink exact to="/">
            Back
          </NavLink>
          {/* Avatar Creation */}
          {/* </span> */}
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
          {/* <input
            type="text"
            name="avatar-name"
            id="avatar-name"
            placeholder="Avatar Name (no personal info pls)"
            onChange={this.setAvatarName}
          /> */}
          {/* <button onClick={this.setAvatarName} value="SUBMIT">SUBMIT</button> */}
          <select
            name="topType"
            id="av-top"
            multiple={false}
            value={this.state.value}
            onChange={this.updateAvatar}
          >
            {/* <option value="selected">Top</option> */}
            {this.state.top.map((option, index) => (
              <option key={index} multiple={true} value={[option]}>
                {option}
              </option>
            ))}
          </select>
          <select
            name="accessoriesType"
            id="av-accessories"
            value={this.state.value}
            onChange={this.updateAvatar}
          >
            {/* <option value="selected">Accessories</option> */}
            {this.state.accessories.map((option, index) => (
              <option key={index} multiple={true} value={[option]}>
                {option}
              </option>
            ))}
          </select>
          <select
            name="hatColor"
            id="av-hat-color"
            value={this.state.value}
            onChange={this.updateAvatar}
          >
            {/* <option value="selected">Hat Color</option> */}
            {this.state.hatColor.map((option, index) => (
              <option key={index} multiple={true} value={[option]}>
                {option}
              </option>
            ))}
          </select>
          <select
            name="facialHairType"
            id="av-facial-hair"
            value={this.state.value}
            onChange={this.updateAvatar}
          >
            {/* <option value="selected">Facial Hair</option> */}
            {this.state.facialHair.map((option, index) => (
              <option key={index} multiple={true} value={[option]}>
                {option}
              </option>
            ))}
          </select>
          <select
            name="facialHairColor"
            id="av-facial-hair-color"
            value={this.state.value}
            onChange={this.updateAvatar}
          >
            {/* <option value="selected">Hair Color</option> */}
            {this.state.facialHairColor.map((option, index) => (
              <option key={index} multiple={true} value={[option]}>
                {option}
              </option>
            ))}
          </select>
          <select
            name="clotheType"
            id="av-clothes"
            value={this.state.value}
            onChange={this.updateAvatar}
          >
            {/* <option value="selected">Clothes</option> */}
            {this.state.clothes.map((option, index) => (
              <option key={index} multiple={true} value={[option]}>
                {option}
              </option>
            ))}
          </select>
          <select
            name="clotheColor"
            id="av-fabric-color"
            value={this.state.value}
            onChange={this.updateAvatar}
          >
            {/* <option value="selected">Fabric Color</option> */}
            {this.state.fabricColor.map((option, index) => (
              <option key={index} multiple={true} value={[option]}>
                {option}
              </option>
            ))}
          </select>
          <select
            name="eyeType"
            id="av-eyes"
            value={this.state.value}
            onChange={this.updateAvatar}
          >
            {/* <option value="selected">Eyes</option> */}
            {this.state.eyes.map((option, index) => (
              <option key={index} multiple={true} value={[option]}>
                {option}
              </option>
            ))}
          </select>
          <select
            name="eyebrowType"
            id="av-eyebrow"
            value={this.state.value}
            onChange={this.updateAvatar}
          >
            {/* <option value="selected">Eyebrow</option> */}
            {this.state.eyebrow.map((option, index) => (
              <option key={index} multiple={true} value={[option]}>
                {option}
              </option>
            ))}
          </select>
          <select
            name="mouthType"
            id="av-mouth"
            value={this.state.value}
            onChange={this.updateAvatar}
          >
            {/* <option value="selected">Mouth</option> */}
            {this.state.mouth.map((option, index) => (
              <option key={index} multiple={true} value={[option]}>
                {option}
              </option>
            ))}
          </select>
          <select
            name="skinColor"
            id="av-skin"
            value={this.state.value}
            onChange={this.updateAvatar}
          >
            {/* <option value="selected">Skin</option> */}
            {this.state.skin.map((option, index) => (
              <option key={index} multiple={true} value={[option]}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
