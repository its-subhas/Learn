console.log("Hello World !");
console.log("Fuck You !");

a = 7;
let b = 7;
c = a + b;
console.log("Result: " + c);
console.log("hey you");

let my = BigInt("565657556");
console.log(my);
console.log(typeof my);

let you = Symbol("@");
console.log(you);
console.log(typeof you);

const student = {
  name: "subhas biswas",
  result: "Pass",
  cgpa: 7.2,
  pass: true,
};

student.name = "Guddu";
student["cgpa"] = student["cgpa"] + 1;

console.log(student);
console.log(student.name, student["cgpa"]);

const myPhone = {
  phoneName: "Poco F3 GT 5G",
  color: "Gunmatel Silver",
  price: 29999,
  osAndroid: true,
  gaming: true,
};

console.log(myPhone);
console.log(myPhone.phoneName);
console.log(myPhone.gaming);
