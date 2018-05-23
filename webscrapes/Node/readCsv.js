require('es6-promise').polyfill();
require('isomorphic-fetch');

console.log(process.argv.slice(2));
let newFile='';
fetch('http://samplecsvs.s3.amazonaws.com/TechCrunchcontinentalUSA.csv')
  .then(function(response) {
    return response.text().then(function(text){
            console.log(text);
    })
  })
  console.log(newFile)
