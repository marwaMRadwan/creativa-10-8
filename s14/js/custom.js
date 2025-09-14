// const p = document.getElementsByTagName("p")
// console.log(p)

// const c = document.getElementsByClassName("alert")
// console.log(c)
// const id = document.getElementById("test")
// console.log(id);
const log = console.log
// let data = document.querySelector("p")
// console.log(data);
// console.log(data.innerText)
// console.log(data.textContent);
// console.log(data.innerHTML);
// data.innerHTML = "<h1>test</h1>"
// data.innerText = "test"
// data.textContent = "content"
// console.log(data.className)
// log(data.classList)
// const c = data.className
// data.className = "alert alert-primary alert-success"
// data.classList.remove("alert-success")
// // data.classList.add("bg-danger")
// data.classList.toggle("alert")
// log(data.id)
// log( data.getAttribute("data-target") )
// data.setAttribute("data-target", "t22")


// const btn = document.querySelector("#show-hide")
// const p = document.querySelector("p")

// btn.addEventListener("click", function(e){
//     log(e.target)
//     log(btn)
//     log(this)
//     p.classList.toggle("d-none")
//     btn.innerText == "hide" ? btn.innerText = "show" : btn.innerText = "hide" 
// })


// const btns = document.querySelectorAll("#btns div")
// const content = document.querySelectorAll("#content p")

// btns.forEach((b, i) => {
//     if (i == 0) {
//         b.classList.add("bg-primary")
//     }
//     else {
//         b.classList.add("bg-success")
//         content[i].classList.add("d-none")
//     }

//     b.addEventListener("click", function (e) {
//         let active = i
//         btns.forEach(bb => bb.classList.add("bg-success"))
//         content.forEach(cc => cc.classList.add("d-none"))
//         btns[active].classList.add("bg-primary")
//         btns[active].classList.remove("bg-success")
//         content[active].classList.remove("d-none")
//     })
// })



// const btns = document.querySelectorAll("#btns div")
// const content = document.querySelectorAll("#content p")

// btns.forEach((btn, i) => {
//     btn.addEventListener("click", function (e) {
//         btns.forEach((b, ind) => {
//             b.classList.add("bg-primary")
//             b.classList.remove("bg-success")
//             content[ind].classList.add("d-none")
//         })
//         this.classList.add("bg-success")
//         content[i].classList.remove("d-none")
//     })
// })


const imgs = document.querySelectorAll("#imgs img")
const display = document.querySelector("#display")

imgs.forEach(img => {
    img.addEventListener("click", function (e) {
        display.innerHTML = "<img src='" + img.src + "' class='w-100'>";
    })
})