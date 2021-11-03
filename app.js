// Task 1:
// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი ანუ რომ დავკლიკავ ღილაკზე გაქრეს
const myButton = document.querySelector('#button');

function handleButtonClick (event) {
    console.log(event);
    const myButton = document.querySelector('#button');
    myButton.remove();
}

myButton.addEventListener('click', handleButtonClick);


// Task 2:
// ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ: https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg სურათის ლინკს და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით).

const myImg = document.createElement('img').src = "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg";

document.body.appendChild(myImg);