
function describeUser(user) {
  return `<div><strong>${user.full_name}</strong> ${user.gender} ${user.age}</div>`;
}

function displayUsers(users) {
  let usersStr = "";
  for (let prop in users) {
    usersStr += describeUser(users[prop])
  }
  return usersStr;
}

function findPersonBy(users, id) {
  return users[id];
}

function displayUserBy(id) {
  return describeUser(findPersonBy(id));
}

const handleData = (data) => {
  const lines =  data.split('\n'); //split string on line return
  const keys = lines.shift().split(','); // splits on the comma
  console.log(keys);

  let allUsers = {};

  for(var i in lines){ // loops through the aray of string that were separated
    const line = lines[i].split(',');// turns each line into a string
    
    const user = {}; // Object
    
    for (var j in keys){// *nested*for each key, matches it up to a value in the line array
      // console.log(keys[j],line[j]);// the item in the line array is set to the key
      user[keys[j]] = line[j];// assigns a key and value to an object
      //takes lines from the document thats being pased and based on index, returns the title,first and last of the person
      user.full_name = line[5] + " " + line[1]+ " " +line[2] ;
      user.rating2 = parseFloat(line[7]).toFixed(2);
    }
    
    allUsers[user.id] = user;
    
    // console.log(user);
    
    function findById(users, id) {
      for (var i = 0; i < users.length; i++) {
        if (users[i].id === id) {
          return user[i];
        }
      }
      throw "Couldn't find object with id: " + id;
    }
    
    
  }
  
        newUserName =() => {
        for(var i in lines){ // loops through the aray of string that were separated
          const line = lines[i].split(',');// turns each line into a string
          const user = {}
          for (var j in keys){// *nested*for each key, matches it up to a value in the line array
            // console.log(keys[j],line[j]);// the item in the line array is set to the key
            user[keys[j]] = line[j];

            }

          new_user_first_name =line[Math.floor(Math.random()*line.length)];

          new_user_last_name=line[Math.floor(Math.random()*line.length)];
          console.log("the fake random firstname is "+ new_user_first_name );
          console.log("the fake random  last name is "+ new_user_last_name );
        }

    }

    //newUserName();

    console.log(displayUsers(allUsers));
    // or display in DOM
}
  // document.write('<p>'+ data +'</p>');



// Fetch returns a Promise
fetch("MOCK_DATA.csv").then((res) => {
  //tries to get the file function delcared in es6 form
  return res.text(); //handles repsonse before processing. return Promise
}).then((data) => { // when resolved the response will be a Promise
  //returns data
  handleData(data);
}).catch((err) => {
  //error logging for the fileIO
  console.log(err.message);
});
