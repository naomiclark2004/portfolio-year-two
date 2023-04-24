let box = document.querySelector(".box");
// console.log(box);
const url = "questions.json";
let questions = [];
let localData = localStorage.getItem("myQuestions");
// console.log(localData);
questions = JSON.parse(localStorage.getItem("myQuestions"));

jsloader();

function jsloader() {
  fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      questions = data;
      localStorage.setItem("myQuestions", JSON.stringify(questions));
      maker();
      savetoStorage();
    });
}

var choice = [];
for (var i = 0; i < questions.length; i++) {
  choice[i] = [];
  var j = null;
  choice[i].push(j);
}

localStorage.setItem("userchoice", JSON.stringify(choice));

var answer = [];

for (var x = 0; x < questions.length; x++) {
  answer[x] = [];
  var y = null;
  answer[x].push(y);
}


// for.each (answer A, B, C, D etc.)
function maker() {
  box.innerHTML = " ";
  var header = document.createElement("h1");
  header.innerHTML = "HTML, CSS, JS </br> Practice Test";
  header.style.textAlign = "center";
  box.append(header);

  questions.forEach((el, index) => {
    makeQs(el, index);
  });
}

var arrIndex = [];

function makeQs(item, index) {
  content = document.createElement("div");
  content.className = "content";
  box.append(content);

  var head = document.createElement("div");
  head.innerHTML = "Question #" + item.number;
  content.append(head);
  head.className = "head";
  // not all of the questions have an instruction, image, and/or question

  // if the item has a instruction display if not dont display anything
  if (typeof item.instruction !== "undefined") {
    var instruct = document.createElement("h3");
    instruct.id = "instruction";
    instruct.innerHTML = item.instruction;
    instruct.style.marginTop = "30px";
    content.append(instruct);
  }
  // if the item has a image display if not dont display anything
  if (typeof item.fragment !== "undefined") {
    var frag = document.createElement("h3");
    frag.className = "fragment";
    var text = document.createElement("p");
    frag.append(text);
    var t = item.fragment.join('<br><br>');
    text.innerHTML = t;
    content.append(frag);
  }

  // if the item has a question display if not dont display anything
  if (typeof item.question !== "undefined") {
    var question = document.createElement("h3");
    question.id = "question";
    question.innerHTML = item.question;
    question.style.marginTop = "25px";
    content.append(question);
  }

  //options
  if (typeof item.options !== "undefined") {
    const options = document.createElement("div");
    options.className = "options";
    content.append(options);
    var arr = [];
    arr = item.options;
    if (item.type == "radio") {
      for (j = 0; j < item.options.length; j++) {
        var option = document.createElement("p");
        var input = document.createElement("input");
        input.type = "radio";
        input.name = "question" + (index + 1);
        option.className = "option";
        option.append(input);
        options.append(option);
        option.append(arr[j]);
        check(item, index);
      }
    } else if (item.type == "checkbox") {
      for (j = 0; j < item.options.length; j++) {
        var option = document.createElement("p");
        var input = document.createElement("input");
        input.type = "checkbox";
        input.name = "question" + (index + 1);
        option.className = "option";
        option.append(input);
        options.append(option);
        option.append(arr[j]);
        check2(item, index);
      }
    }
  }
  if (typeof item.table !== "undefined") {
    var table = document.createElement('table');
    table.className = "table";
    table.id = "question" + (index + 1);

    table.innerHTML = JSON.parse(JSON.stringify(item.table));
    content.append(table);
    var tables = document.querySelectorAll('table');
    // console.log(tables);
    for (i = 0; i < tables.length; i++) {
      var tbody = table.children;
      // console.log(tbody);
      var trs = tbody[0].children;
      // console.log(trs);
      for (j = 0; j < trs.length; j++) {
        var tds = trs[j].children;
        // console.log(tds);

        for (x = 0; x < tds.length; x++) {
          var td = tds[x];
          // console.log(td.className);
          if (td.className === "drop") {
            td.id = "question" + (index + 1);
          }
        }


      }
    }

    setTimeout(function () {
      checkDragDrop(item, index);
    }, 100)
  }

  var display = document.createElement("div");
  display.className = "display";
  display.innerHTML = "<p><b> Correct Anwser: " + item.display + "</b></p>";
  content.append(display);
}

function check(item, index) {
  subButton = document.getElementById("submitButton");
  subButton.addEventListener("click", () => {
    var el = document.querySelectorAll('input[type="radio"]');
    if ((el.name = "question" + (index + 1))) {
      var elements = document.querySelectorAll(
        'input[name$="question' + (index + 1) + '"]'
      );
      var a = [];
      for (let j = 0; j < elements.length; j++) {
        if (elements[j].checked == true) {
          var pick = j;
          a.push(pick);
          choice[index] = a;
          localStorage.setItem("userchoice", JSON.stringify(choice));
        }
      }
    }
  });

  var answers = questions[index].correct;
  answer[index] = answers;

}

function check2(item, index) {
  subButton = document.getElementById("submitButton");
  subButton.addEventListener("click", () => {
    var cb = document.querySelectorAll("input[type=checkbox]");
    if ((cb.name = "question" + (index + 1))) {
      var checkboxes = document.querySelectorAll(
        'input[name$="question' + (index + 1) + '"]'
      );
      var checked = [];
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) {
          var pick = i;
          checked.push(pick);
          choice[index] = checked;
          localStorage.setItem("userchoice", JSON.stringify(choice));
        }
      }
    }

  });

  var answers = questions[index].correct;
  answer[index] = answers;

}

function checkDragDrop(item, index) {
  var answers = item.correct;
  answer[index] = answers;


  // drag and drop function
  function dragAndDrop(dragTarget, dropTarget) {
    // Enable draggable events and make draggable element revert: true
    $(dragTarget).draggable({ revert: true });

    // Enable the droppable events...
    $(dropTarget).droppable({
      drop: function (event, ui) {
        $(this).append(ui.draggable);

        // when card (draggable) is dropped
        ui.draggable.css({
          position: "static",
          top: "auto",
          left: "auto",
          width: "auto"
        });

        // The draggable element has to have position: relative...
        ui.draggable.css({
          position: "relative"
        });
      }
    });
  }

  // drag and drop for direction 
  // so user an move card from its original position to droppable and back if needed
  dragAndDrop(".card", ".drop");
  dragAndDrop(".card", ".op");

  // console.log(answer[index]);
  subButton = document.getElementById("submitButton");
  subButton.addEventListener("click", () => {
    // console.log(index);
    var drops = document.querySelectorAll(".drop");
    // console.log(drops);
    if ((drops.id = "question" + (index + 1))) {
      var dropboxs = document.querySelectorAll("td#question" + (index + 1));
      // console.log(dropboxs);


      var checked = [];
      for (let i = 0; i < dropboxs.length; i++) {
        var c = dropboxs[i].textContent;
        if (c == "") {
          var d = dropboxs[i];
          d.style.backgroundColor = "#e74c3c";
          var pick = null;
          // console.log(pick);
          checked.push(pick);
          choice[index] = checked;
        } else {
          console.log(c);
          var pick = c;
          // console.log(pick);
          checked.push(pick);
          choice[index] = checked;

          if (c == answer[index][i]) {
            var d = dropboxs[i];
            d.style.backgroundColor = "#2ecc71";
          } else {
            var d = dropboxs[i];
            d.style.backgroundColor = "#e74c3c";
          }
        }
      }
    }
  });
};

function savetoStorage() {
  localStorage.setItem("myQuestions", JSON.stringify(questions));
}

subButton = document.getElementById("submitButton");
subButton.addEventListener("click", () => {
  topFunction();

  setTimeout(function () {
    var done = [];
    for (i = 0; i < questions.length; i++) {
      var al = answer[i].length;

      // for questions with one correct answer (radio)
      if (al == 1 && answer[i][0] != null) {
        var d = [];
        var pick = choice[i][0] === answer[i][0];
        d.push(pick);
        done[i] = d;

        if (pick == true) {
          // if correct
          var display = document.getElementsByClassName("display")[i];
          display.style.visibility = "visible";
          display.style.border = "2px solid rgb(46, 204, 113)";
        } else {
          // if not
          var display = document.getElementsByClassName("display")[i];
          display.style.visibility = "visible";
          display.style.border = "2px solid rgb(231, 76, 60)";
        }
      }
      // for questions with 2 correct anwsers (checkbox)
      else if (al == 2) {
        var d = [];
        for (j = 0; j < 2; j++) {
          pick = choice[i][j] === answer[i][j];
          d.push(pick);
          done[i] = d;

          //if correct
          if (d[0] == true && d[1] == true) {
            var display = document.getElementsByClassName("display")[i];
            display.style.visibility = "visible";
            display.style.border = "2px solid rgb(46, 204, 113)";
          } else {
            //if not
            var display = document.getElementsByClassName("display")[i];
            display.style.visibility = "visible";
            display.style.border = "2px solid rgb(231, 76, 60)";
          }
        }
      }
      // for questions with 3 correct anwsers (checkbox)
      else if (al == 3) {
        var d = [];
        for (j = 0; j < 3; j++) {
          pick = choice[i][j] === answer[i][j];
          d.push(pick);
          done[i] = d;
          //if correct
          if (d[0] == true && d[1] == true && d[2] == true) {
            var display = document.getElementsByClassName("display")[i];
            display.style.visibility = "visible";
            display.style.border = "2px solid rgb(46, 204, 113)";
          } else {
            //if not
            var display = document.getElementsByClassName("display")[i];
            display.style.visibility = "visible";
            display.style.border = "2px solid rgb(231, 76, 60)";
          }
        }
        // for questions with 4 correct anwsers (drag and drop)
      } else if (al == 4) {
        var d = [];
        for (j = 0; j < 4; j++) {
          pick = choice[i][j] === answer[i][j];
          d.push(pick);
          done[i] = d;
        }
        // for questions with 5 correct anwsers (drag and drop)
      } else if (al == 5) {
        var d = [];
        for (j = 0; j < 5; j++) {
          pick = choice[i][j] === answer[i][j];
          d.push(pick);
          done[i] = d;
        }
      }
    }
    console.log(choice);
    console.log(answer);
    console.log(done);

    // score
    var score = 0;
    // 92
    var total = questions.length;

    //for every question if question is correct (true) add to score if not dont
    for (i = 0; i < questions.length; i++) {
      var arr = done[i];
      let result = arr.every(Boolean);
      if (result == true) {
        score++;
        console.log(score);
      }
    }

    console.log(score);
    var percentage = Math.round((score / total) * 100) + "%";
    console.log(percentage);


    var s = document.getElementById("score");
    s.style.opacity="1";
    s.style.margin= "5% auto 50px";
    s.style.width="50%";
    s.innerHTML = "<h1> Grade: " + score + "/" + total + "<br>" + percentage + "</h1>";
  }, 100);

});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// disable inspect so user cannot see answers in display div
// document.addEventListener('contextmenu', event => event.preventDefault());


