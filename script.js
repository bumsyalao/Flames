
document.querySelector('#showMeButton').addEventListener('click', function() {
    //Get your name, your crush and calculate crush
    var yourName = document.querySelector('#yourNameInput').value;
    var yourCrush = document.querySelector('#yourCrushInput').value;

    var result = computeResult(yourName, yourCrush);
    document.querySelector('#display-here').innerHTML = result;
    
    // show result page and remove form page.
    var resultDiv = document.getElementById("result");
      resultDiv.classList.remove("hide");
    var formDiv = document.getElementById("form");
      formDiv.classList.add("hide");
  
   
  });
  //hide result page, go to form page
  document.querySelector('#gobackButton').addEventListener('click', function() {
    var resultDiv = document.getElementById("result");
      resultDiv.classList.add("hide");
    var formDiv = document.getElementById("form");
      formDiv.classList.remove("hide");
   
  });
  
  //function to compute result.
  
  function computeResult(yourName, yourCrush) {
  
  
  // set names to lowercase
  
  const myNameList = yourName.toLowerCase().split('');
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
    let prediction = '';
    switch(parseInt(num)){
      case 1:
        prediction = "Y'all will just be Friends";
        break;
      case 2:
        prediction= "Aww, you are lovers";
        break;
      case 3:
        prediction= "You're Admirers";
        break;
      case 4:
        prediction= "You'll get married to " + yourCrush;
        break;
      case 5:
        prediction= "You will be enemies";
        break;
      case 6:
        prediction= yourCrush +" is your secret admirer";
        break;
    }
    return prediction;
  }
  
   return checkFlames(flame);
  }
  
  
  