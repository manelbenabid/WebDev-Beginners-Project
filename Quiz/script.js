const question = document.getElementById('question');
const options0 = document.getElementById('options0');
const options1 = document.getElementById('options1');
const options2 = document.getElementById('options2');
var answer = document.getElementById('answer');
const submitBtn = document.getElementById('submitBtn');
const scoreText = document.getElementById('score');




scoreText.innerHTML = 0;
(function () {
  function Question(question, options, correct) {
    this.question = question;
    this.options = options;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function () {
    question.innerHTML = this.question;

    for (var i = 0; i < this.options.length; i++) {
      document.getElementById(`options${i}`).innerHTML = i + ': ' + this.options[i];
    }
  }

  Question.prototype.checkAnswer = function (ans, callBack) {
    var correct = this.correct;
    submitBtn.addEventListener('click', function () {
      var answerInt = parseInt(answer.value);
      if (answerInt === correct) {
        submitBtn.style.background = 'green';
        var sc = callBack(true);
        console.log('right')
      } else {
        submitBtn.style.background = 'red';
        sc = callBack(false);
        console.log('wrong')
      }
      scoreText.innerHTML = sc;
      nextQuestion();
    })

  }





  var q1 = new Question('When was Facebook founded?', ['2001', '2004', '2006'], 1);
  var q2 = new Question('Which is the hormone of happiness?', ['oxytocen', 'estrogen', 'serotonin'], 2);
  var q3 = new Question('Who studied unconsciousness?', ['Sigmund Freud', 'Lightner Witmer', 'B.F Skinner'], 0);
  var q4 = new Question('Iphone\'s company?', ['Samsung', 'Apple', 'Nokia'], 1);
  var q5 = new Question('How many seconds in an hour?', ['60', '600', '3600'], 2);
  var q6 = new Question('Is 0 a real or imaginary number?', ['real', 'imaginary', 'no correct answer'], 2);


  var questions = [q1, q2, q3, q4, q5, q6];


  function score() {
    var sc = 0;
    return function (correct) {
      if (correct) {
        sc ++;
        console.log('correct');
      }
      else {
        console.log('false')
      } return sc;
    } }

    var keepScore = score();






    function nextQuestion() {
      var randNum = Math.floor(Math.random() * questions.length);
      questions[randNum].displayQuestion();
      questions[randNum].checkAnswer(parseInt(answer), keepScore);
      //submitBtn.style.background = '#51e2f5';


      var answer = document.getElementById('answer');


    }


    nextQuestion();
  } )();



