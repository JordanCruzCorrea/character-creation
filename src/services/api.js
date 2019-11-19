import axios from "axios";

// CREATE (INFO)
// export const createCharacter = axios.create({
//   baseURL: "http://5dd1790315bbc2001448d20b.mockapi.io",
//   responseType: "json"
// })

// BROWSE
export const displayCharacters = axios.create({
  baseURL: "http://5dd1790315bbc2001448d20b.mockapi.io",
  responseType: "json"
});
