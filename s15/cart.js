
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
let cartItems = []
const addToCart = (cartArray, productId, q)=>{
    const product = products.find( el=> el.id == productId )
    if(!product) return console.log("product not found")
    product.q = q
    cartArray.push(product)
}
const calculateTotalBeforeDiscount = (cartArray)=>{
    let total = 0;
    cartArray.forEach(item =>  total += item.q*item.price );
    return total
}
const calculteCartDiscount =  (cartArray) =>{
   let total = calculateTotalBeforeDiscount(cartArray)
   let discount = 0
   if(total>10000) discount = total*15/100
   else if(total>5000) discount = total * 7.5 / 100
    return discount
}

const convertToOrder = () =>{
    let order = {
        id: Date.now(),
        items: cartItems,
        totalBeforDiscount: calculateTotalBeforeDiscount(cartItems),
        discount: calculteCartDiscount(cartItems),
        grandTotal : calculateTotalBeforeDiscount(cartItems) - calculteCartDiscount(cartItems)
    }
    cartItems = []
    return  order
}
addToCart(cartItems, 1, 10) //1200*10
addToCart(cartItems, 5, 5) //75*5 
addToCart(cartItems, 3, 3) //75*5 


console.log("cart items")
cartItems.forEach((item, i )=>{
    console.log(`${i+1} - ${item.name} - ${item.price} - ${item.q}`)
})
console.log(
    `
cart total is ${calculateTotalBeforeDiscount(cartItems)}
discount is ${calculteCartDiscount(cartItems)}    
Grand Total is ${ calculateTotalBeforeDiscount(cartItems) - calculteCartDiscount(cartItems)}
    `
)


console.log(convertToOrder())
console.log(cartItems);
