let lots = document.querySelector("#lots");
let form = document.querySelector("form");
let error = document.querySelector("#error");

// SHUFFLE FUNCTION

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// END OF SHUFFLE

// FUNCTION SELECT

function lotSelection(e) {
  let target = e.target.classList.value;
  if (target == "lots-item") {
    e.target.classList.add("selected");
    e.target.innerText = `You've Select ${e.target.id}`;
    let unSelectedLots = document.querySelectorAll(".lots-item:not(.selected)");

    unSelectedLots.forEach((element) => {
      element.style.display = "none";
    });
  }
}

form.onsubmit = (e) => {
  e.preventDefault();
  let nums = [];
  let show = (document.querySelector(".show").innerHTML = "");
  // CHECK IF FIELD IS EMPTY

  if (lots.value != "" && lots.value > 0) {
    let end = Number(lots.value);

    // GENERATE THE ARRAY

    while (end > 0) {
      nums.push(end);
      end--;
    }

    // SHUFFLE ARRAY WITH SHUFFLE FUNCTION AND DISPLAY ARRAY

    let shufflelots = shuffle(nums);

    shufflelots.forEach((element) => {
      box = `<button class="lots-item" id='${element}'>X</button>`;

      document.getElementById("show").innerHTML += box;
      // console.log(box);
    });
    error.style.visibility = "hidden";

    // DETECT LOTS-ITEM CLICK
    document.getElementById("show").onclick = function (e) {
      // FUNCTION
      lotSelection(e);
    };

    let lotsItem = document.querySelectorAll(".lots-item");
  } else {
    error.style.visibility = "visible";
  }
};
