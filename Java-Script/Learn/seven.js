// let my = {
//   FullName: "Subhash",
//   Salary: 57000,

//   myFunction: function () {
//     console.log("MY Function: ", my.FullName);
//   },

//   myFunctionTwo() {
//     console.log("MY Function Two: ", this.Salary);
//   },

//   myFunctionThree: () => {
//     console.log("MY Function Three");
//   },
// };

// // my.myFunction();
// // my.myFunctionTwo();
// // my.myFunctionThree();

// function functionMy() {
//   console.log("functionMy");
// }

// let Muskan = {
//   FullName: "Muskan Verma"
// }

// Muskan.__proto__= my;

// Muskan.myFunctionThree();
// let salary = Muskan.Salary;
// console.log(salary);

// class myClass {

// constructor(father,age) {
//   console.log("Constructor Invoked");
//   this.father = father;
//   this.age = age;
// }

//   myFunctionFirst() {
//     console.log("First Function");
//   }

//    myFunctionSecond() {
//     console.log("Second Function");
//   }

//   setName(name) {
//     this.name = name;
//   }

// }

// // let myObject = new myClass();
// // myObject.myFunctionFirst();
// // myObject.myFunctionSecond();
// // myObject.setName("Fucker !");

// let obj2 = new myClass("Guddu",22);
// obj2.myFunctionFirst();
// obj2.myFunctionSecond();
// obj2.setName("Subhash Biswas");
// console.log(obj2.name);
// console.log(obj2.age);
// console.log(obj2.father);

// class parent {

//   constructor(baap) {
//     this.father = baap;
//   }

//   hello() {
//     console.log("Hello From Parent Class.");
//   }
// }

// class child extends parent {

// constructor(baap,baccha) {
//   super(baap);
//     this.kid = baccha;
//   }

//   hey() {
//     console.log("Hey From Child Class.");
//   }
//   hello() {
//     super.hello();
//     console.log("Hello From Child Class.");
//   }
// }

// let obj = new child("GOD","Guddu");
// obj.hello();
// obj.hey();

// let a = 7;
// let b = 7;

// console.log("a: ", a);
// console.log("b: ", b);

// console.log("a+b: ", a+b);

// try {
// console.log("a-b: ", a-c);
// } catch(e) {
//   console.log("Opps Something Went Wrong ! ", e);
//   console.log("a-b: ", a-b);
// }

// console.log("a/b: ", a/b);
// console.log("a*b: ", a*b);
// console.log("a**b: ", a**b);

// function myf () {
//   console.log("Hello");
// }

// setTimeout(myf,2000);

// function ft(arg) {
//   console.log("hey !", arg);
// }

// setTimeout(() => {
//   ft(2);
// }, 2000);

// ft(3, () => {
//   ft(4, () => {
//     ft(5, () => {
//       ft(6, () => {
//         ft(7);
//       });
//     });
//   });
// });



// let promise = new Promise((resolve,reject)=>{
//   console.log("Promise !");
//   resolve("Resolved !");
//   reject("Rejected !");
// });


// let promise = new Promise((resolve,reject)=>{
//   console.log("Promise !");
//   // resolve("Resolved !");
// reject("Rejected !");
// });



// promise.then(()=>{console.log("Promise Then !")});
// promise.catch(()=>{console.log("Promise catch !")});




// function myf() {
//   return new Promise((resolve,rejecte)=>{
//     setTimeout(()=>{
//       console.log("Data Get first !");
//       resolve("Success !");
//     },3000);
//   });
// }

// function myt() {
//   return new Promise((resolve,rejecte)=>{
//     setTimeout(()=>{
//       console.log("Data Get two !");
//       resolve("Success !");
//     },3000);
//   });
// }


// let pro = myf();
// pro.then((res)=>{

//   let proo = myt();
//   proo.then((res)=>{});

// });



// async function myfun() {
// console.log("Hello From Async");
// }


// myfun();



// async function myfunction(arg) {
//   console.log("Getting Data.......", arg);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Got Data", arg);
//       resolve("Success !");
//     }, 4000);
//   });
// }

// async function runerfunction() {
//   await myfunction(1);
//   await myfunction(2);
//   await myfunction(3);
//   await myfunction(4);
// }

// runerfunction();


// (async function() {
//   await myfunction(1);
//   await myfunction(2);
//   await myfunction(3);
//   await myfunction(4);
// })();
















