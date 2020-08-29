document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.grid')[0];
  [...Array(81)].forEach((_, div) => {
    div = document.createElement('div');
    container.appendChild(div);
  })


})