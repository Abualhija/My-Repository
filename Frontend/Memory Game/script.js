/* Start button*/

let startbutton = document.querySelector(".start-button span");
startbutton.addEventListener("click", function () {
  let playerName = prompt("Enter your name : ");
  if (playerName == null || playerName == "") {
    playerName = "Unknown Player";
    document.querySelector(".player-name span").innerHTML = playerName;
  } else {
    document.querySelector(".player-name span").innerHTML = playerName;
  }

  document.querySelector(".start-button").style.display = "none";
  document.querySelector(".tries span").innerHTML = 0;

  // or
  // document.querySelector('.start-button').remove();
});

/* Flipping card*/
let FlipDuration = 1000;

let gameBlock = document.querySelector(".game-container");

let blocks = Array.from(gameBlock.children);

let orderArray = [];
for (i = 0; i < blocks.length; i++) {
  orderArray.push(i);
}
const new_array = shuffle_Orders(orderArray);

// /* Shuffling the cards based on random order from the above array*/

/*Adding the shuffled orders to each element*/
blocks.forEach(function (block, index) {
  block.style.order = new_array[index];
  block.addEventListener("click", function () {
    flipCard(block);
  });
});

function shuffle_Orders(arr) {
  let array_length = arr.length;
  let temp;
  while (array_length > 0) {
    let random = Math.floor(Math.random() * array_length);
    array_length--;

    temp = arr[array_length];
    arr[array_length] = arr[random];
    arr[random] = temp;
  }
  return arr;
}

/*Flipping the cards*/

function flipCard(card) {
  card.classList.add("rotate");

  all_flipped_cards = blocks.filter((flipped_card) =>
    flipped_card.classList.contains("rotate")
  );

  if (all_flipped_cards.length === 2) {
    stopClick();
    checkMatched(all_flipped_cards[0], all_flipped_cards[1]);
    checkEnd()
  }
}

function stopClick() {
  gameBlock.classList.add("stop-click");

  setTimeout(function () {
    gameBlock.classList.remove("stop-click");
  }, FlipDuration);
}

function checkMatched(firstCard, secondCard) {
  let tries = document.querySelector(".tries span");

  if (firstCard.dataset.car === secondCard.dataset.car) {
    firstCard.classList.remove("rotate");
    secondCard.classList.remove("rotate");
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
  } else {
    setTimeout(function () {
      firstCard.classList.remove("rotate");
      secondCard.classList.remove("rotate");
    }, FlipDuration);

    tries = parseInt(tries.innerHTML) + 1;
    document.querySelector(".tries span").innerHTML = tries;
  }
}

function checkEnd(){
  let matched_num = document.querySelectorAll(".matched").length;
  if(matched_num === blocks.length){
    document.querySelector(".end-button").style.display = "block";
    document.querySelector(".end-button").style.background='rgba(0, 0, 0, 0.9)';
  }
}

let restart_button = document.querySelector(".restart");
restart_button.addEventListener("click", function () {
  location.reload();
}
);

