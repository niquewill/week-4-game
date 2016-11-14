// It's good practice to start using it now
$(document).ready(function(){
var Random=Math.floor(Math.random()*79+8)
  // Choose a random number to be shown at the start of the game
  // Pick a number between 19 - 120
  //
  $('#randomEvent').text(Random);
 
  var ccone= Math.floor(Math.random()*9+1)
  var cctwo= Math.floor(Math.random()*9+1)
  var ccthree= Math.floor(Math.random()*9+1)
  var ccfour= Math.floor(Math.random()*9+1)

  var score= 0; 
  var wins= 0;
  var losses = 0;
//Define my variables
$('#playerWins').text(wins);
$('#playerLosses').text(losses);
//This will make the game start over
function reset(){
      Random=Math.floor(Math.random()*79+8);
      console.log(Random)
      $('#randomEvent').text(Random);
      num1= Math.floor(Math.random()*9+1);
      num2= Math.floor(Math.random()*9+1);
      num3= Math.floor(Math.random()*9+1);
      num4= Math.floor(Math.random()*9+1);
      score= 0;
      $('#grandtotal').text(score);
      } 
//adds the wins to the score
function winning(){
alert("Good for You");
  wins++; 
  $('#playerWins').text(wins);
  reset();
}
///losses
function losing(){
alert ("You can do better!");
  losses++;
  $('#losses').text(losses);
  reset()
}
//click event for the crystals
  $('#crystal1').on ('click', function(){
    score = score + num1;
    console.log("New score= " + score);
    $('#grandTotal').text(score); 
        if (score == Random){
          winning();
        }
        else if ( score > Random){
          losing();
        }   
  })  
  $('#crystal2').on ('click', function(){
    score = score + num2;
    console.log("New score= " + score);
    $('#grandTotal').text(score); 
        if (score == Random){
          winning();
        }
        else if ( score > Random){
          losing();
        } 
  })  
  $('#crystal3').on ('click', function(){
    score = score + num3;
    console.log("New score= " + score);
    $('#grandTotal').text(score;
//win-lose
          if (score == Random){
          winning();
        }
        else if ( score > Random){
          losing();
        } 
  })  
  $('#crystal4').on ('click', function(){
    score = score + num4;
    console.log("New score= " + score);
    $('#grandTotal').text(score); 
      
          if (score == Random){
          winning();
        }
        else if ( score > Random){
          losing();
        }
  });   
}); 