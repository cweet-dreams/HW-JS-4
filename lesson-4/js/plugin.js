// functions
// function declaration
let a = 20;
function calc(a, b) {
  return a + b;
}

let res = calc(5, 10) + 50;

// console.log('global var', a);
// console.log(res);

function args() {
  console.log(arguments);
}

// args(2, 4, 'asd', {name: 'Denis'}, [1,2,3], true);

function mult(x = 1, y = 1) {
  if (typeof x !== 'number' || typeof y !== 'number') return new Error('x, y not a number');
  return x * y;
}
//
// let multRes = mult(2);
//
// console.log(multRes);

function foo(a, b, ...args) {
  console.log(a, b, args);
}

// foo(1, 2, 3, 'asd');

let user1 = {name: 'Denis', age: 29};
let user2 = {name: 'Denis', age: 28};

userUpdate(user1, user2);

function userUpdate({name}, {age}) {
  console.log(name, age);
}



// Function expression
const foo2 = function () {
  console.log('function expression');
};

// sif
(function (a){
  console.log('sif', a);
}(10));

// arrow
let sum = (a, b) => {
  return a + b;
};

sum = (a, b) => a + b;
sum = x => x + 10;
sum = () => console.log('some info');

let objFunc = (userName) => {
  return {
    name: userName
  }
};

objFunc = userName => ({name: userName});


// Todo
// Add, Edit, Delete
let todos = [
  {
    text: 'Learn JavaScript',
    id: 0
  },
  {
    text: 'Learn Angular',
    id: 1
  }
];

function addTask(text) {
  if (typeof text !== 'string') return new Error('text is not a string');
  if (!text.length) return new Error('text empty');

  // Create new task obj
  const newTask = {
    id: todos.length,
    text
  };

  // Add new task
  todos.push(newTask); // push, pop, unshift, shift

  return todos;
}

function deleteTask(id) {
  if (id !== 0 && !id) return new Error('id required');
  if (isNaN(id)) return new Error('id must be a number');
  id = Number(id);

  let todo;

  for (let i = 0; i < todos.length; i++ ) {
    if (todos[i].id === id) {
      todo = todos[i];
      todos.splice(i, 1);
      break;
    }
  }

  return todo || 'task not found';
}




























