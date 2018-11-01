// business logic
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}


function Players(name, dice) {
  this.name = name,
  this.totalScore = 0,
  this.dice = dice
}

Players.prototype.diceRoll = function() {
  this.dice = rollDice();
  if (this.dice === 1) {
    return;
  } else if (this.dice >= 2 || this.dice <=6 && this.dice !== 1) {
    return this.totalScore += this.dice;
  }

}

Players.prototype.holding = function() {
  return;
}


// // useriterface logic
$(document).ready(function(){
  $(".player-select").submit(function(event) {
    event.preventDefault();

    var player1 = new Players ($("#player1").val());
    var player2 = new Players ($("#player2").val());

    $("#player1Name").text(player1.name);
    $("#player2Name").text(player2.name);
    $("#players-display").show();
    $(".player-select").hide();

    $("#player1-button").click(function(){
      player1.diceRoll();
      $("#placeholder").text(player1.dice);
      $("#hold-button").click(function(){
        player1.holding();
        $("#player1Score").text(player1.totalScore);
      })
    })

    $("#player2-button").click(function() {
      player2.diceRoll();
      $("#placeholder").text(player2.dice);
      $("#2hold-button").click(function() {
        player2.holding();
        $("#player2Score").text(player2.totalScore);
      })
    })
  })
});
