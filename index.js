function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



var button = $('.phrase');
var message = $('.message');


var numbers = ["  “Yes, people pull the trigger — but guns are the instrument of death. Gun control is necessary, and delay means more death and horror.” – Eliot Spitzer", "We cannot let a minority of people—and that’s what it is, it is a minority of people—hold a viewpoint that terrorizes the majority of people. - Hillary Clinton",
"When we got organized as a country, [and] wrote a fairly radical Constitution, with a radical Bill of Rights, giving radical amounts of freedom to Americans, it was assumed that Americans who had that freedom would use it responsibly .... When personal freedom is being abused, you have to move to limit it. - Bill Clinton","How many have to die before we will give up these dangerous toys? – Stephen King", "So we are speaking up for those who don’t have anyone listening to them, for those who can’t talk about it just yet, and for those who will never speak again. We are grieving, we are furious, and we are using our words fiercely and desperately because that’s the only thing standing between us and this happening again. – Emma Gonzalez", "I’m asking — no, demanding — we take action now. – Cameron Kasky"]
// console.log(quotes);

button.on("click", getNameAndLogToConsole);

function getNameAndLogToConsole() {
  console.log("name");
  event.preventDefault();
  var random = Math.random() * numbers.length;
  var rounded = Math.floor(random);
  var number = numbers[rounded];
  message.text(number);
}
