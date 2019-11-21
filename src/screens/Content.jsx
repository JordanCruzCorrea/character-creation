import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { CharacterCreate } from "../components/Create/CharacterCreate";
import { AvatarCreate } from "../components/Create/AvatarCreate";
import { Browse } from "../components/Browse/Browse";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // top: [
      //   "NoHair",
      //   "Eyepatch",
      //   "Hijab",
      //   "WinterHat1",
      //   "WinterHat2",
      //   "WinterHat4",
      //   "LongHairBig Hair",
      //   "LongHairBob",
      //   "LongHairCurly",
      //   "LongHairCurvy",
      //   "LongHairDreads",
      //   "LongHairFrida",
      //   "LongHairFro",
      //   "LongHairFroBand",
      //   "LongHairNotTooLong",
      //   "LongHairShavedSides",
      //   "LongHairMiaWallace",
      //   "LongHairStraight",
      //   "LongHairStraight2",
      //   "LongHairStraightStrand",
      //   "ShortHairDreads01",
      //   "ShortHairDreads02",
      //   "ShortHairFrizzle",
      //   "ShortHairShaggyMullet",
      //   "ShortHairShortCurly",
      //   "ShortHairShortFlat",
      //   "ShortHairShortRound",
      //   "ShortHairShortWaved",
      //   "ShortHairSides",
      //   "ShortHairTheCaesar",
      //   "ShortHairTheCaesarSidePart"
      // ],
      // accessories: [
      //   "Blank",
      //   "Kurt",
      //   "Prescription01",
      //   "Prescription02",
      //   "Sunglasses",
      //   "Wayfarers"
      // ],
      // hatColor: [
      //   "Black",
      //   "Blue",
      //   "Gray",
      //   "Heather",
      //   "Pastel",
      //   "Pink",
      //   "Red",
      //   "White"
      // ],
      // hairColor: [
      //   "Auburn",
      //   "Black",
      //   "Blonde",
      //   "BlondeGolden",
      //   "Brown",
      //   "BrownDark",
      //   "PastelPink",
      //   "Platinum",
      //   "Red",
      //   "SilverGray"
      // ],
      // facialHair: [
      //   "Blank",
      //   "BeardMedium",
      //   "BeardLight",
      //   "BeardMagestic",
      //   "MoustacheFancy",
      //   "MoustacheMagnum"
      // ],
      // facialHairColor: [
      //   "Auburn",
      //   "Black",
      //   "Blonde",
      //   "BlondeGolden",
      //   "Brown",
      //   "BrownDark",
      //   "Platinum",
      //   "Red"
      // ],
      // clothes: [
      //   "BlazerShirt",
      //   "BlazerSweater",
      //   "CollarSweater",
      //   "GraphicShirt",
      //   "Overall",
      //   "ShirtCrewNeck",
      //   "ShirtScoopNeck",
      //   "ShirtVNeck"
      // ],
      // fabricColor: [
      //   "Black",
      //   "Blue01",
      //   "Blue02",
      //   "Blue03",
      //   "Gray01",
      //   "Gray02",
      //   "Heather",
      //   "PastelBlue",
      //   "PastelGreen",
      //   "PastelOrange",
      //   "PastelRed",
      //   "PastelYellow",
      //   "Pink",
      //   "Red",
      //   "White"
      // ],
      // graphic: [
      //   "Bat",
      //   "Cumbia",
      //   "Deer",
      //   "Diamond",
      //   "Hola",
      //   "Pizza",
      //   "Resist",
      //   "Selena",
      //   "Bear",
      //   "SkullOutline",
      //   "Skull"
      // ],
      // eyes: [
      //   "Close",
      //   "Cry",
      //   "Default",
      //   "Dizzy",
      //   "EyeRoll",
      //   "Happy",
      //   "Hearts",
      //   "Side",
      //   "Squint",
      //   "Surprised",
      //   "Wink",
      //   "WinkWacky"
      // ],
      // eyebrow: [
      //   "Angry",
      //   "AngryNatural",
      //   "Default",
      //   "DefaultNatural",
      //   "FlatNatural",
      //   "RaisedExcited",
      //   "RaisedExcited Natural",
      //   "SadConcerned",
      //   "SadConcernedNatural",
      //   "UnibrowNatural",
      //   "UpDown",
      //   "UpDownNatural"
      // ],
      // mouth: [
      //   "Concerned",
      //   "Default",
      //   "Disbelief",
      //   "Eating",
      //   "Grimace",
      //   "Sad",
      //   "ScreamOpen",
      //   "Serious",
      //   "Smile",
      //   "Tongue",
      //   "Twinkle",
      //   "Vomit"
      // ],
      // skin: ["Tanned", "Yellow", "Pale", "Light", "Brown", "DarkBrown", "Black"]
    };
  }

  render() {
    return (
      <main>
        <div className="container">
          <Switch>
            <Route exact path="/" component={CharacterCreate} />
            <Route exact path="/avatar-create" component={AvatarCreate} />
            <Route exact path="/browse" component={Browse} />
          </Switch>
        </div>
      </main>
    );
  }
}
