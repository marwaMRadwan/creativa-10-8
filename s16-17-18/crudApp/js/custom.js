// read from storage
const readFromLocalStorage = (keyName="data") =>{
    let data = [];
    try{
        data = JSON.parse(localStorage.getItem(keyName))
        if(!Array.isArray(data)) throw new Error("not array")
    }
    catch(e){
        data = []
    }
    return data
}
// write to storage
const writeToStorage = (data, keyName="data") => {
    localStorage.setItem(keyName, JSON.stringify(data))
}
// const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)0&])[A-Za-z\d@$!%*?&]{8,}$/;

// create user
const containsNumeric = (str) => (/\d/).test(str);
const isRequired = (str) => !str.length
const isBetweenNumbers = (min, max, val) => val >= min && val <= max

const addForm = document.querySelector("#add-user")
if(addForm){
    addForm.addEventListener("submit", function(e){
        e.preventDefault()
        let isValid = true
    if(
        isRequired(addForm.name.value) || 
        containsNumeric(addForm.name.value) ||
        !isBetweenNumbers(0,60, addForm.age.value) || 
        isRequired(addForm.age.value) || 
        isRequired(addForm.email.value)
    ){
        isValid=false
    } 
        if(isValid){
            const user = {
                id: Date.now(),
                name: addForm.name.value,
                age: addForm.age.value,
                email:addForm.email.value
            }
            const allUsers = readFromLocalStorage()
            allUsers.push(user)
            writeToStorage(allUsers)
            addForm.reset()
            window.location.href="index.html"
        }    
    })
    
    addForm.name.addEventListener("input", function(e){
        addForm.name.nextElementSibling.className= ""
        addForm.name.nextElementSibling.innerText = ""
        if(isRequired(addForm.name.value) || containsNumeric(addForm.name.value)){
            addForm.name.nextElementSibling.className = "alert alert-danger my-2"
            addForm.name.nextElementSibling.innerText = "invalid name"
        }
        else{
            addForm.name.nextElementSibling.className = "alert alert-success my-2"
            addForm.name.nextElementSibling.innerText = "good data"
        }
    })
}
// get all data
const createMyElement = (parent, newEle, classes, txt, href ) =>{
    let ele = document.createElement(newEle)
    parent.appendChild(ele)
    if(href) ele.href = href
    if(classes) ele.className=classes
    if(txt) ele.innerText = txt
    return ele
}
const drawData = (allUsers) =>{
    dataWrap.innerHTML=""
        allUsers.forEach((user,i)=>{
        let tr = createMyElement(dataWrap, "tr") 
        createMyElement(tr, "td", null, i+1)
        createMyElement(tr, "td", null, user.id)
        createMyElement(tr, "td", null, user.name)
        createMyElement(tr, "td", null, user.age)
        createMyElement(tr, "td", null, user.email)
        let td = createMyElement(tr, "td")
        createMyElement(td, "a", "btn btn-primary me-3", "show", "single.html?id="+user.id)
        createMyElement(td, "a", "btn btn-warning me-3", "edit", "edit.html?id="+user.id)
        let delBtn = createMyElement(td, "button" , "btn btn-danger", "delete")
        delBtn.addEventListener("click", function(e){
            delUser(user.id, allUsers)
        })
    })

}
const dataWrap = document.querySelector("#data-wrap")
if(dataWrap){
    const allUsers = readFromLocalStorage()
    drawData(allUsers)
}
// get single user
const singleUser = document.querySelector("#single-user")
if(singleUser){
    // console.log(window.location.search)
    // console.log(new URLSearchParams(window.location.search))
    const p = new URLSearchParams(window.location.search)
    // console.log(p.get("id"));
    const id = p.get("id")
    const allUsers = readFromLocalStorage()
    const data = allUsers.find(user=> user.id == id)
    console.log(data);
    if(data){
        singleUser.innerHTML=`<div class="col-md-12 mb-3">
                <h3 class="text-center">User <span class="text-primary">${data.name}</span> Data</h3>
            </div>
            <div class="col-md-6 col-12 border-start border-5 border-danger mb-3">
                <h3>User ID: ${data.id}</h3>
            </div>
            <div class="col-md-6 col-12 border-start border-5 border-danger mb-3">
                <h3>User Name: ${data.name}</h3>
            </div>
            <div class="col-md-6 col-12 border-start border-5 border-danger mb-3">
                <h3>User Age: ${data.age}</h3>
            </div>
            <div class="col-md-6 col-12 border-start border-5 border-danger mb-3">
                <h3>User Email: ${data.email}</h3>
            </div>`

    }
    else{
        singleUser.innerHTML = `
        <div class='alert alert-danger'>user not found</div>
        <a href="index.html" class="btn btn-danger">back to home</a>
        `
    }
    
}

// edit user
const editUser = document.querySelector("#edit-user")
if(editUser){
     const p = new URLSearchParams(window.location.search)
    const id = p.get("id")
    const allUsers = readFromLocalStorage()
    const data = allUsers.find(user=> user.id == id)
    editUser.innerHTML=`<div class="mb-3">
                <input class="form-control" name="name" placeholder="enter user name" value="${data.name}">
            </div>
            <div class="mb-3">
                <input class="form-control" name="age" placeholder="enter user age" value="${data.age}">
            </div>
            <div class="mb-3">
                <input class="form-control" name="email" placeholder="enter user email" value="${data.email}">
            </div>
            <div class="mb-3 text-end">
                <button type="submit" class="btn btn-primary">Edit User</button>
            </div>`
    editUser.addEventListener("submit", function(e){
        e.preventDefault()
        data.name = editUser.name.value
        data.age = editUser.age.value
        data.email = editUser.email.value
        writeToStorage(allUsers)
        window.location.href = "index.html"
    })
}
// delete user

const delUser = (userId, allUsers) =>{
    console.log(userId)
    const data = allUsers.filter(user=> user.id != userId) 
    console.log(data);
    writeToStorage(data)
      drawData(data)
}