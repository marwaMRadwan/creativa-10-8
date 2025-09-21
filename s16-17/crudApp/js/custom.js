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
const dataWrap = document.querySelector("#data-wrap")
if(dataWrap){
    const allUsers = readFromLocalStorage()
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
            alert(user.id)
        })
    })
}
// get single user


// edit user


// delete user