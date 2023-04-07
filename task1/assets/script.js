let add = document.querySelector(".add")
add.addEventListener("click",function(){
    getAllPosts();
    
function getAllPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            let str = "";
            posts.forEach(element => {
                str += `
              <tr data-id="${element.id}">
                <td>${element.userId}</td>
                <td>${element.title}</td>
                <td>${element.body}</td>
              </tr>
            `
            });
            document.querySelector("tbody").innerHTML = str;
        })
}
setTimeout(() => {
    let elems = document.querySelectorAll("tbody tr");
    elems.forEach(element => {
        element.addEventListener("click", function () {
            let postId = parseInt(this.getAttribute("data-id"));
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                .then(response => response.json())
                .then(post => {
                    let modal = document.querySelector(".modal");
                    modal.querySelector("p").innerHTML = post.body;
                    modal.querySelector("h1").innerHTML = post.title;

                    modal.style.display = "block";
                })
        })
    });
    let closeBtn = document.querySelector(".close")
    closeBtn.addEventListener("click", function () {
        let modal = document.querySelector(".modal").style.display = "none"
    })
}, 1000);
})