const dice6 = ["1", "2", "3", "4", "5", "6"];
const dice10 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function dice6roll() {
  const roll6 = dice6[Math.floor(Math.random() * dice6.length)];
  console.log("this is working");
  document.getElementById(
    "result"
  ).innerHTML = `On dice 6 you rolled a <strong><u>${roll6}</u></strong>!`;
}
function dice10roll() {
  const roll10 = dice10[Math.floor(Math.random() * dice10.length)];
  console.log("this is working");
  document.getElementById(
    "result"
  ).innerHTML = `On dice 10 you rolled a <strong><u>${roll10}</u></strong>!`;
}
