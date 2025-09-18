const myForm = document.querySelector("#myForm")
const isRequired = (val) =>{
    if(val.length) return true
    return false
}
myForm.addEventListener("submit", function(e){
    e.preventDefault()
    // console.log(myForm.userName.value)
    let user = {
        id:Date.now(),
        name: myForm.userName.value,
        phone: myForm.phone.value
    }
    if(!isRequired(user.name)){
        return console.log("validation error")
    }
    console.log(user)
    myForm.reset()
})
// let t = [1,2,3,4]
// let data = [
//     {name:"a", age:1},
//     {name:"b", age:2}
// ]
// localStorage.setItem("test", JSON.stringify(data))
// let x = JSON.parse(localStorage.getItem("test"))
// console.log(typeof x);

// localStorage.removeItem("test")

