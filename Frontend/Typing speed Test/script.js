// Words to play

const words = [
  "Hello",
  "Code",
  "Town",
  "Funny",
  "Programming",
  "Javascript",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];

// Picking play level
function display() {
  var checkRadio = document.querySelector('input[name="levels"]:checked');
  if (checkRadio != null) {
    document.querySelector(".welcome").remove();
    startGame(checkRadio.value);
  } else {
    document.getElementById("disp").innerHTML = "No Level is selected";
  }
}

// Start game
function startGame(level) {
  const levels = {
    Easy: 5,
    Medium: 4,
    Hard: 3,
  };

  // Setting level and time
  var defaultLevel = level;
  let defaultLevelTime = levels[defaultLevel];

  // Picking All Elements
  let startButton = document.querySelector(".start");
  let levelName = document.querySelector(".lvl");
  let levelTime = document.querySelector(".seconds");
  let wordToPrint = document.querySelector(".word");
  let upcomingWords = document.querySelector(".next-word");
  let inputArea = document.querySelector(".input-class");
  let timeLeftSpan = document.querySelector(".time span");
  let scoreGot = document.querySelector(".score .total-score");
  let scoreMax = document.querySelector(".score .max-score");
  let finishMessage = document.querySelector(".finish");

  // Setting Main values to elements
  levelName.innerHTML = defaultLevel;
  levelTime.innerHTML = defaultLevelTime;
  timeLeftSpan.innerHTML = defaultLevelTime;
  scoreMax.innerHTML = words.length;

  // Preventing Paste in Input
  inputArea.onpaste = (e) => {
    e.preventDefault();
  };

  // start typing
  startButton.onclick = function () {
    this.remove();
    inputArea.focus();
    generateWords();
  };

  // The main Function to generate words and everything
  function generateWords() {
    // Generating random word
    let randomWord = words[Math.floor(Math.random() * words.length)];
    let wordIndex = words.indexOf(randomWord);

    // Adding 3 more seconds just for first word
    if (words.length === parseInt(scoreMax.innerHTML)) {
      defaultLevelTime = levels[defaultLevel] + 3;
    } else {
      defaultLevelTime = levels[defaultLevel];
    }

    // remove word from words array
    words.splice(wordIndex, 1);

    // Add word to print
    wordToPrint.innerHTML = randomWord;

    //empty the upcoming words
    upcomingWords.innerHTML = "";

    // generate words for upcoming words
    for (let i = 0; i < words.length; i++) {
      let divElement = document.createElement("div");
      let divText = document.createTextNode(words[i]);
      divElement.appendChild(divText);
      upcomingWords.appendChild(divElement);
    }
    //starting the game
    startPlay();
  }

  function startPlay() {
    // reset time after each word
    timeLeftSpan.innerHTML = defaultLevelTime;
    let start = setInterval(function () {
      // Decrease time
      timeLeftSpan.innerHTML--;
      // Check the word is typed correctly or not at 0 time
      if (timeLeftSpan.innerHTML === "0") {
        // stopping timer at zero
        clearInterval(start);
        if (
          wordToPrint.innerHTML.toLowerCase() === inputArea.value.toLowerCase()
        ) {
          // empty input for next word
          inputArea.value = "";
          // increase score
          scoreGot.innerHTML++;
          if (words.length > 0) {
            //prossess next word
            generateWords();
          } else {
            // if words not empty then all words are typed
            let span = document.createElement("span");
            span.className = "success";
            let spanText = document.createTextNode(
              "Congratulations, You Typed All Words Correctly"
            );
            span.appendChild(spanText);
            let span2 = document.createElement("span");
            span2.addEventListener("click", function () {
              location.reload();
            });
            span2.className = "reset-button";
            let spanText2 = document.createTextNode("Reset Game");
            span2.appendChild(spanText2);
            finishMessage.appendChild(span);
            finishMessage.appendChild(span2);
            upcomingWords.remove();
          }
        } else {
          // Game Over
          let span = document.createElement("span");
          span.className = "failure";
          let spanText = document.createTextNode("Game Over , Wrong Word !");
          // document.querySelector('.total-score').inn
          span.appendChild(spanText);
          let span2 = document.createElement("span");
          span2.addEventListener("click", function () {
            location.reload();
          });
          span2.className = "reset-button";
          let spanText2 = document.createTextNode("Reset Game");
          span2.appendChild(spanText2);
          finishMessage.appendChild(span);
          finishMessage.appendChild(span2);
        }
      }
    }, 1000);
  }
}
