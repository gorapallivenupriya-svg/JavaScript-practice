/*
 console.log(`Hello`);

// console.log(`I`);
document.getElementById("myH1").textContent =`Hello`;
document.getElementById("myP").textContent =`pizza`;
// let x;
// x=100;
// console.log(x);
// let y=123;
// let age=25;
// console.log(`you are ${age} years old`);
// console.log(typeof age);
// let name="bro123";
// let r=false;
// window.alert(`This is an alert`);
*/

/*
let fullname = "Bro Code";
let age=25;
let isStudent = false;
document.getElementById("p1").textContent fullname;
document.getElementById("p2").textContent =age;
document.getElementById("p3").textContent =isStudent;
*/

/*
let s=1;
s=s**2;//exponent
console.log(s);
*/


/*let user;
user=window.prompt("What is ur user name?");
console.log(user);*/


/*
let username;
document.getElementById("mySubmit").onclick = function(){
username=document.getElementById("myText").value;
//console.log(username);
document.getElementById("myH1").textContent = `Hello ${username}`;
}
*/

/*
// let age=window.prompt("Age??");
// age = Number(age);
// age+=1;
//console.log(age,typeof age);//prints--181 exactly not 19 for 18 input

let x="pizza";
let y="pizza";
let z="pizza";
// console.log();
// console.log(username);
// console.log(username);
x=Number(x);
console.log(x,typeof x);
*/

/*
const pi=3.14159;
let radius;
let circumference;
//radius = window.prompt(`Enter the radius of the circle`);
//radius = Number(radius);
//circumference=2*pi*radius;
//console.log(circumference);
document.getElementById("mySubmit").onclick=function(){
    radius=document.getElementById("myText").value;
    radius = Number(radius);
    circumference=2*pi*radius;
    document.getElementById("myH3").textContent = circumference+"cm";
}
    */

/*
//counter program
const decreaseBtn=document.getElementById("decreaseBtn");
const resetBtn=document.getElementById("resetBtn");
const increaseBtn=document.getElementById("increaseBtn");
const countLabel=document.getElementById("countLabel");
let count =0;
increaseBtn.onclick=function()
{
    count++;
    countLabel.textContent=count;
}
decreaseBtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}
resetBtn.onclick= function()
{
    count=0;
    countLabel.textContent=count;
}
    */

/*let x=3.99;
let y=2;
let z;
z=Math.round(x);console.log(z);
z=Math.floor(x);console.log(z);
z=Math.ceil(x);console.log(z);
z=Math.trunc(x);console.log(z);
z=Math.pow(y,y);console.log(z);//sin,cos,abs,tan,log,sqrt,sign(1,-1,0),max,min
*/

/*
//let randomNum = Math.floor(Math.random() * 6);
//console.log(randomNum);
const min=50;
const max=100;
let randomNum = Math.floor(Math.random() * (max-min))+min;
console.log(randomNum);*/

/*
const myButton=document.getElementById("myButton");
const myLabel=document.getElementById("myLabel");
const min=1;
const max=6;
let randomNum;

myButton.onclick=function(){
    randomNum = Math.floor(Math.random() * max)+min;
    myLabel.textContent=randomNum;
}
    */

/*const myText=document.getElementById("myText");
const mySubmit=document.getElementById("mySubmit");
const resultElement=document.getElementById("resultElement");
mySubmit.onclick=function(){
    let age;
age=myText.value;
age=Number(age);
if(age>=18){
    resultElement.textContent=`You are old enough to enter this site`;
}
else{
    resultElement.textContent=`No`;
}
}*/

/*
//checked box

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You r subscribed`;
}
else {
    subResult.textContent = `You r'nt subscribed`;
}
if(visaBtn.checked){
    paymentResult.textContent=`vth visa`;
}
else if(masterCardBtn.checked){
    paymentResult.textContent=`vth masterCard`;
}
else {
    paymentResult.textContent=`plz select`;
}
}*/

/*
//terenary operator


let age=19;
let mes=age>=18?"Student":"not" ;
console.log(mes);

let pu=125;
let dis=pu>=100?10:0;
console.log(`total is $${pu-pu*(dis/100)}`);
*/


/*
//switch case
let day=1;
switch(day){
    case 1:console.log("Monday");
    break;
    case 2:console.log("Tuesday");
    break;
    default:
    console.log("None");
}

let ts=88;
let letg;
switch(true){
    case ts>=90:
        letg="A";
    break;
    case ts>=80:
        letg="B";
    break;
}
console.log(letg);*/

/*
//string methods(manupulation)
let user="BroCode   ";
console.log(user.charAt(0));
console.log(user.indexOf('o'));
console.log(user.lastIndexOf('o'));
console.log(user.length);
user=user.trim();
console.log(user);
user=user.toUpperCase();
console.log(user);
user=user.toLowerCase();
user=user.repeat(3);
console.log(user);
let o=user.startsWith("b");
console.log(o);
let op=user.endsWith("b");
console.log(op);
let ope=user.includes("b");
console.log(ope);
let phno="123-456-7890";
phno=phno.replaceAll("-","");
console.log(phno);
phno1=phno.padStart(15,"0");
console.log(phno1);
phno=phno.padEnd(15,"0");
console.log(phno);

*/


/*
//string slicing

// const fl="Bro Code";
// let frN=fl.slice(0,fl.indexOf(" "));
// let ln=fl.slice(fl.indexOf(" ")+1);

// let frN=fl.slice(0,3);
// let ln=fl.slice(4,8);
// console.log(frN);
// console.log(ln);
// let ln2=fl.slice(-2);
// console.log(ln2);
const email="Bro@gmail.com";
let user = email.slice(0,email.indexOf("@"));
console.log(user);
let user=window.prompt("Name??");
let letter=user.charAt(0);
letter=letter.toUpperCase();
let extra=user.slice(1);
user=letter+extra;
console.log(user);
*/

/*
//method chaining
//let user="Bro Code";
let user=window.prompt("Name??");
user=user.trim().charAt(0).toUpperCase()+user.trim().slice(1).toLowerCase();
console.log(user);
*/

//===(is values and datatypes are equal).....!==(same)


/*
//loops
let user="";
while(user===""||user===null)
{
    user=window.prompt(`Name??`);
}
console.log(`Hello ${user}`);
*/

/*
//number guessing game
const min=1;
const max=100;
const answer=Math.floor(Math.random()*(max-min+1))+min;
let attemps=0;
let guess;
let running = true;

while(running)
{
    guess=window.prompt(`Number`);
    guess=Number(guess);
    if(isNaN(guess))
    {
        window.alert(`Enter correct number`);
    }
    else if(guess<min||guess>max){
        window.alert(`Enter correct number`);
    }
    else {
        attemps++;
        if(guess<answer){
            window.alert(`a bit high`);
        }
        else if(guess>answer){
            window.alert(`a bit low`);
        }
        else if(guess=answer){
            window.alert(`correct`);
            running=false;
        }
        }
    }
window.alert(`It took you ${attemps} attempts to guess the correct number!`);
// Or print it to the browser console:
console.log(`Total attempts: ${attemps}`);
*/

/*
//functions

function happyBirthday(age){
    console.log(`HappyBirthday ${age}`);
    console.log("HappyBirthday ${age}");
}
happyBirthday(25);

function add(x,y){
   return x+y;
}
let ans=add(2,3);
console.log(ans);*/

//variable scope


//temperature conversion
//only js left

/*
//arrays
let fru=["bac","apple","banana"];
console.log(fru[0]);
fru.push("coco");
fru.pop();
fru.unshift("gaga");
fru.shift();
let num=fru.length;
let index=fru.indexOf("apple");
fru.sort().reverse();
fru.sort();
for(let fruits of fru){console.log(fruits);}
*/

/*
//spread operator(...)
let nums=[1,2,3,4,5];
let maxi=Math.max(...nums)
console.log(maxi);
let user="Venu Priya"
let letters=[...user]
console.log(letters)
let fru=["bac","apple","banana"];
let veg=["car","beet"]
let foo=[...fru,...veg,"eggs","milk"];
console.log(foo);
*/

/*
//rest parameters(bundles(oppsite to spread))
function openfridge(...foods)
{
    console.log(...foods)
}
function getfood(...foods){
    return foods;
}
const f1="pizza";
const f2="hamburger";
//openfridge(f1,f2);
const foods=getfood(f1,f2);
console.log(foods);
function sum(...numbers)
{
    let result=0;
    for(let number of numbers){
        result +=number;
        }
        return result;
}
function getAverage(...numbers)
{
    let result=0;
    for(let number of numbers){
        result +=number;
        }
        return result/numbers.length ;
}
const total=getAverage(75,74,89);
console.log(total);
function combined(...strings){
    return strings.join("*");
}
const full=combined("mr.","Sampu");
console.log(full);
*/


//dice roller  3:44

//random password generator  3:58

/*
//callback (passed as an argument to another function)can use settimeout, setinterval,
//  event listeners,like setTimeout(function(){console.log(`Hello`)},3000) and 
// setInterval(function(){console.log(`Hello`)},3000) to allow other functions to run while waiting for the timer to finish
//and higher order functions (takes a function as an argument or returns a function)
hello(goodBye);
//goodBye();
function hello(callback){
    console.log(`Hello`);
    callback();
}
function wait(){
    console.log(`wait`);
}
function leave(){
    console.log(`leave`);
}
function goodBye(){
    console.log(`GoodBye`);
}function sum(callback,x,y){
    let result=x+y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}
sum(displayConsole,2,3);
function displayAlert(result){
    document.getElementById("myH1").textContent=result;
}
*/

/*
//forEach()
let numbers=[1,2,3,4,5];
numbers.forEach(double);
numbers.forEach(display);
function double(element,index,array){
    array[index]=element*2;
}
function display(element){
    console.log(element);
}
let fruits=["apple","banana","mango"];
fruits.forEach(capitalize);
fruits.forEach(displayFruit);
function capitalize(element,index,array){
    array[index]=element.charAt(0).toUpperCase() + element.slice(1);
}
function displayFruit(element){
    console.log(element);
}*/

//.map()  creates a new array with the results of calling a provided function on every element in the calling array
let numbers=[1,2,3,4,5];
let doubled=numbers.map(double);
function double(element){
    return element*2;
}
console.log(doubled);