// import React from "react";
import React from "react";
import { NavLink } from "react-router-dom";

export class AvatarCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: "https://avataaars.io/?",
      // avatarName: "http://avatars.dicebear.com/v2/avataaars/hello.svg",
      // initialOption: '?options',
      // options: [],
      options: {
        topType: "NoHair",
        accessoriesType: "Blank",
        hatColor: "Black",
        facialHairType: "Blank",
        facialHairColor: "Auburn",
        clotheType: "BlazerShirt",
        clotheColor: "Black",
        eyeType: "Close",
        eyebrowType: "Angry",
        mouthType: "Concerned",
        skinColor: "Tanned"
      },
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

    this.updateAvatar = this.updateAvatar.bind(this);
    this.displayAvatar = this.displayAvatar.bind(this);
  }

  async displayAvatar() {
    const keys = Object.keys(this.state.options);
    const values = Object.values(this.state.options);
    const keyValue = keys.map((e, i) => e + "=" + values[i] + "&");
    const joined = keyValue.join("");

    // console.log("joined", joined);

    this.setState({
      avatar: this.state.avatar + joined
    });

    console.log("displayAv is go");
    console.log("DA avatar:", this.state.avatar + joined);
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

  async updateAvatar(e) {
    const target = e.target;
    const { name, value } = target;
    // const name = target.name;
    // const value = target.value;
    const keys = Object.keys(this.state.options);
    // const values = Object.values(this.state.options);

    console.log("e name", name);
    console.log("e value", value);

    // const mapKeys = keys.map(key =>)

    if (keys.includes(name)) {
      this.setState({
        // options: {
        //   [name]: value
        // },
        avatar: this.state.avatar.replace(name, `${name}=${value}&`)
      });
    }
    console.log("UA avatar", this.state.avatar);

    // this.displayAvatar();

    // this.setState({
    // state: state,
    // value: e.target.value,
    // options: this.state.options + `${e.target.name}=${e.target.value}&`
    // avatar: this.state.avatar + this.state.options
    // options: [
    //   ...this.state.options,
    //   `${e.target.name}=${e.target.value}`
    // ],
    // avatar: this.state.avatar + this.state.options
    // });
    // this.state.options.join('')
    // console.log(this.state.avatar);
    // console.log(this.state.options);
    // console.log("e.target.name", e.target.name);
    // console.log("e.target.value", e.target.value);

    console.log("options updateAv: ", this.state.options);
    // await this.displayAvatar();
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
          <NavLink exact to="/">
            Back
          </NavLink>

          <img src={this.state.avatar} alt="" />
        </div>

        <div className="avatar-options">
          {/* <input
            type="text"
            name="avatar-name"
            id="avatar-name"
            placeholder="Avatar Name (no personal info pls)"
            onChange={this.setAvatarName}
          /> */}

          <form action="">
            <span>
              <label htmlFor="av-top">Top</label>
              <select
                name="topType"
                id="av-top"
                multiple={false}
                value={this.state.options.topType}
                onChange={this.updateAvatar}
              >
                {/* <option value="selected">Top</option> */}
                {this.state.top.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </span>

            <span>
              <label htmlFor="av-accessories">Accessories</label>
              <select
                name="accessoriesType"
                id="av-accessories"
                value={this.state.options.accessoriesType}
                onChange={this.updateAvatar}
              >
                {/* <option value="selected">Accessories</option> */}
                {this.state.accessories.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </span>
            <span>
              <label htmlFor="av-hat-color">Hat Color</label>
              <select
                name="hatColor"
                id="av-hat-color"
                value={this.state.options.hatColor}
                onChange={this.updateAvatar}
              >
                {/* <option value="selected">Hat Color</option> */}
                {this.state.hatColor.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </span>
            <span>
              <label htmlFor="av-facial-hair">Facial Hair</label>
              <select
                name="facialHairType"
                id="av-facial-hair"
                value={this.state.options.facialHairType}
                onChange={this.updateAvatar}
              >
                {/* <option value="selected">Facial Hair</option> */}
                {this.state.facialHair.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </span>
            <span>
              <label htmlFor="av-facial-hair-color">Facial Hair Color</label>
              <select
                name="facialHairColor"
                id="av-facial-hair-color"
                value={this.state.options.facialHairColor}
                onChange={this.updateAvatar}
              >
                {/* <option value="selected">Hair Color</option> */}
                {this.state.facialHairColor.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </span>
            <span>
              <label htmlFor="av-clothes">Clothes</label>
              <select
                name="clotheType"
                id="av-clothes"
                value={this.state.options.clotheType}
                onChange={this.updateAvatar}
              >
                {/* <option value="selected">Clothes</option> */}
                {this.state.clothes.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </span>
            <span>
              <label htmlFor="av-fabric-color">"Fabric Color</label>
              <select
                name="clotheColor"
                id="av-fabric-color"
                value={this.state.options.clotheColor}
                onChange={this.updateAvatar}
              >
                {/* <option value="selected">Fabric Color</option> */}
                {this.state.fabricColor.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </span>
            <span>
              <label htmlFor="av-eyes">Eyes</label>
              <select
                name="eyeType"
                id="av-eyes"
                value={this.state.options.eyeType}
                onChange={this.updateAvatar}
              >
                {/* <option value="selected">Eyes</option> */}
                {this.state.eyes.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </span>
            <span>
              <label htmlFor="av-eyebrow">Eyebrow</label>
              <select
                name="eyebrowType"
                id="av-eyebrow"
                value={this.state.options.eyebrowType}
                onChange={this.updateAvatar}
              >
                {/* <option value="selected">Eyebrow</option> */}
                {this.state.eyebrow.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </span>
            <span>
              <label htmlFor="av-mouth">Mouth</label>
              <select
                name="mouthType"
                id="av-mouth"
                value={this.state.options.mouthType}
                onChange={this.updateAvatar}
              >
                {/* <option value="selected">Mouth</option> */}
                {this.state.mouth.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </span>
            <span>
              <label htmlFor="av-skin">Skin</label>
              <select
                name="skinColor"
                id="av-skin"
                value={this.state.options.skinColor}
                onChange={this.updateAvatar}
              >
                {/* <option value="selected">Skin</option> */}
                {this.state.skin.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </span>
          </form>
        </div>
      </div>
    );
  }
}
