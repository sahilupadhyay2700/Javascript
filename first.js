// fullName  = "tony stark"
// prize = 150.50;
// console.log(prize);
// // x = null;
// // console.log(x);
// // y = undefined;
// fullName = 24;
// // console.log(y);
// console.log(fullName)
// isFollow = true
// isFollow = false
// console.log(isFollow)

// let marks = 99.9; //can't be re-declare but can be updated
// marks = 100 ;  //update
// console.log(marks) 

// // const value = 9.8 ; // only one value can be assined 
// // value = 10 ;     // can't re declare can't update    show   error  in console log
// // console.log(value) // first.js:21 Uncaught TypeError: Assignment to constant variable.
                                    
// const  PI = 3.14 ;
// console.log(PI);

// let a = 5;
// let b = 2;

// console.log("a = ", a , " b = " , b);
// console.log("a + b = ", a + b );
// console.log("a - b = ", a - b );
// console.log("a * b = ", a * b );
// console.log("a / b = ", a / b );
// console.log("a % b = ", a % b );

// // uniary opearator
// console.log("--a = ", --a);
// console.log("++a = ", ++a);
// console.log("a-- = ", a--);
// console.log("a= ", a)
// console.log("a++ = ", a++);
// console.log("a= ", a)

//  let p = 4 ;
//  let q = 8 ;

 
//  console.log("p+=4 : ", p += 4)
//  console.log("p-=4 : ",p-=4 )
//  console.log("p*=4 : ",p*=4)
//  console.log("p/=4 : ",p/=4)
//  console.log("p**=4 : ",p**=4)

// //comparison  ops
// let x = 4;
// let y = 5;
// console.log(4 == x );
// console.log(y != 5);
// x = 5
// y = "5"
// console.log(x === y); // this check data type also 
// console.log(x !== y); // stricter version 

// // [ > , >= , < , <= ] all other king of comp. op.

// //  logical op.
// let c = 5 ;
// let d = 7 ;

// console.log("c > d && c === 5",c > d && c === 5)
// console.log("c > d || c === 5",c > d || c === 5)
// console.log("!(5< 7)",!(c < d));
 
// // if statement ;
// let mode = "light";
// let color ;

// if (mode === "dark"){
//     color = "black";
// }
// if (mode === "light"){
//     color = "white";
// }
// console.log(color)

// let age = 12 ;

// if (age >= 18){
//     console.log("you can vote");
// }else{
//     console.log("you cannot vote");
// }

// let n = 5 ;
// if (n%2 === 0){
//     console.log("EVEN");
// }else{
//     console.log("odd number");
// }

// let Mode = "air force";
// let colour ;

// if (Mode === "army"){
//     colour = "olive green ";
// }else if (Mode === "air force"){
//     colour = "blue";
// }else if (Mode === "navy"){
//     colour = "navy blue";
// }else {
//     colour = "white";
// }
// console.log(colour)

//  // ternary operator ; work with 3 operands
// // let grade = 80 ;
// // let result = grade >= 90 ? "A grade" : "b grade";
// // console.log(result)

// let nom = prompt("enter a number: ");

// if (nom%5 === 0){
//     console.log("multiple of 5");
// }else {
//     console.log("not a multiple of 5")
// }

// let score = prompt("enter score : ") ;
// let grade ;
// if (score >= 90 && score <= 100 ){
//     grade = "A";
// }else if (score >= 70 && score <= 89){
//     grade = "b";
// }else if (score >= 60 && score <= 69){
//     grade = "c";
// }else if (score >= 50 && score <= 59){
//     grade = "d";
// }else if (score >= 0 && score <= 49 ){
//     grade = "fail";
// }else {
//     console.log("not present in exam")
// }

// console.log(grade);

// // loops ;

// for (let i = 1 ; i <= 5 ; i++){
//     console.log("krishna")
// }

// // sum of 1 to 5
// let sum = 0 ;
// for (i = 1 ; i <= 5 ; i++){
//     sum = sum + i;
// }
// console.log("sum : ", sum)

// // while loop ;

// let f = 1 ;
// while(f<= 5 ){
//     console.log("f = ",f);
//     f++ ;
// }

// let j = 1 ;
// while(j <= 5 ){
//     console.log("ram");
//     j++ ;
// }

// // do - while loop ;

// let h = 1 ;
// do {
//      console.log("h :",h)
//      h++ ;
// } while (h <= 10);

// // for - of loop ;

// let str = "apnacollege"
// let size = 0;
// for(let i of str){
//     console.log("i=", i);
//     size++;
// }
// console.log("size of str", size)

// let string = "sahilupadhyay";
// let lenght = 0 ;
// for( let val of string){
//     console.log("val = ", val);
//     lenght++;
// }
// console.log("lenght of string",lenght)

// //for-in loop  ;

// let student = {
//     name : "sahil" ,
//     age : 24 ,
//     cgpa : 8.5 ,
//     isPass : true,
// };

// for(let key in student){
//     console.log("key= ",key , "value=", student[key]);
// }
// // to print even num 
// for(i = 0 ; i <= 100 ; i++){
//     if(i%2===0){
//     console.log(i);
// } else {

// }
// }
// // print odd num

// for(i = 0 ; i <= 100 ; i++){
//     if(i%2 !== 0){
//     console.log(i);
// } else {

// }
// }

// // practice question 2  game of guessing number
// let gameNum = 46 ;
// let userNum = prompt("guess the number: ");

// while(userNum != gameNum){
//     userNum = prompt("you guess the wrong number , guess again :");
// }

// console.log("congratulations, you entered the right number");

// console.log(str[8]); // this is how we access the indices of string 

// // template literals
// let obj = {
//     item : "pen" ,
//     cost : 10,
// };
// let output = `the cost of ${obj.item} is ${obj.cost} rupees `;
// console.log(output)

// let specialString = `this is a tamplate literal ${1+5+4}`
// console.log(specialString);

// // escape charachter /n new line 
// console.log("sahil\nupadhyay")
// console.log("apna\tcollege") // have tab space

// let num = "0123456789" ; // string slicing 
// console.log(num.slice(1,4));

// let sent = "apna";
// console.log(sent.slice(1,4));
// let sent2 = "college"

// console.log(sent.concat(sent2));
// console.log(sent.replace("apna","japna"));
// console.log(sent.charAt(1));

// // practice qn 

// let userName = prompt("enetr your name : ");
// console.log("@"+ userName+ userName.length)

// // ARRAY

// let mark = [98,85,96,84,75,96,84];
// console.log(mark)

// let heroes = ["ironman","batman","catwoman","superman","krish"]
// console.log(heroes)
// console.log(heroes.length)

// //LOOPING OVER AN ARRAY  BY FOR LOOP
// for (i = 0 ; i< heroes.length; i++){
//      console.log(heroes[i]);
// }
//     // BY FOR- OF LOOP
// for (hero of heroes){
//     console.log(hero);
// }

// let cities = ["udaipur","jaipur","jodhpur","kota","jaisalmer"];
// for(City of cities){
//     console.log(City.toUpperCase());
// }

// let Marks = [85,97,44,37,76,60];

// let Sum = 0;

// for (let val of Marks) {
//     Sum += val;
// } 

// let avg = Sum / Marks.lenght;
// console.log(avg);

// //practice qn 
// // by for-of loop
// let item = [250, 645, 300, 900, 50];

// let i = 0 ;

// for(let val of item){
//     let offer = val / 10 ;
//     item[i] = item[i] - offer ;
//     console.log(`value after offer = ${item[i]}`);
//     i++;
// }
// // by for loop

// for(i = 0 ; i < item.lenght; i++){
//     let offer = item[i]/ 10 ;
//     item[i] -= offer ;
// }

// console.log(item);
 
// // array  method ;

// let foodItem = ["potato", "burger", "paneer", "pizza"];
// console.log(foodItem.push("chips","momo","chillipaneer")); // push met add  element
// console.log(foodItem);
// let deletedItem = foodItem.pop(); // delete element(last one)
// console.log(foodItem);
// console.log("deleted item : ",deletedItem);
// console.log(foodItem.toString()); // convert anything to string 

// let marvelHeroes = ["ironman","captain america", "thor","dr.strange", "antman" , "wasp","deadpool"];
// let dcHeroes = ["batman","superman" ,"catwoman"];
// let indianHeroes= ["krish","shaktiman","hanuman"];

// let heroes = marvelHeroes.concat(dcHeroes,indianHeroes); // concat add array
// console.log(heroes);

// marvelHeroes.unshift("hulk"); // unshift add at start
// console.log(marvelHeroes)
// let val = marvelHeroes.shift() // delete at start 
// console.log("deleted val : ", val)
// let sliceMet = marvelHeroes.slice(1,4); // slice method (dont change in original array )
// console.log(sliceMet); 

// let arr = [1 ,2 , 4 ,5 ,6 ,7 ,8 ,9 ,10];
// // arr.splice(3, 2,101,102);

// // arr.splice(2,0,101); // add element

// // arr.splice(3,1); // delete element 

// arr.splice(3,1,101); //replace element


// let companies = ["bloomberg","microsoft","uber","google","IBM","netflix"];
// companies.shift();
// companies.splice(2,1,"ola")
// companies.push("amazon")


// // chapter 4 = function and method 

// function myFunction(){
//     console.log("this is sahil upadhyay");
//     console.log("and we are learning javascript");

// }

// myFunction();

// function message(msg,n){
//     // parameter --> input
//     console.log(msg, n )

// }

// message("i love js",10); // argurment 

// function SUM(X,Y){
//     let result = X + Y 
//     console.log(result)
// }

// SUM(911,89);
// // note: function parametetrs are like local variable of fx and they are in block scope{} after the block{} they are not existing 
// function add(a,b){
//     s = a + b ;
//     console.log("before return"); // in return we only take one value(array/ string or else)
//     return s ; // after this no code can be return
//     console.log("after return "); 
// }

// add(5,4); // to have output we have to make a variable 
// let output = add(5,4);
// console.log(output) 

// // arrow fx are part of modern java script 
// const arrowSum = (p , q) => {
//     console.log(p + q);

// };
// arrowSum(5,5);

// // arrowfunction  are compact version of write fx
// const arrowMul =  (x , y) => {
//     console.log(x * y);
// }

// arrowMul(5,5);

// const printHello = () => {
//     console.log("hello!");
// }

// printHello();

// // practice qn 

// function countVowels(str){
//     let count = 0 ;
//     for (const char of str){
//         if (
//             char === "a" ||
//             char === "e" || 
//             char === "i" || 
//             char === "o" || 
//             char === "u" 
//         ) {
//             count++ ;

//         }
        
//     }
//     console.log(count)
    
// }



// function findWord(string){
//     let count= 0 ;

//     for (const char of string){
//         if (
//             char === "s" ||
//             char === "a" ||
//             char === "h" ||
//             char === "i" ||
//             char === "l"

//         ){
//         count++ ;
//         }
//     }
//     console.log(count)
// }
// // for each loop = arr.forEach(callBackfunction)
// // let arry = [1,2,3,4,5,6];

// // arry.forEach(function printVal(val){
// //     console.log(val)
// // })
//   // ny arrowfx 
// let arrowArry = ["pune","delhi", "mumbai"];

// arrowArry.forEach((val , idx , arrowArry) => {
//     console.log(val.toUpperCase(), idx , arrowArry);
// });

// // in for each loop [val , idx , array ] these 3 value can be used 
// // this can only be useful for arrays and not for strings

// // note : higher order fx / method => takes another fx and (parameter) or return some fx

// let squre = [1,2,3,4,5,6,];

// squre.forEach((val , idx) => {
//     console.log(val*val , idx) // num**2
// })
// // diffrent way to write a callback func to add the funx in variable then use it AS para in for each loop
// let calcSqure = (val , idx) => {
//     console.log(val*val , idx) // num**2
// }
// squre.forEach(calcSqure);  

// // map method : create a new array with the result of some operation . the value its callback return are used to form new array 
// // arr.map(callbackfnx(value , idx , array)) ;

// let nums = [65,55,63];

//  let newArray = nums.map((val) => {
//     return val * val ;

// })
// console.log(newArray);

// // filetr method 

// let even = [1,2,3,4,5,6,7,8,9,10];

// let newArr = even.filter((val) => {
//     return val %2 === 0 ;
// })

// console.log(newArr);

// // reduce method 

// let Arr = [1,2,3,4,5,6];

// let Output = Arr.reduce((res , curr) => {
//     return res + curr ;

// });

// console.log(Output); //  21

// // find largest num 

// let largeNum = [55,66,21,48,86,95];

// let large = largeNum.reduce((res , curr) => {
//     return res > curr ? res : curr ;

// });

// console.log(large);

// let MARKS = [87,99,65,32,96,94,52,96,91,];

// let toppers = MARKS.filter((val) => {
//     return val > 90 ;
// });

// console.log(toppers);

// let n = prompt("enter a num : ") ;

// let Array  = [];

// for (let i = 1 ; i <= n ; i++ ){
//     Array[i - 1] = i ;

// };
// console.log(Array);  

// let TOTAL = Array.reduce((res , curr) => {
//     return res + curr ;
// });

// console.log(TOTAL);

// let factorial = Array.reduce((res , curr) => {
//     return res * curr ;

// });
// console.log(" factorial" ,  factorial);
  
// // events handling ;

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target)
//     // let a = 52 ;
//     // a++;
//     // console.log(a);
// }

// let div  = document.querySelector("div");

//     div.onmouseover = () => {
//         console.log("you are in div");

//     };
// // JS Handling event >> inline event handling
 
// let btn2 = document.querySelector("#btn2"); // by evenwetlistner we can access one event multiple time  

// btn2.addEventListener("click", (evt) => {
// console.log("button2 was clicked - handler1")
// // console.log(evt);
// // console.log(evt.type);
// });

// btn2.addEventListener("click", () => {
// console.log("button2 was clicked - handeler2")
// });
// const handeler3 = () => {
//     console.log("button2 was clicked - handeler3")
// }

// btn2.addEventListener("click", handeler3);


// btn2.addEventListener("click", () => {
// console.log("button2 was clicked - handeler4")
// });

// btn2.removeEventListener("click",handeler3); 
// // to remove eventlistener 1st : add it in a variable and then add that variable in remove eventlistener

// let modeBtn =  document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light" ; // dark 

// modeBtn.addEventListener("click", () => {
//     if(currMode === "light"){
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     } else {
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// });

// classes and object 

// const student =  {
//      fullName : "sahil upadhyay",
//      marks : 96.2 ,
//     printMarks : function (){
//        console.log("marks", this.marks); // this.marks == student.marks
//     }
// }
// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%");
//     },

//     calcTax2 : function(){  // we can write our fx / method like both the mehtod 
//         console.log("tax rate is 20%");
//     }

// };

// const karanArjun = {
//     karanSalary(){
//         console.log("karan's salary is 30,000 ");
//     },

//     arjunSalary: function(){
//         console.log("karan's salary is 40,000 ")
//     },
//     calcTax(){
//         console.log("tax rate is 30%") // if obj & prototype have same method object's mehtod will  be used .

//     }
// };

// karanArjun.__proto__ = employee ;  // to make a prototype__prto__

// // clsses in obj practicle
// class toyotaCar {

//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop")
//     }

//     setBrand(brand){
//         this.brand = brand
//     }

// }


// let fortuner = new toyotaCar();
// fortuner.setBrand("fortuner");
// let lexus = new toyotaCar();
// lexus.setBrand("lexus");



// class bankEmployee {
//     constructor(name,post){
//         console.log("creating new obj")
//         this.name = name;
//         this.post= post;
//     }

    
//     bankname(){
//         console.log("sbi")
//     }
//     bankBranch() {
//         console.log("PRATAPNAGAR")
//     }

//     setName(name){
//         this.name = name
//     }
// }


// let detail = new bankEmployee("sahil");
// detail.setName("sahil");
// let newemp = new bankEmployee("rahul");
// newemp.setName("rahul");
// let newemp1 = new bankEmployee();
// newemp1.setName("arvind g");
// let newemp2 = new bankEmployee();
// newemp2.setName("himanshu");
// let newemp3 = new bankEmployee();
// newemp3.setName("ram");
// let newemp4 = new bankEmployee();
// newemp4.setName("krishna");
// let newemp5 = new bankEmployee();
// newemp5.setName("gautam");


// // constructor ;  this is give name by giving para by making constructor

// let newemp6 = new bankEmployee("aakash", "manager");
// console.log(newemp6)

// let newemp7 = new bankEmployee("dharmesh","cleark");

// let newemp8 = new bankEmployee("raghav", "po");

// let newemp9 = new bankEmployee("shakti","guard");

// let newemp10 = new bankEmployee("bharat","receptionist");

// let newemp11= new bankEmployee("vivek","head");


// // inheritance in js 


// class parent {
//     hello(){
//         console.log("hello!")
//     }
// }

// class child extends parent{}

// let obj = new child();

// // example 2 

// class person {

//     constructor(name){
//         console.log("enter parent constructor")
//         this.species = "homo sapians"
//         this.name = name
//     }
//     sleep(){
//         console.log("sleep 7 hours daily");

//     }

//     eat(){
//         console.log("eat healthy");

//     }
//     work(){
//         console.log("do nothing")
//     }
// }

// class engineer extends person {
//      constructor(branch,name){
//         console.log("enter child constructor")
//         super(name) // to invoke parents class constructor
//         this.branch = branch
//         console.log("exit child constructor")
//      }
//     work(){
//         super.eat();
//            console.log("solve problem ");
//     }
// }

// // class doctor  extends person {
// //     work(){
// //         console.log("treat patient")
// //     }
// // }


// let sahilobj = new engineer("chemical eng", "sahil"); // name by constructor by calling by super(name)
// console.log(sahilobj.work()); // work of  engineer class 
// // if child and parent have same  method , childs method will be used [mehod overriding]

// class user{
     
//     constructor(name,email){
//         this.name = name;
//         this.email = email;


//     }

//     vieweData(){
//         console.log("view website data ")
//     }
      
// }

// class  admin extends user{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         console.log("edit website data")
//     }


// }

// let userobj  = new admin("sahil","kchbUDCV@gmail,com");

// //  error handling =  try catch block 

  
// let a =  5 ;
// let b = 10 ;
// console.log("a = ", a);
// console.log("b = ", b);
// console.log("a+b" , a + b);
// try{
// console.log("a+b" , a + c);
// }
// catch(err){
//     console.log(err)
// }
// console.log("a+b" , a + b);
// console.log("a+b" , a + b);
// console.log("a+b" , a + b);

// // lecture - 12 = async await chain >> callback hell 
// console.log("one");
// console.log("two");
//                     // example pf asyc programing
// setTimeout(() => {
//     console.log("hello!");
// },4000); // timeout: 4sec = 4000milisec

// console.log("three");
// console.log("four");

// // call back

// function sum(a , b){
//     console.log(a+b)
    
// }

// function calculator(a,b, sumCallback){ // sumCallback = sum(it can written sum only)
//     sumCallback(a,b)
// }

// calculator(1,5,sum); // don't pass it like = sum() [error]

// const hello = () => { // hello callback
//      console.log("hello!")
// }

// setTimeout(hello,3000);

// callback hell  

// function getData(dataId,gateNextData) {
//       setTimeout(() =>{
//         console.log("dataId :",dataId)
//         if(gateNextData){
//             gateNextData();
//         }
//       },2000);
// }

// getData(1,() => {
//     console.log("getting data2...") // using callback
//      getData(2,() => {              // now this is called = callback hell bcoz its a kind of "bad code" that is not easy to undersatnd or manage and have nested code 
//         console.log("getting data3...") // its pyramid structure = "pyramid of  doom"
//         getData(3,()=>{
//             console.log("getting data4...")
//             getData(4)
//         });
//     });
// }); 

// now for solving callback hell problem we have = promises
// promises ; 

// let promise = new Promise((resolve,reject) => { // always capital "P" in= Promises 
//     console.log("i am a new promise "); // (resolve,reject are callback provided by js
//     resolve("success");
// });


// function getData(dataId,gateNextData) {
//     return new Promise((resolve,reject) => {
//       setTimeout(() =>{
//         console.log("  dataId :",dataId)
//         resolve("success");
//         if(gateNextData){
//             gateNextData();
//         }
//       },5000);
// });
// }



// const getPromise = () => {
//     return new Promise((resolve,reject) =>{
//         console.log("i am a promise");
//         resolve("success");
//         // reject("network error rejected")
//     });
// };

// let promise = getPromise();    // if error or reject occurs in this case this function never work
// promise.then((res) => {
//     console.log("promise fulfilled " ,res);
// });

// promise.catch((err)=>{
//     console.log("rejected", err);
    

// });

// promise chain ; 

function asyncFunc1(){
    return new  Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("success")
        },4000); 
    })
     
}


function asyncFunc2(){
    return new  Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data2");
            resolve("success")
        },4000);
    })
     
}



console.log("fetching data1...")
asyncFunc1().then((res) => { 
console.log("fetching data2...")
asyncFunc2().then((res) => { });
});
 