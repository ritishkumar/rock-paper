function playgame(playerChoice) {
  var choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if (playerChoice === computerChoice) {
    result = "It's a draw! You both choose " + playerChoice + ".";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win! " + playerChoice + " beats " + computerChoice + ".";
    document.getElementById("result").style.color = "green";
    speak(result);
  } else {
    result = "You lose! " + computerChoice + " beats " + playerChoice + ".";
    document.getElementById("result").style.color = "red";
    speak(result);
  }
  document.getElementById("result").innerHTML = result;
}
function speak(text) {
  var msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
}
