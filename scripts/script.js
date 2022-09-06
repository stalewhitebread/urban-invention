$(document).ready(function(){
  //click on image, get message
  $("#dogeOne").click(function(){
    console.log("User clicked dogeOne")
  $("#outputDiv").toggle();
  $("#outputMsg").text("Wow! Such Doge!");
  
  });
   $("#dogeTwo").click(function(){
    console.log("User clicked dogeTwo")
    $("#outputDiv").toggle();
  $("#outputMsg").text("Loser! Loser! loser loser loser~")
  });
});