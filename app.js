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

const myImg = document.createElement('img')
myImg.src = "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg";

// document.body.appendChild(myImg);  პასუხი დავაკომენტარე ვიზუალში რომ არ შემიშალოს.


// Task 3:
// html შექმენით <div id="user-list"></div> გამოიყენეთ მიმაგრებული სურათი (hiok.png) დიზაინის ასაწყობად, არქივში ( lecture17.zip ) => app.js ში ნახეთ users  მასივი რომელიც შედგება 4 ობიექტისგან
// ეს მასივი გამოიყენეთ და html ში გამოიტანეთ (ჯავასკრიპტით) 4 user card როგორც დიზანშია ნაჩვენები, თვითვეული ქარდი უნდა შეიცავდეს შემდეგ ინგფირმაციას users მასივის ელემენტებიდან     (ობიექტებიდან): 1. ავატარი ჩასვით სურათის ადგილას. 2. "John Doe" ს ადგილას ჩასვით first_name და last_name.

const users = [
    {
      first_name: "John",
      last_name: "Doe",
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
      email: "John.Doe@gmail.com"
    },
    {
      first_name: "John",
      last_name: "Doe",
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
      email: "John.Doe@gmail.com"
    },
    {
      first_name: "John",
      last_name: "Doe",
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
      email: "John.Doe@gmail.com"
    },
    {
      first_name: "John",
      last_name: "Doe",
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
      email: "John.Doe@gmail.com"
    }
];

function renderUserCards() {
    const userTableContainer = document.querySelector("#user-list");
    const userTableBody = userTableContainer.querySelector("tbody");
    const userItems = users.map(users => {
         return `<tr>
                    <td><img alt ="${users.first_name}" src="${users.avatar}"></td>
                    <td>${users.first_name} ${users.last_name}</td>
                    <td><button class = "removeUser">Delete</button></td>
                    <td><button id = "extraInfo">Info</button></td>
                </tr>
    `})
  console.log(userItems);
  userTableBody.innerHTML = userItems.join('');
}

renderUserCards();

const removeBtn = document.querySelectorAll('.removeUser');
removeBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const tr = e.target.parentNode.parentNode;
        tr.remove();
    })
})









// function deleteUser() {
//   const userTableBody = userTableContainer.querySelector("tbody");
//   const deleteUserButton = document.getElementById("#deleteUser");
//   const displaySetting = userTableBody.style.display;
//   if(displaySetting == 'block') {
//     userTableBody.style.display = "none";
//     deleteUserButton.innerHTML = "Show";
//   }else {
//     userTableBody.style.display = "block";
//     deleteUserButton.innerHTML = "Delete";
//   }
// }
// deleteUser();

// const deleteUserButton = document.querySelector("#deleteUser");
// function deleteUserOnClick(event) {
//   if(userItems) {
//     userItems.remove();
//   }
//   console.log(event);
// }

// deleteUserButton.addEventListener('click', deleteUserOnClick);


// const extraInfoButton = document.querySelector("#extraInfo");
// function showEmail(event) {
//   const userEmail = document.createElement('td');
//   const userEmailContent = document.createTextNode("${users.email}");
//   console.log(event);
//   console.log(userEmail);
// }

// extraInfoButton.addEventListener('click', showEmail());
 




////////////////////////////////////////////////////////////////////////////////
// თეიბლის გარეშე:

// function renderUserCards() {
//     const userBlockContainer = document.querySelector("#userList");
//     const userCardContainer = document.querySelector("#userCardContainer");
//     const userItems = users.map(users => {
//         return `<img alt ="${users.first_name}" src="${users.avatar}">
//                 <span>${users.first_name} ${users.last_name}</span>
//                 <button id="deleteUser">Delete</button>
//                 <button id="infoUser">Info</button>   
//     `})
//     const deleteUserButton = document.querySelector("#deleteUser"); 
//     function deleteUserOnClick(event) {
//       if(userCardContainer) {
//         userCardContainer.remove();
//       }
//       console.log(userCardContainer);
//       console.log(event);
//     }
//     deleteUserButton.addEventListener('click', deleteUserOnClick);
//     console.log(userItems);
//     userCardContainer.innerHTML = userItems.join('');
// }

// renderUserCards();