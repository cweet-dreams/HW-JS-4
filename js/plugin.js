// Функция. Задачи

// 1
function multiply() {

    let num = 1;
    let arg = arguments;

    if (arg.length === 0) {
        num = 0;
    }

    for (i = 0; i < arg.length; i++) {
        if (typeof arg[i] !== 'number') return new Error('argument is not a number');
        num *= arg[i];
    }
    return num;
}

let mult = multiply(3, 5);

console.log(mult);

//3
function reverse(x) {
    if (!x) return new Error('text empty');
    if (typeof(x) !== 'string') return new Error('is not a string');


    let reverseString = '';

    for (let i = x.length - 1; i >= 0; i--) {
        reverseString += x[i];
    }
    return reverseString;
}

console.log(reverse('test'));

//4
function getCodeStringFromText(str) {
    if (!str) return new Error('text empty');
    if (typeof(str) !== 'string') return new Error('is not a string');

    UniCodeString = ' ';

    for (let i = 0; i < str.length; i++) {
        UniCodeString += str.charCodeAt(i) + ' ';
    }
    return UniCodeString;
}

console.log(getCodeStringFromText('hello'));

//task
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

function editTask(id, text) {
    if (!id) return new Error ('id required');
    if (isNaN(id)) return new Error('id must be a number');
    id = Number(id);
    if (!text.length) return new Error('text empty');
    if (typeof text !== 'string') return new Error('text is not a string');

    let todo = {id, text};

    for (let i = 0; i < todos.length; i++) {
        if ( id === todos[i].id) {
            todos[i].text = text;
            todo = todos[i];
        }
    }
    return todo;

}

let num = editTask('1', 'Learn English');

console.log(num);


