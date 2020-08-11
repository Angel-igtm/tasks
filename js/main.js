//Task №1
// for (var i = 0; i < 10; i++){
//     setTimeout(function() {
//         console.log(i);
//     });
// }
// выведет в консоль 10, так как был выполнен цикл , с условием пока i < 10 , условия true и происходит инкремент и до тех пор
// пока условия не будет false. и функция setTimeout() - вызывает ее 1 раз  , так как не указан интервал времени , можно указать чтоб конечный
//результат вышел после 2 секунд как на примере ниже:

//Example task 1
// for (var i = 0; i < 10; i++){
//     setTimeout(function() {
//         console.log(i);
//     }, 2000);
// }

// --- just my work after doing task

// for (var i = 0; i < 10; i++){
//     function sayHi() {
//         console.log('hello');
//         console.log('World');
//     }
//     setTimeout(sayHi, 2000);
// }

//Task №2
let date = new Date();
let arrWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let day = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log(date);
// console.log('Today is : ' + arrWeek[day] )
let result = document.querySelector('.tasks p');
let time = document.querySelector('.tasks');
let p = document.createElement('p');
time.appendChild(p)
// let ampm = hours >= 12 ? 'PM' : 'AM'
p.innerHTML = `Current time is : (${hours} : ${minutes} : ${seconds}) `;
// result.innerHTML = `Today is : ${arrWeek[day]}`
result.innerHTML = `Today is : ${arrWeek[day]}`;
// console.log(``)
// console.log(today)

//2.1
let reversBlock = document.querySelector('.tasks-first p');
let mainDiv = document.querySelector('.tasks-first');
let elemp = document.createElement('p');
mainDiv.appendChild(elemp);
let num = reversBlock.innerHTML = 123456789;
elemp.innerHTML = reverseNum(num);
function reverseNum(e) {
    let arrNum = e.toString().split('').reverse().join('');
    console.log(arrNum);
    return arrNum;
}
reverseNum(num);

//2.2
let factorialBlock = document.querySelector('.tasks-second p');
let n = 5;
factorialBlock.innerHTML = `${n}! = ${factorial(n)}`;
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1)  :  1;
}
console.log(factorial(n));

//2.3
let divp = document.querySelector('.tasks-third p');
let divThird = document.querySelector('.tasks-third');
let secondNum = document.createElement('p');
let largerNum = document.createElement('p');
divThird.appendChild(secondNum);
let resultLargerNum = divThird.appendChild(largerNum);
let firstRandomNum = divp.innerHTML = Math.round(Math.random()*100);
let secondRandomNum = secondNum.innerHTML = Math.round(Math.random()*100);
if(firstRandomNum - secondRandomNum >= 0) {
    resultLargerNum.innerHTML = `Larger num : ${firstRandomNum}`;
}else {
    resultLargerNum.innerHTML = `Larger num : ${secondRandomNum}`;
}
// let numOne = 10;
// let numTwo = 10;
// if(numOne - numTwo > 0 || numOne - numTwo == 0) {
//     console.log(numOne)
// }
// else {
//     console.log(numTwo)
// }

//2.4
let divFourthP = document.querySelector('.tasks-fourth p');
let divFourth = document.querySelector('.tasks-fourth');
let firstStr = document.createElement('p');
let secondStr = document.createElement('p');

divFourthP.innerHTML = `myColor = ['Red', 'Green', 'White', 'Black']`;
let myColor = ['Red', 'Green', 'White', 'Black'];
divFourth.appendChild(firstStr);
divFourth.appendChild(secondStr)
function string(str) {
    firstStr.innerHTML = str.toString();
    secondStr.innerHTML = str.join("+");
}
string(myColor);

//2.5
// let year = Math.round(Math.random()*2020)
// let randomNumMonth = Math.round(Math.random()*12)
// let randomNumDay = Math.round(Math.random()*31)
// let monthName = new Date(year , randomNumMonth, randomNumDay)

let monthName = new Date();
let months = ['January', 'February', 'March', 'April', 'May' , 'June' , 'July', 'August', 'September', 'October', 'November', 'December'];
let divFifth = document.querySelector('.tasks-fifth p');
let monthsName = document.createElement('p');
document.querySelector('.tasks-fifth').appendChild(monthsName);
divFifth.innerHTML = `${monthName.getMonth()} / ${monthName.getDate()} / ${monthName.getFullYear()}`;
monthsName.innerHTML = months[monthName.getMonth()];
//2.6
let creatOneP = document.createElement('p')
let creatTwoP = document.createElement('p')
let newElemOneP = document.querySelector('.tasks-sixth').appendChild(creatOneP);
let newElemTwoP = document.querySelector('.tasks-sixth').appendChild(creatTwoP);

function isUpperCase(str) {
    let regexp = /^[A-Z]/;
    if (regexp.test(str))
    {
        return (newElemOneP.innerHTML = "String's first character is uppercase");
    } 
    else {
        return (newElemTwoP.innerHTML = "String's first character is not uppercase");
    }
}
// isUpperCase('Abcd');
// isUpperCase('abAcd');
document.querySelector('.tasks-sixth span').innerHTML = `Abcd - ${isUpperCase('Abcd')}`;
document.querySelector('.tasks-sixth p').innerHTML = `abAcd - ${isUpperCase('abAcd')}`;
// isUpperCase('Abcd');
// здесь не понял откуда снизу лишний текст 

//2.7
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(75,75,50,0, Math.PI*2); // Внешняя окружность
ctx.fill();
ctx.strokeStyle = 'yellow';
ctx.stroke();
ctx.beginPath();
// ctx.strokeStyle = 'black';  
// ctx.moveTo(57, 100)
// ctx.arc(77, 100,20,0, Math.PI,true); //first Smile
ctx.moveTo(110,75);
ctx.strokeStyle = 'black';  
ctx.arc(75, 75, 35, 0, Math.PI, false) //second type smile
ctx.lineWidth = '1'
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.moveTo(65, 60);
ctx.arc(60,60, 5, 0, Math.PI * 2 );
ctx.moveTo(100, 60);
ctx.arc(95, 60, 5, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();
//4.1
let a = document.querySelector('.task__four #string-1')
let b = document.querySelector('.task__four #string-2')
let c = document.querySelector('.task__four #string-3')
let d = document.querySelector('.task__four #string-4')
let e = document.querySelector('.task__four #string-5')
let f = document.querySelector('.task__four #string-6')
a.innerHTML = 'В недрах тундры, выдры в гетрах'
b.innerHTML = 'Тырят в вёдра ядра кедров!'
c.innerHTML = 'Выдрав с выдры в тундре гетры'
d.innerHTML = 'Тырят в вёдра ядра кедров!'
e.innerHTML = 'Вытру гетрой выдре морду '
f.innerHTML = 'Ядра в вёдра, выдру в тундру!'

//2
for (let i = 0; i<=2; i++) {
    var elements  = document.querySelectorAll('.element')
    elements[i].style.color = 'red'
}
for (let j = 3; j<=5; j++) {
    elements[j].style.color = 'green'
}
//3
let todoList = document.querySelector('#todo-list')
for(let i = 0; i<=4; i++) {
    var liElem = document.createElement('li')
    liElem.className = 'task'
    todoList.appendChild(liElem)
}
var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
for (let j =0; j<= 4; j++) {
    var li = document.body.querySelectorAll('#todo-list .task')
    li[j].innerHTML = tasks[j]
}
//4
// var pAddHr = document.querySelectorAll('article')
// console.log(pAddHr)
// var creatHrElem = document.createElement('hr')

for(var ptag of document.querySelectorAll('article p')){
    // console.log(ptag)
    var newhr = document.createElement('hr')
    ptag.insertAdjacentElement('afterend', newhr)
}
// pAddHr.insertAdjacentElement('afterend', creatHrElem)
// var ptag = document.getElementById('idName');

// var newhr = document.createElement('hr');
// ptag.insertAdjacentElement('afterend', newhr);

//5
let cola = document.querySelectorAll('#cart-items .item')
cola[1].remove()

//remove
const myList = document.getElementById('cart-items')
const lastListItem = myList.children[3]

const newListItem = document.createElement('div')
newListItem.textContent = 'Canned Fish '

myList.replaceChild(newListItem, lastListItem)

const myListTwo = document.querySelectorAll('.qty')
let newListelem = document.createElement('span')
console.log(newListelem)
newListelem.innerHTML = 4
newListItem.appendChild(newListelem)
console.log(myListTwo)
//6
