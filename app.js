const container = document.querySelector(".container");
let clicked = false;

for (let i = 0; i < 16 * 16; i++) {
  const colDiv = document.createElement("div");
  colDiv.classList.add("highlight");
  colDiv.style.backgroundColor = "white";
  colDiv.style.border = "solid 1px black";
  colDiv.style.flex = "1 calc(100%/16)";
  colDiv.addEventListener(
    "mouseover",
    function () {
      clicked = true;
      colDiv.style.backgroundColor = "black";
    },
    true
  );

  container.appendChild(colDiv);
}



  const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }

  }



function generateGrid() {
  let playGrid = prompt("Enter a number between 1-100");
  let num = parseInt(playGrid);

  if (num < 100) {
    for (let i = 0; i < num * num; i++) {
      const colDiv = document.createElement("div");
      colDiv.style.backgroundColor = "white";
      colDiv.style.border = "solid 1px black";
      colDiv.style.flex = `1 calc(100%/${num})`;
      colDiv.addEventListener(
        "mouseover",
        function () {
          colDiv.style.backgroundColor = "black";
        },
        true
      );

      container.appendChild(colDiv);
    }
  } else {
    return 0;
  }
}

const btnGen = document
  .querySelector(".generate")
  .addEventListener("click", function () {
    clicked = true;
    removeChilds(container);
    generateGrid();
  });

document.querySelector(".clear").addEventListener("click", function () {
  const squares = document.querySelectorAll(".container div");
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});
