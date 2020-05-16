document.addEventListener('DOMContentLoaded', () => {
function createDivs() {
  let container = document.getElementsByClassName("grid")[0];
  for (let i = 0; i < 100; i++) {
    let xtraDiv = document.createElement('div');
    container.appendChild(xtraDiv);
  }
}

createDivs();
});