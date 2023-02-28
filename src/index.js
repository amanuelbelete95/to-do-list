// import _ from 'lodash';
// eslint-disable-line
import './style.css';

const list = document.getElementById('list');
const position = 'beforeend';

const toDoList = [
  {
    index: 0,
    description: 'Reading books',
    completed: true,
  },
  {
    index: 1,
    description: 'Going for a walk',
    completed: true,
  },
  {
    index: 2,
    description: 'Meet families',
    completed: true,
  },
  {
    index: 3,
    description: 'play football',
    completed: true,
  },
];

const todo = () => {
  for (let i = 0; i < toDoList.length; i += 1) {
    const item = `<li class="item">
              <div class="left">
              <i class="fa-regular fa-square"></i>
              <p class="text">${toDoList[i].description}</p>
              </div>
              <i class="fa-solid fa-trash" class="complete"></i>
            </li>`;
    list.insertAdjacentHTML(position, item);
  }
};

window.document.addEventListener('DOMContentLoaded', todo);

// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());