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
// create user

// get all data


// get single user


// edit user


// delete user