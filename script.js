
const myName ="Bunmi";
const yourCrush ="";

// set names to lowercase

const myNameList = myName.toLowerCase().split('');
const yourCrushList = yourCrush.toLowerCase().split('');

// remove duplicates in both array.

myNameList.forEach((letter, index) => {
  const position = yourCrushList.indexOf(letter);   
  
  if(position > -1){
    yourCrushList.splice(position, 1);
    myNameList.splice(index, 1);
  }

});

//get flame position and flame
const flamePosition = myNameList.length + yourCrushList.length;

let flame = flamePosition;

if (flame > 6){
  flame = flame % 6; 
}


//function to check flames digit
const checkFlames = (num) => {

  switch(num){
    case 1:
      console.log("Y'all will just be Friends");
      break;
    case 2:
      console.log("Aww, you are lovers");
      break;
    case 3:
      console.log("You're Admirers");
      break;
    case 4:
      console.log("You'll get married to " + yourCrush);
      break;
    case 5:
      console.log("You will be enemies");
      break;
    case 6:
      console.log(yourCrush +" is your secret admirer");
      break;
  }
}

checkFlames(flame);