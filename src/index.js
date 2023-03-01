const list = document.getElementById('list');
const input = document.getElementById('input');
const addBtn = document.querySelector('.add');

let LIST;
let id;

const check = 'fa-square-check';
const uncheck = 'fa-square';
const line = 'line-through';
// local storage

function addToDo(todo, id, done, trash) {
  if (trash) { return; }
  const Done = done ? check : uncheck;
  const Line = done ? line : '';
  const position = 'beforeend';

  const item = `<li class="item">
              <div class="left">
              <i class="fa-regular ${Done}" job="complete" id=${id}></i>
              <p class="text ${Line}">${todo}</p>
              </div>
              <i class="fa-solid fa-trash" job="delete" id=${id}></i>
            </li>`;

  list.insertAdjacentHTML(position, item);
}

const loadList = (array) => {
  array.forEach((item) => {
    addToDo(item.todo, item.id, item.done, item.trash);
  });
};
const myData = localStorage.getItem('TODO');
if (myData) {
  LIST = JSON.parse(myData);
  id = LIST.length;
  loadList(LIST);
} else {
  LIST = [];
  id = 0;
}

addBtn.addEventListener('click', () => {
  const todo = input.value;

  if (todo) {
    addToDo(todo, id, false, false);
    LIST.push({
      todo,
      id,
      done: false,
      trash: false,
    });

    id += 1;
    localStorage.setItem('TODO', JSON.stringify(LIST));
  }

  input.value = '';
});

function completeToDo(element) {
  element.classList.toggle(check);
  element.classList.toggle(uncheck);
  element.parentNode.querySelector('.text').classList.toggle(line);
  LIST[element.id].done = !LIST[element.id].done;
}

function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
}

list.addEventListener('click', (event) => {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  if (elementJob === 'complete') {
    completeToDo(element);
  } else if (elementJob === 'delete') {
    removeToDo(element);
  }
  localStorage.setItem('TODO', JSON.stringify(LIST));
});

document.addEventListener('DOMContentLoaded', loadList);