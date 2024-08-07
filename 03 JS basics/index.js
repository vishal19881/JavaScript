//console.log("whats upp");

// fun declaration
//  function run(){
//     console.log('running');
//  }
//  //fun call or invoke

//  run();

//  //Names function assignment

//  let stand=function walk()
//  {
//     console.log('walking');
//  };
// stand();
// // Anonymous function assignment
// let stand2= function() {
//     console.log('walking');
// }
// stand2();

// let x=1;
// x='a';
// console.log(x);

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,2,3,4,4));


// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// }
// let ans=console.log(sum(1,2,3,4,5,6,78,0));


// function sum(a,b){
//     let total=0;
//     for(let value of arguments)
//         total+=value;
    
    
//     return total;
// }
// let ans=console.log(sum(1,2,3,4,5,6,78,0));

// function sum(){
//     let total=0;
//     for(let value of arguments)
//         total+=value;
    
    
//     return total;
// }
// let ans=console.log(sum(1,2,3,4,5,6,78,0)); 

// function sum(...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6);

// function sum(a,...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6);

// rest parameter must be last 
// b not allowed

// function sum(a,...args,b){
//     console.log(args);
// }
// sum(1,2,3,4,5,6);

// default parameter

// function interest(p,r=5,q=5)
// {
//     return p*r*q/100;
// }
// console.log(interest(1000,10.5));

// function interest(p,r=5,q=5)
// {
//     return p*r*q/100;
// }

// GETTER SETTER
// getter->access properties
// setter->change properties


// console.log(interest(1000,undefined,5));

// let person={
//     Name:'Love',
//     lName:'Babbar',
    
// };

// function fullName(){
//     return `${person.Name} ${person.lName} `;
// }

// // console.log(person);

// function fullName(){
//     return `${person.Name} ${person.lName} `;
// }
// // issue->read only

// console.log(fullName());



// let person={
//     Name:'Love',
//     lName:'Babbar',
    
//     get fullName(){
//     return `${person.Name} ${person.lName} `;
//     },
//     set fullName(value){
//         if(typeof value !== string){
//             throw new Error("you have not send a string");
//         }
//         let parts=value.split(' ');
//         this.fName=parts[0];
//         this.lName=parts[1];
//     }
// };


// try{
//     person.fullName='rahul kumar';
// }
// catch(e){
//     alert('you have send nuns in full name');
// }

// try{
//     person.fullName=true;
// }
// catch(e){
//     alert(e);  
// }

// // person.fullName='Rahul Kumar';
// console.log(person.fullName);

// SCOPE

// {
//     let a=5;
   
// }
// console.log(a);

// function walk()
// {
//     var a=5;
// }
// console.log(a);

// for(var i=0;i<10;i++)
// {

// }
// console.log(i);

// if(true)
// {
//    let a=5; 
// }
// console.log(a);


// if(true)
//     {
//        var a=5; 
//     }
//     console.log(a);

// function a(){
//     const a=5;
// }
// const ab=5;
// function b(){
//     const ab=5;
// }

//sorting
// let a=[10,5,4,25];
// a.sort(function(a,b){
//     return a-b;
// })
// console.log(a);

// Reducing an array

// let arr=[1,2,3,4];
// let total=0;
// for(let val of arr)
// {
//     total=total+val;
// }
// console.log(total);

// let totalSum=arr.reduce((accumulator,currValue)=>accumulator+currValue,0);
// console.log(totalSum);

// if acc not initialise with zero then it initialised with curr val
// let totalSum=arr.reduce((accumulator,currValue)=>accumulator+currValue);
// console.log(totalSum);