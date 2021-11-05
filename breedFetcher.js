
const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);

    let breed = data[0];

    if (breed) {
      callback(null, breed.description);
    } else {
      callback("this cat doesn't exist ", null);
    }
  });
};
module.exports = {fetchBreedDescription};





// const request = require('request');

// const breedName = process.argv[2]
// // const getBreedInfo = ((breed, name) => {
// request (`https://api.thecatapi.com/v1/breeds/search?q=sib`, (error, response, body) => {
// //  console.log(typeof body)

//  const data = JSON.parse(body);
// // console.log(data);
// // console.log(typeof data);

// let breed = data[0]

// if(breed){
//   console.log(breed.description);
// }else{
//   console.log("this cat doesn't exist ")
// }


// const request = require('request');
// let breed = data[0]

// const breedName = process.argv[2]
// // const getBreedInfo = ((breed, name) => {
// request (`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
// //  console.log(typeof body)

//  const data = JSON.parse(body);

// if(breed){
//   console.log(breed.description);
// }else{
//   console.log("this is not real")







//   if (breed.name === "Siberian"){
//     return breed.name
//   } else{
//     return null;
//   }
// console.log(getBreedInfo);
// });


// console.log(data);
// console.log(typeof data);

