// Restart Game button
//// Use ID b because that's the ID we gave the button
var restart = document.querySelector("#b")

// Grabs all the squares
//// td is for all squares
var squares = document.querySelectorAll('td')

// Clear all the squares
//// Function to loop through each square and clear the content
function clearBoard(){
  for (var i = 0; i < squares.length; i++){
    squares[i].textContent = '';
  }
}

restart.addEventListener('click',clearBoard)

// Check the square marker

//// You could have copied this 8 times to avoid using the this keyword
// var cellOne = document.querySelector('#one')
// cellOne.addEventListener('click',function (){
//   if(cellOne.textContent === ''){
//     cellOne.textContent = 'X';
//   }else if (cellOne.textContent === 'X') {
//     cellOne.textContent = 'O'
//   }else {
//     cellOne.textContent = '';
//   }
// })

//// Better solution: follow the programming guideline: Don't repeat yourself
function changeMarker(){
  if(this.textContent === ''){
    this.textContent = 'X';
  }else if (this.textContent === 'X'){
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
}

for (var i = 0; i < squares.length; i++){
  squares[i].addEventListener('click',changeMarker)
}

// For loop to add event listeners to all squares
