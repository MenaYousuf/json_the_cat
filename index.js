const {fetchBreedDescription} = require("./breedFetcher.js");

const breedName = process.argv[2];
const callback = (error, breedDescription) => {
  console.log(breedDescription);
  console.log("error: ", error);
};
fetchBreedDescription(breedName, callback);