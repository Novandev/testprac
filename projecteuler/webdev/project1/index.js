const multiples=(num) =>{

  num= document.getElementById('input').value;       //gets the value of whats in the input feild
  num=parseInt(num);        // it's coming in as a trong to turn it into a number
  // console.log(typeof(num));
// sentinet value
  let totalDivisible = 0;
  // loop all the way to the unoyt number and add.
  for(let i=0; i < num;i++){
        if(i % 3 === 0 && i % 5 === 0) {

          totalDivisible+=  i
        }
      }
let answerElement=document.createElement("Article");
let answerNode = document.createTextNode(totalDivisible)
answerElement.append(answerNode)
console.log(answerElement)
// appends as a child element
document.getElementById("append").appendChild(answerElement)
  }
