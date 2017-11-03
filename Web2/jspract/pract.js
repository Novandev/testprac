data = "id,first_name,last_name,email,gender,prefix,age,rating,date 1,Alic,Saggers,asaggers0@nps.gov,Male,Dr,39,3.8477,1370770899";
lines= data.split(' ');
//returns the first element which in this case is the entire line id- date. If at the end of the elements in the string there is a ',' it will spit it to a new line
keys =lines.shift().split(',');
console.log(lines);
console.log(keys);
//for(var i in lines){ //loops through the lines string
  //during the loop a variable line is assingmen to the value of a string which each one ends in a ','.
  //const line = lines[i].split(',');

  //console.log(lines[i]);
//}
new_user_name =lines[Math.floor(Math.random()*lines.length)];
console.log(new_user_name);
newUserName=()=> {
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
newUserName();

getUser =(num) => {
  var found;
      user.some(function (obj) {
        if (obj.id === num) {
          found = obj;
          console.log(found);
        }

      });
  }
  getUser("454");
