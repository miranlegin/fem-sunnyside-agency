// document.addEventListener('DOMContentLoaded', function () {
//   const body = document.querySelector('body');
//   body.dataset.menu = 'closed';
// });

const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  let state = body.dataset.menu;

  if (state !== undefined) {
    delete body.dataset.menu;
  } else {
    body.dataset.menu = 'open';
  }
});
