 // It's good practice to start using it now
$(document).ready(function(){
var random=Math.floor(Math.random()*79+8);
  // Choose a random number to be shown at the start of the game
  // Pick a number between 19 - 120
  //
  $('#randomEvent').text(random);
 //Define my variables
  var ccone= Math.floor(Math.random()*9+1);
  var cctwo= Math.floor(Math.random()*9+1);
  var ccthree= Math.floor(Math.random()*9+1);
  var ccfour= Math.floor(Math.random()*9+1);

  var score= 0; 
  var wins= 0;
  var losses= 0;

//This will make the game start over
function reset(){
      random=Math.floor(Math.random()*79+8);
      console.log(random);
      $('#randomEvent').text(random);
  var ccone= Math.floor(Math.random()*9+1);
  var cctwo= Math.floor(Math.random()*9+1);
  var ccthree= Math.floor(Math.random()*9+1);
  var ccfour= Math.floor(Math.random()*9+1);
      score= 0;
      $('#grandtotal').text(score);
      } 
//adds the wins to the score
function win(){
alert ("Good for You");
  wins++; 
  $('#playerWins').text(wins);
  reset();
}
///losses
function loses(){
alert ("You can do better!");
  losses++;
  $('#playerLosses').text(losses);
  reset();
}
//click event for the crystals
  $('#crystal1').on ('click', function(){
    score = score + ccone;
    console.log("New score= " + score);
    $('#grandTotal').text(score); 
        if (score == random){
          win();
        }
        else if ( score > random){
          loses();
        }   
  });  
  $('#crystal2').on ('click', function(){
    score = score + cctwo;
    console.log("New score= " + score);
    $('#grandTotal').text(score); 
        if (score == random){
          win();
        }
        else if ( score > random){
          loses();
        } 
  });  
  $('#crystal3').on ('click', function(){
    score = score + ccthree;
    console.log("New score= " + score);
    $('#grandTotal').text(score);
//win-lose
          if (score == random){
          win();
        }
        else if ( score > random){
          loses();
        } 
  });  
  $('#crystal4').on ('click', function(){
    score = score + ccfour;
    console.log("New score= " + score);
    $('#grandTotal').text(score); 
      
          if (score == random){
          win();
        }
        else if ( score > random){
          loses();
        }
  });   
});