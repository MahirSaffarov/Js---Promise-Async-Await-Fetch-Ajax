"use strict"

let students = [
    {
        name: "Musa",
        surname: "Afandiyev",
        age: 19
    },
    {
        name: "Ramil",
        surname: "Allahverdiyev",
        age: 26
    },
    {
        name: "Rasul",
        surname: "Hesenov",
        age: 15
    },
    {
        name: "Novreste",
        surname: "Aslanzade",
        age: 25
    },
    {
        name: "Gultac",
        surname: "Jafarov",
        age: 18
    }
]

// getStudentsByFilter("r");

// function getStudentsByFilter(str){
//     setTimeout(() => {
//        let result = students.filter(m=>m.name.includes(str));
//        console.log(result);
//     }, 3000);
// }


let elem = document.querySelector("ul");


// function getStudents(){
//     setTimeout(() => {
//         let str = "";
//         students.forEach(element => {
//             str += `<li><b>${element.name}---</b><b>${element.surname}---</b><b>${element.age}</b></li>`
//         });
//     }, 2000);
// }

// function createStudent(student){
//     return new Promise((resolved, rejected) => {
//         setTimeout(() => {
//             students.push(student)
//             let err = true;
//             if(!err){
//                 resolved(students)
//             }
//             else{
//                 rejected("Something is wrong")
//             }
//         }, 3000);
//     })
// }
// createStudent({name: "Anar", surname: "Huseynov", age: 36}, getStudents).then(response =>{
//     console.log(response);
// }).catch(err=>{
//     console.log(err);
// })


// getAllPosts();

// function getAllPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(posts => {
//             let str = "";
//             posts.forEach(element => {
//                 str += `
//               <tr data-id="${element.id}">
//                 <td>${element.userId}</td>
//                 <td>${element.title}</td>
//                 <td>${element.body}</td>
//               </tr>
//             `
//             });
//             document.querySelector("tbody").innerHTML = str;
//         })
// }
// setTimeout(() => {
//     let elems = document.querySelectorAll("tbody tr");
//     elems.forEach(element => {
//         element.addEventListener("click", function () {
//             let postId = parseInt(this.getAttribute("data-id"));
//             fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//                 .then(response => response.json())
//                 .then(post => {
//                     let modal = document.querySelector(".modal");
//                     modal.querySelector("p").innerHTML = post.body;
//                     modal.querySelector("h1").innerHTML = post.title;

//                     modal.style.display = "block";
//                 })
//         })
//     });
//     let closeBtn = document.querySelector(".close")
//     closeBtn.addEventListener("click", function () {
//         let modal = document.querySelector(".modal").style.display = "none"
//     })
// }, 1000);


// async function getPosts() {
//     let data = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let response = await data.json();
//     console.log(response);
// }

// getPosts();

$(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts ", success: function (result) {
            console.log(result);
        }
    })
})