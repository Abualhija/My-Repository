// Selecting Elements
let questions_number = document.querySelector(
  ".quiz-info .questions-count span"
);
let allQuizes = document.querySelectorAll(".quiz-choice-container span");
let bulletsContainer = document.querySelector(".questions-nav .spans");
let quizArea = document.querySelector(".quiz-area");
let answerArea = document.querySelector(".answers-area");
let answerContainer = document.querySelector(".answers-container");
let submitButton = document.querySelector(".submit-answer");
let questionsNav = document.querySelector(".questions-nav");
let resultsMessage = document.querySelector(".result");
let timeCounter = document.querySelector(".time-count");
let currentIndex = 0;
let rightAnswersCount = 0;
let countInterval;

/*---START--- picking the quiz subject */
let quizSubject = document.querySelectorAll(".quiz-choice-container span");
quizSubject.forEach((span) => {
  span.addEventListener("click", (e) => {
    let subject = e.target.dataset.subject;
    getQuestions(subject);
    document.querySelector(".overlay").remove();
    document.querySelector(".category span").innerHTML = subject.toUpperCase();
  });
});

/*---END--- checking the answer */

/*---START--- getting data from json file*/

function getQuestions(subject) {
  let myRequest = new XMLHttpRequest();
  myRequest.open("GET", `./${subject}_quiz.json`, true);
  myRequest.send();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let questionsObject = JSON.parse(this.responseText);

      // Putting number of questions in the question count span

      question_count = 5;
      questions_number.innerHTML = question_count;
      totalQuestionsNumber = questionsObject.length;
      // Creating bullets for questions
      createBulletsForQuestions(question_count);

      // Adding data

      // getting random array of questions
      const randomArray = getRanArr(totalQuestionsNumber, question_count);
      let newobjectArray = [];
      for (i = 0; i < randomArray.length; i++) {
        newobjectArray.push(questionsObject[randomArray[i]]);
      }

      // addQuestionData(questionsObject[currentIndex], question_count);
      addQuestionData(newobjectArray[currentIndex], question_count);
      // starting the countdown time
      countdown(10, question_count);

      // click on submit Button
      submitButton.addEventListener("click", () => {
        // getting the right answer
        // let therightAnswer = questionsObject[currentIndex]["right_answer"];
        let therightAnswer = newobjectArray[currentIndex]["right_answer"];

        // cheking the answer and storing it
        checkAnswer(therightAnswer, question_count);

        // removing previous question
        quizArea.innerHTML = "";
        answerArea.innerHTML = "";

        // increasing the index to move to the next question
        currentIndex++;
        // addQuestionData(questionsObject[currentIndex], question_count);
        addQuestionData(newobjectArray[currentIndex], question_count);

        // changing the color of questions nav bullets based on the current question
        navBulletsColor();

        // starting the countdown time after each click
        clearInterval(countInterval);

        countdown(10, question_count);

        // showing results
        showResults(question_count);
      });
    }
  };
}

/*---END--- getting data from json file*/

/*---START--- creating bullets based on questions number */

function createBulletsForQuestions(numOfQuestions) {
  for (i = 0; i < numOfQuestions; i++) {
    let bullet = document.createElement("span");
    // adding the active class only on the first question as a start
    if (i === 0) {
      bullet.classList.add("active-question");
    }
    bulletsContainer.appendChild(bullet);
  }
}

/*---END--- creating bullets based on questions number */

/*---START--- adding question data*/

// ALL WORK IS HERE
function addQuestionData(object, count) {
  if (currentIndex < count) {
    // create the question
    let questionHeader = document.createElement("h2");
    let headerText = document.createTextNode(`${object["title"]}`);
    questionHeader.appendChild(headerText);
    // append the question
    quizArea.appendChild(questionHeader);

    // create the answers
    let answers_counter = 0;
    let allAnswers = [];
    for (i in object) {
      if (i.includes("answer_")) {
        answers_counter++;
        allAnswers.push(object[i]);
      }
    }
    // shuffle the answers every new start of the quiz
    let newARR=shuffleArray(allAnswers);
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }
    for (i = 0; i < answers_counter; i++) {
      // creating the div
      let answerMainDiv = document.createElement("div");
      answerMainDiv.classList.add("answer");
      // creating the radio button
      let radioButton = document.createElement("input");
      radioButton.type = "radio";
      // making first answer always checked
      if (i === 0) {
        radioButton.checked = true;
      }
      radioButton.id = `answer_${i + 1}`;
      radioButton.name = "question-answer";
      // radioButton.dataset.answer = `${object[`answer_${i + 1}`]}`;
      radioButton.dataset.answer = newARR[i];

      //append the radio button the main div
      answerMainDiv.appendChild(radioButton);

      // creating the label
      let answerLabel = document.createElement("label");
      answerLabel.htmlFor = `answer_${i + 1}`;

      // creating the nswer inside label
      // let answerText = document.createTextNode(`${object[`answer_${i + 1}`]}`);
      let answerText = document.createTextNode(newARR[i]);
      answerLabel.appendChild(answerText);

      //append the label button the main div
      answerMainDiv.appendChild(answerLabel);

      //append the main div that contains every answer to the question
      answerArea.appendChild(answerMainDiv);
    }
  }
}

/*---END--- adding question data*/

/*---START--- checking the answer */
function checkAnswer(rightAnswer, question_count) {
  let answers = document.querySelectorAll(".answer input");
  let pickecdAnswer;
  for (i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      pickecdAnswer = answers[i].dataset.answer;
    }
  }

  if (pickecdAnswer === rightAnswer) {
    rightAnswersCount++;
  }
}

/*---END--- checking the answer */

/*---START--- changing the bullets color */

function navBulletsColor() {
  let allBulletsSpans = document.querySelectorAll(".questions-nav .spans span");
  allBulletsSpans.forEach((span, index) => {
    if (currentIndex === index) {
      span.classList.add("active-question");
    }
  });
}

/*---END--- changing the bullets color */

/*---START--- showing result*/
function showResults(question_count) {
  let resultMessage;
  if (currentIndex === question_count) {
    quizArea.remove();
    answerContainer.remove();
    submitButton.remove();
    questionsNav.remove();

    if (
      rightAnswersCount > 0.4 * question_count &&
      rightAnswersCount <= 0.9 * question_count
    ) {
      resultMessage = "Good";
      className = "good";
    } else if (rightAnswersCount <= 0.4 * question_count) {
      resultMessage = "Bad";
      className = "bad";
    } else {
      resultMessage = "Perfect";
      className = "perfect";
    }
    document.querySelector("span.fMsg").innerHTML = resultMessage;
    document.querySelector("span.fMsg").classList.add(className);
    document.querySelector("span.totR").innerHTML = rightAnswersCount;
    document.querySelector("span.totQ").innerHTML = question_count;
    resultsMessage.style = "display:block";
  }
}

/*---END--- showing result*/

/*---START--- countdown*/

function countdown(duration, question_count) {
  if (currentIndex < question_count) {
    let minutes, seconds;
    countInterval = setInterval(() => {
      minutes = parseInt(duration / 60);
      seconds = parseInt(duration % 60);

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      timeCounter.innerHTML = `${minutes}:${seconds}`;
      duration--;
      if (duration < 0) {
        clearInterval(countInterval);

        // after time is end will be automatic click on submit buttom
        submitButton.click();
      }
    }, 1000);
  }
}
/*---END--- countdown*/

/*---START--- generating random array*/
function getRanArr(length, stop) {
  let arr = [];
  do {
    let ran = Math.floor(Math.random() * length);
    arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
  } while (arr.length < stop);

  return arr;
}

/*---END--- generating random array*/
