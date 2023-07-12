const container = document.querySelector(".container");
for (let i = 0; i < 16 * 16; i++) {
  const colDiv = document.createElement("div");
  colDiv.classList.add("highlight");
  colDiv.style.backgroundColor = "white";
  colDiv.style.border = "solid 1px black";
  colDiv.style.flex = "1 calc(100%/16)";
  colDiv.addEventListener(
    "mouseenter",
    function () {
      colDiv.style.backgroundColor = "black";
    },
    true
  );

  container.appendChild(colDiv);
}



function generateGrid(num) {
  if (num < 100) {
    for (let i = 0; i < num*num; i++) {
      const colDiv = document.createElement("div");
      colDiv.classList.add("highlight");
      colDiv.style.backgroundColor = "white";
      colDiv.style.border = "solid 1px black";
      colDiv.style.flex = "1 calc(100%/16)";
      colDiv.addEventListener(
        "mouseenter",
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


// func userGrid () {
//   let playGrid = prompt('Enter a number between 1-100');
//   let num = parseInt(playGrid);
// }