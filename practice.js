//-----------------------------------------------------------just learning js------------------------
let newMap = new Map()

newMap.set('IN', 'India')
newMap.set('USA', 'United States of America')
newMap.set('Fr', 'France')


for (const [n,k] of newMap) {
    // console.log(n,k)
}


const myObject = {
    rb : "ruby on rails",
    'c#' : "c sharp",
    cpp : "c++",
}

for (const key in myObject) {
//    console.log(`the value of ${key} is ${myObject[key]}`);
}


let arr = ['guru', 'das', 'gupta'];

// for (const key in arr) {
//     console.log(`the value of ${key} is ${arr[key]}`);
// }

// console.log(arr)

// let val = arr.forEach((element) => {
//     console.log(element)
// });

// console.log(val);

let arr2 = [
    {
        languageName: 'java',
        languageExtension: "java"
    },
    {
        languageName: 'python',
        languageExtension: "py"
    },
    {
        languageName: 'JavaScript',
        languageExtension: "js"
    }
]

// arr2.forEach((e) => {
//     console.log(`The name of program is ${e.lan} and it's extension is ${e.languageExtension}`);
// });

let myNums = [1,2,3,4,5,6,7,8,9,10];

// let newNums = myNums.filter((num) => {
//     return num > 6;
// })
//explicit return

// let newNums = myNums.filter((num) => (num > 6))
//implicit return

// console.log(newNums);

// let newNums = []
// myNums.forEach((e) => {
//     if(e>6){
//        newNums.push(e)
//     }
// });

// console.log(newNums);


let books = [
    { title: 'Book One', genre: "non-fiction", publish: 2001,
    edition: 2007}, 
    { title: 'Book Two', genre: "fiction", publish: 1998,
    edition: 2005}, 
    { title: 'Book Three', genre: "science", publish: 1994,
    edition: 1998}, 
    { title: 'Book Four', genre: "fiction", publish: 2001,
    edition: 2009}, 
    { title: 'Book Five', genre: "science", publish: 2005,
    edition: 2011}, 
    { title: 'Book Six', genre: "non-fiction", publish: 1998,
    edition: 2017}, 
]

let filteredBooks = books.filter((e) => {
    return (e.publish > 1995) && e.genre === "non-fiction"
})

// console.log(filteredBooks);

// let filteredBooks = [];

// books.forEach((e) => {
//     if (e.publish > 2000) {
//         filteredBooks.push()
//     }
// });


//chaining of method
// let arr56 = myNums.map((e)=>{
//     return e+10;
// }).filter((e)=>(e>15)).map((e)=>(e+10))

// // console.log(arr56);

// let numArray = [1,2,3,4,5,6];

// let total = numArray.map((e)=>(e*10)).reduce((a,c)=>{
//     console.log(`acc is ${a} and c is ${c}`);
//     return a*c
// },25)
// console.log(total);


let shoppingCart = [
    {
        courseName: 'Js Course',
        price: 2999
    },
    {
        courseName: 'Web Development Course',
        price: 4999
    },
    {
        courseName: 'C++ Course',
        price: 999
    }
]




// let price = []

// shoppingCart.forEach((e)=> {
//     price.push(e.price);
// })

// // let Totalprice = totalPrice
// // console.log(price);

// let Totalprice = price.reduce((acc, curVal)=>{
//         return acc+curVal
//      },0)

//      console.log(`The total price of your Cart is ${Totalprice}`);


// let ab = shoppingCart.reduce((acc, curVal) => {
//     return acc+curVal.price
// },0)

// console.log(`The total price of your Cart is ${ab}`);

//-----------------------------------------------------I learned the basics---------------------------------


//------------------------Project time-------------------

// function changeColor (){
//     document.querySelector('.box1')
// .addEventListener("click", ()=> {
//   document.querySelector(".main").style.backgroundColor = "blue";
//   document.querySelector('h1').style.color = "white"
//   document.querySelector('p').style.color = "white"
// })

// document.querySelector('.box2')
// .addEventListener("click", ()=> {
//   document.querySelector(".main").style.backgroundColor = "purple";
//   document.querySelector('h1').style.color = "white"
//   document.querySelector('p').style.color = "white"
// })

// document.querySelector('.box3')
// .addEventListener("click", ()=> {
//   document.querySelector(".main").style.backgroundColor = "yellow";
//   document.querySelector('h1').style.color = "black"
//   document.querySelector('p').style.color = "black"
// })

// document.querySelector('.box4')
// .addEventListener("click", ()=> {
//   document.querySelector(".main").style.backgroundColor = "orange";
//   document.querySelector('h1').style.color = "white"
//   document.querySelector('p').style.color = "white"
// })
// }

// changeColor();

document.querySelectorAll("#box").forEach((e)=> {
   e.addEventListener("click", ()=> {
   if(e.className == "box1"){
    document.querySelector(".main").style.backgroundColor = "blue";
    document.querySelector('h1').style.color = "white"
   document.querySelector('p').style.color = "white"
   }
   else if(e.className == "box2"){
    document.querySelector(".main").style.backgroundColor = "purple";
    document.querySelector('h1').style.color = "white"
   document.querySelector('p').style.color = "white"
   }
   else if(e.className == "box3"){
    document.querySelector(".main").style.backgroundColor = "yellow";
    document.querySelector('h1').style.color = "black"
   document.querySelector('p').style.color = "black"
   }
   else if(e.className == "box4"){
    document.querySelector(".main").style.backgroundColor = "orange";
    document.querySelector('h1').style.color = "white"
   document.querySelector('p').style.color = "white"
   }
   });
});

//-----------------------------------------------second project---------------------------------

// let btn = document.querySelector("#btn");
// let height = document.querySelector("#height");
// let weight = document.querySelector("#weight");

// btn.addEventListener("click", ()=> {
//   let Hval =  Number(height.value)/100;
//   let Wval =  Number(weight.value);
//   let bmi = Wval / (Hval** 2);
//   let p = document.createElement("p");

//   if(Hval && Wval){
//     // let h3 = document.createElement("h3");
//     // h3.appendChild(document.createTextNode(`Your BMI(Body Mass Index) is ${bmi.toFixed(1)}`));
//     // document.querySelector(".calculate").appendChild(h3);
//     // document.querySelector(".calculate").removeChild(p);
//     document.querySelector("#result").innerHTML = `Your BMI(Body Mass Index) is ${bmi.toFixed(1)}`;
//   }
//   else{
//     document.querySelector("#error").innerHTML = "You have to fill both of the fields!!";
//   }
// });

// ------------------------------------------------third project-----------------------------------------------------


// setInterval(function(){
//     let myDate = new Date();
//     document.querySelector(".dgClock").innerHTML = myDate.toLocaleTimeString();
// }, 1000)

// -----------------------------------Fourth Project--------------------------------------------------------------------------------------





let arr1 = [23,56,34,16,76,52,90];

let values = arr1.forEach((e)=>{
   return e + 10;
});

// console.log(values);

// // for(let v of arr1){
// //     console.log(v);
// // }

// let values = arr1.filter((ele)=>{
//     return typeof ele == "number";
// })
// .filter((e)=>(e%4
//     ==0));

console.log(values);