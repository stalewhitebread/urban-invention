$(document).ready(function(){
  //click on image, get message
  $("#dogeOne").click(function(){
    console.log("User clicked dogeOne")
  $("#outputDiv").toggle().fadeIn();
  $("#outputMsg").text("Wow! Such Doge!");
  
  });
   $("#dogeTwo").click(function(){
    console.log("User clicked dogeTwo")
    $("#outputDiv").toggle().fadeIn();
  $("#outputMsg").text("Loser! Loser! loser loser loser~")
  });
});