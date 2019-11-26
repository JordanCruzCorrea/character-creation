import React, { Component } from "react";
import { api } from "../../services/api";

// import { CharacterCreate } from "../components/Create/CharacterCreate";
// import { AvatarCreate } from "../components/Create/AvatarCreate";

export class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: "https://avataaars.io/?",
      options: {
        topType: "NoHair",
        hairColor: "Auburn",
        accessoriesType: "Blank",
        hatColor: "Black",
        facialHairType: "Blank",
        facialHairColor: "Auburn",
        clotheType: "BlazerShirt",
        graphicType: "Bat",
        clotheColor: "Black",
        eyeType: "Close",
        eyebrowType: "Angry",
        mouthType: "Concerned",
        skinColor: "Tanned"
      },
      name: "",
      culture: "",
      aliases: [],
      titles: [],
      allegiances: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.displayAvatar = this.displayAvatar.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
  }

  componentDidMount() {
    this.displayAvatar();
  }

  // TODO: CHAR INFO FUNCTIONS
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
    await api
      .post("/characters", {
        name: this.state.name,
        culture: this.state.culture,
        aliases: [this.state.aliases],
        titles: [this.state.titles],
        allegiances: [this.state.allegiances],
        avatar: this.state.avatar
      })
      .then(res => {
        console.log(res);
      })
      .catch(e => console.error(e));

    this.props.history.push("/browse");
  };

  // TODO: AV CREATE FUNCTIONS
  async displayAvatar() {
    const keys = Object.keys(this.state.options);
    const values = Object.values(this.state.options);
    const keyValue = keys.map((e, i) => e + "=" + values[i] + "&");
    const joined = keyValue.join("");

    this.setState({
      avatar: this.state.avatar + joined
    });

    console.log("displayAv is go");
    console.log("DA avatar:", this.state.avatar + joined);
  }

  async updateAvatar(e) {
    const target = e.target;
    const { name, value } = target;
    const { options } = { ...this.state };
    const currentState = options;

    currentState[name] = value;

    this.setState({
      options: currentState,
      avatar: this.state.avatar.replace([name], `${[name]}=${value}&`)
    });
    console.log("avatar updateAv:", this.state.avatar);
    console.log("options updateAv: ", this.state.options);
    // this.displayAvatar()
  }

  render() {
    let values = {
      top: [
        "NoHair",
        "Eyepatch",
        "Hijab",
        "WinterHat1",
        "WinterHat2",
        "WinterHat4",
        "LongHairBigHair",
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
      hairColor: [
        "Auburn",
        "Black",
        "Blonde",
        "BlondeGolden",
        "Brown",
        "BrownDark",
        "PastelPink",
        "Platinum",
        "Red",
        "SilverGray"
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
      graphicType: [
        "Bat",
        "Cumbia",
        "Deer",
        "Diamond",
        "Hola",
        "Pizza",
        "Resist",
        "Selena",
        "Bear",
        "SkullOutline",
        "Skull"
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

    return (
      <div className="creation-container">
        {/* TODO: AVATAR CREATE */}
        <div className="avatar-create">
          <div className="avatar-container">
            <div className="avatar-create-left">
              <h2>Customize your avatar to your heart's content!</h2>
              <img src={this.state.avatar} alt="avatar" />
            </div>

            <div className="avatar-options">
              <form action="">
                <div className="av-div">
                  <label htmlFor="av-top">Top</label>
                  <select
                    name="topType"
                    id="av-top"
                    multiple={false}
                    value={this.state.options.topType}
                    onChange={this.updateAvatar}
                  >
                    {values.top.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {this.state.options.topType === "NoHair" || "Hijab" ? (
                  ""
                ) : (
                  <div className="av-div">
                    <label htmlFor="av-hair-color">Hair Color</label>
                    <select
                      name="hairColor"
                      id="av-hair-color"
                      value={this.state.options.hairColor}
                      onChange={this.updateAvatar}
                    >
                      {values.hairColor.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {this.state.options.topType.includes("Hat") ? (
                  <div className="av-div">
                    <label htmlFor="av-hat-color">Hat Color</label>
                    <select
                      name="hatColor"
                      id="av-hat-color"
                      value={this.state.options.hatColor}
                      onChange={this.updateAvatar}
                    >
                      {values.hatColor.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  ""
                )}

                {this.state.options.topType === "Eyepatch" ? (
                  ""
                ) : (
                  <div className="av-div">
                    <label htmlFor="av-accessories">Accessories</label>
                    <select
                      name="accessoriesType"
                      id="av-accessories"
                      value={this.state.options.accessoriesType}
                      onChange={this.updateAvatar}
                    >
                      {values.accessories.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {this.state.options.topType === "Hijab" ? (
                  ""
                ) : (
                  <div className="av-div">
                    <label htmlFor="av-facial-hair">Facial Hair</label>
                    <select
                      name="facialHairType"
                      id="av-facial-hair"
                      value={this.state.options.facialHairType}
                      onChange={this.updateAvatar}
                    >
                      {values.facialHair.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {this.state.options.facialHairType === "Blank" ? (
                  ""
                ) : (
                  <div className="av-div">
                    <label htmlFor="av-facial-hair-color">
                      Facial Hair Color
                    </label>
                    <select
                      name="facialHairColor"
                      id="av-facial-hair-color"
                      value={this.state.options.facialHairColor}
                      onChange={this.updateAvatar}
                    >
                      {values.facialHairColor.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="av-div">
                  <label htmlFor="av-clothes">Clothes</label>
                  <select
                    name="clotheType"
                    id="av-clothes"
                    value={this.state.options.clotheType}
                    onChange={this.updateAvatar}
                  >
                    {values.clothes.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {this.state.options.clotheType === "GraphicShirt" ? (
                  <div className="av-div">
                    <label htmlFor="av-graphic">Graphic</label>
                    <select
                      name="graphicType"
                      id="av-graphic"
                      value={this.state.options.graphicType}
                      onChange={this.updateAvatar}
                    >
                      {values.graphicType.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  ""
                )}

                {this.state.options.clotheType === "BlazerShirt" ||
                this.state.options.clotheType === "BlazerSweater" ? (
                  ""
                ) : (
                  <div className="av-div">
                    <label htmlFor="av-fabric-color">Fabric Color</label>
                    <select
                      name="clotheColor"
                      id="av-fabric-color"
                      value={this.state.options.clotheColor}
                      onChange={this.updateAvatar}
                    >
                      {values.fabricColor.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="av-div">
                  <label htmlFor="av-eyes">Eyes</label>
                  <select
                    name="eyeType"
                    id="av-eyes"
                    value={this.state.options.eyeType}
                    onChange={this.updateAvatar}
                  >
                    {values.eyes.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="av-div">
                  <label htmlFor="av-eyebrow">Eyebrow</label>
                  <select
                    name="eyebrowType"
                    id="av-eyebrow"
                    value={this.state.options.eyebrowType}
                    onChange={this.updateAvatar}
                  >
                    {values.eyebrow.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="av-div">
                  <label htmlFor="av-mouth">Mouth</label>
                  <select
                    name="mouthType"
                    id="av-mouth"
                    value={this.state.options.mouthType}
                    onChange={this.updateAvatar}
                  >
                    {values.mouth.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="av-div">
                  <label htmlFor="av-skin">Skin</label>
                  <select
                    name="skinColor"
                    id="av-skin"
                    value={this.state.options.skinColor}
                    onChange={this.updateAvatar}
                  >
                    {values.skin.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* TODO: CHAR CREATE */}
        <div className="character-create">
          <h2>Character Info</h2>
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
              value="SUBMIT"
              onSubmit={this.handleSubmit}
              style={{ fontFamily: "masonregular, FontAwesome" }}
            />
          </form>
        </div>
      </div>
    );
  }
}
