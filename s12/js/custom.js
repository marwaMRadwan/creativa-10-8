// console.log("test")
// console.log("test")
// //test

/*
vghcghfcghcgh
vhjvhj
vjkbkj
hvjhm
bvhk
*/

// variables
// console.log(x);

// var x = 8
// var x = "test"
// x = []
// x= true
// let const
// console.log(x);

// let x = 5
// x=10

//var x = 10
// if(true){
//     let x = 15
//     console.log(x);
// }
// console.log(x)
//operators
// Mathmatical 
// + - * / ** %
// assignment 
// = += -= ......
// x= "1", y= "a"
// conditional oper.
// == === != !== > < >= <=
// let a = 5, b= "5"
// console.log(a==b);
// console.log(a===b);
// console.log(typeof a);

// let c = prompt("c=")
// console.log( c * 9 / 5 + 32 );

// ternery operator
// let x = 5
// x == 5 ? console.log(1) : console.log(2)

// if(!0) console.log("1 false")
// if(!'0') console.log("2 false")
// if(!null) console.log("3false")
// if(!false) console.log("4false")
// if(!"") console.log("5false")
// if(![]) console.log("6false")
// if(!undefined) console.log("7false")
// if(!{}) console.log("8false")

// && || !

// if( !(true && false || true)){
//     console.log(1);   
// }

// cond.
// if
// if(true){

// }
// else if(){

// }
// else if(){

// }
// else{

// }
const log = console.log
// Number  parseInt  parseFloat  +  *1.0
// weekDay = +prompt("enter a day")
// log(typeof weekDay, weekDay)
// if(weekDay === 1 ) log("sun")
// else if(weekDay === 2 ) log("mon")
// else if(weekDay === 3 ) log("tue")
// else if(weekDay === 4 ) log("wed")
// else if(weekDay === 5 ) log("thr")
// else if(weekDay === 6 ) log("fri")
// else if(weekDay === 7 ) log("sat")
// else log("error");
// switch
// switch(weekDay%12){
//     case 1: log("sun"); break;
//     case 2: log("mon"); break;
//     case 3: log("tue"); break;
//     default: log("error")
// }


// Loops
// for while do while foreach for of for in 

// for(let i =0; i<=10 ; i+=2){
//     console.log(i)
// }

// let i = 0
// while(i<=10){
//     log(i)
//     i+=2
// }
// let i =0
// for(;;){
//     if(i==10) break
//     i+=2
// }

// let ch
// do{
//     let ch = prompt("ch")
    // if(ch==0) break
// }while(ch!=0)



let arr = [1,[],"3",4,5,true]
// log(arr.length)
// // aa[0]
// arr[100] = 5
// log(arr)
// log(arr[50])

// for(a of arr){
//     log(a)
// }

arr.forEach((el, index)=>{
    log(el, index)
})