document.addEventListener('DOMContentLoaded', () => {
function createDivs() {
  let container = document.getElementsByClassName("grid")[0];
  for (let i = 0; i < 100; i++) {
    let xtraDiv = document.createElement('div');
    container.appendChild(xtraDiv);
  }
}

const square = document.querySelectorAll('.grid div');
const scoreDisplay = document.querySelector('span');
const startBtn = document.querySelector('.start');

const width = 10;
let currentIndex = 0; //first div in our grid
let appleIndex = 0 //first div in our grid
let currentSnake = [2, 1, 0] //div in our grid being 2 (Head), 0 being the end (tail), body is all 1s
let direction = 1;
let score = 0;
let speed = 0.9;
let intervalTime = 0;
let interval = 0;

createDivs();
});