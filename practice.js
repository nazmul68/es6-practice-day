// ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

const salary = 7000;
let bill = 750;
bill = 1250;


// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

let expense = 250;
const car = {
    type:"Fiat", model:"500", color1:"white",
    type: 'corola' , model: '200', color2:'silver'
};

const dynamicStr = `
    my total expense today is ${expense}.
    my first car color is ${car.color1}.
    my second car color is ${car.color2}
`
// console.log(dynamicStr);


// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 

const devideByFive = num => num / 5;
// console.log(devideByFive(100)); //20


// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 

const twoInputParameters = (num1, num2) => ( num1 + 2 ) * (num2 + 2);
// console.log(twoInputParameters(5,8));



// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 
const threeParameters = (age, birthday, birthYear) => age * birthday * birthYear;
// console.log(threeParameters(21,31,2001));


// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

const multiLineArrowFunction = (para1 , para2) => {
        const addtwoPara1 = para1 + 2;
        const addtwoPara2 = para2 + 2;
        const multiply = addtwoPara1 * addtwoPara2;
        return multiply; //must return final result on multilne arrow function. 
};
// console.log(multiLineArrowFunction(8,18));



// ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 

/*1. Which is better arrow function or function?
  Don't use to add function as a property in object literal because we can not access this.   Function expressions are best for object methods. Arrow functions are best for callbacks or   methods like map , reduce , or forEach. 

  2. We can return values from the arrow function the same way as from a regular function, but with one useful exception. If the arrow function contains one expression, and you omit the function's curly braces, then the expression is implicitly returned;

  3.There are two major benefits of using Arrow functions. One is that it's a shorter syntax and thus requires less code. The main benefit is that it removes the several pain points associated with the this operator

  4.When should you not use arrow functions in ES6?
  An arrow function doesn't have its own this value and the arguments object. Therefore, you   should not use it as an event handler, a method of an object literal, a prototype method, or   when you have a function that uses the arguments object.
*/


// ৪.৫. জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 
var declared = 'It can be declared without initialization'
    declared = 'var new value'
let	declared1 = 'It can be declared without initialization'
    declared1 = 'let new value '
const declared2 ='It cannot be declared without initialization'	
    // declared2 = 'dont redeclared' //error assingment constant variable
    

// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

    const array = [2, 4, 6, 8, 10].map(n => n * 5);
    // console.log(array); 



// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 

const numbers = [3, 6, 8, 9, 12, 13, 16, 19, 18, 45, 66, 65, 78, 69, 67, 99, 100];
const oddNumbers = numbers.filter(num => num % 2 === 0);
// console.log(oddNumbers);



// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

const objArr = [
    {brand: 'Apple', edition: '2018' , price: 25000 },
    {brand: 'Redmi', edition: '2017' , price: 5000 },
    {brand: 'Huawie', edition: '2019' , price: 8000 }
];

const toFind = objArr.find(product => product.price === 5000 );
// console.log(toFind);



// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 

/* 
1.(map) using map we can operate every element of an array.
2.(filter) using filter we can filtering from an array element those element which is matched to our requirements.
3.(find) using find we can find first array element which is matched to our requirements.
*/



// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

const simpleObj = {brand: 'Walton', origin: 'Bangladesh' , product: 'varities'};
const {origin} = simpleObj;
// console.log({origin});



// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

const [first, second, third, ...r] = ['redmi', 'apple', 'walton', 'oppo', 'vivo'];
const three = third;
// console.log(three); //walton



// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 

// regular function
function containThreeParameters(first, second, third = 7){
    return first + second + third;
} 
// console.log(containThreeParameters(50,60)); // 117

// Arrow Function 
const containThreePara = (age1, age2, age3 = 7) => age1 + age2 + age3;
// console.log(containThreePara(20,30)); // 57



// [অপশনাল]

// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

const nestedObj = {
    name: 'Nazmul Sujon',
    details:{
        name: 'Nazmul Sujon',
        road: 'A block',
        floor: 'Third Floor',
        friendsName:[
            'julfikar', 'mazed', 'abdullah', 'sagor'
        ]
    },
    isSingle: 'Undefined'
}
// console.log(nestedObj.details.friendsName[1]); //mazed



// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 
//  console.log(nestedObj.details?.friendsName[2]); // abdullah



