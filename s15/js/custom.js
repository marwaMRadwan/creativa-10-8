//functions
// myFun1()
// function myFun1(x = 0, y = 0){
//     console.log(x,y);
//     // console.log("test")
//     console.log(x+y)
//     let z = 15
//     return x+y
// }
//call , invoke
// myFun1(5,3,6,9)
// console.log("-------------");
// myFun1(5)
// // console.log(x)
// let res = myFun1(5,3)
// let z = 4
// function test(val){
//     val = 5
// }
// test(z)
// console.log(z) // 4
// const x = [1,2 ,3]
// function addToArray(val){
//     val.push(5)
// }
// console.log(x) //[1,2,3]
// addToArray(x)
// console.log(x)  // [1,2,3,5]

// function add(...val){
//     console.log(val); 
//     let sum = 0
//     val.forEach(v => { sum+=v });
//     return sum
// }
// add(2,3,6,8)
// add(1,8,9)


// anonymous 
// x()
// const x = function(){
//     console.log("test");
// }

// x()

// const z = () =>{
//     console.log(this);
// }

// z()

let user = {
    name:"abc",
    age:5,
    print: function(){
        console.log(this)
    }
}

user.print()

/*
products = [
{name: "p1", price:10},
{name: "p2", price:20},
{name: "p3", price:25},
]
cart total >100 ===> disount 15%
cart total >50 ===> disount 7.5%
cart total <50 => no discount

cart ( "p1", 5, "p2", 3, "p3",10)
cart ("p1", "p3")
*/

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Smartphone", price: 850 },
  { id: 3, name: "Tablet", price: 600 },
  { id: 4, name: "Monitor", price: 300 },
  { id: 5, name: "Keyboard", price: 75 },
  { id: 6, name: "Mouse", price: 50 },
  { id: 7, name: "Printer", price: 200 },
  { id: 8, name: "Webcam", price: 90 },
  { id: 9, name: "Speaker", price: 110 },
  { id: 10, name: "Router", price: 130 }
];

const cartItems = []
/*
add product to cart
get product price
calculate discount
get cart value
*/

console.log(calculteCartDiscount(cartItems))
// addToCart(cartItems, 6, 3)
// console.log(cartItems)

// const c = []
// const addMultiToCart = (...p) =>{
//     for(let i = 0; i<p.length; i+=2){
//         let q = p[i+1]
//         const product = products.find( el=> el.id == p[i] )
//         product.q = q
//         c.push(product)
//     }

// }
// addMultiToCart(5,3,6,10,2,2)
// console.log(c);
