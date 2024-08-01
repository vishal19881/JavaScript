// console.log('Hello jee');

// let lastName='Babbar';
// let firstName=new String('love');

// let message='This is my first Messge';
// let words=message.split(' ');

// console.log(words);

// let messge='This is \n my first \n Messge';
// console.log(messge);

// let mssge=`This is ${lastName} 
// my first
// Messge`;
// console.log(mssge);

// let date=new Date();
// console.log(date);

// let date2=new Date('June 20 1998 07:15');
// console.log(date2);

// let date3=new Date(1998,11,20,7);
// console.log(date3);

// let date4=new Date(2002,0,6,7);
// console.log(date4);

// date3.setFullYear(2000);
// console.log(date3);

// let numbers=[1,4,5,7];
// console.log(numbers);

// Insertion
//end->push
//beginning->unshift
//middle->splice

//Searching
// console.log(numbers);
// console.log(numbers.indexOf(9));

//we want to check if a number exist in an array
// if(numbers.indexOf(4) !=-1)
//     console.log("present");

// console.log(numbers.includes(7));
// console.log(numbers.indexOf(4,2));

//array of object

// let courses=[
//     {no:1, name:'love'},
//     {no:2, name:'Rahul'}
// ];

//console.log(courses);

//console.log(courses.includes({no:2, name:'Rahul'}));

// let a=courses.find(function(course){
//     return course.name==='love';
// });
// console.log(a);

// arrow fn
// let a=courses.find(course=>course.name==='love');
// console.log(a);

// Removing Element
//let num=[1,2,3,4,5,6,7];
// //end
// num.pop();
// console.log(num);
// //begining
// num.shift();
// console.log(num);
// //middle
// num.splice(2,1);
// console.log(num);

// emptying array

// let num=[1,2,3,4,5];
// let num2=num;
//  //num=[];
//  //num.length=0;
//  num.splice(0,num.length);

//  console.log(num);
//  console.log(num2);

// combing and slicing arrays

// let first=[1,2,3];
// let second=[4,5,6];

// let combined=first.concat(second);
// console.log(combined);

// // let sliced=combined.slice(2,4);
// // console.log(sliced);
// // let sliced=combined.slice(2);
// // console.log(sliced);
// let sliced=combined.slice(); //full slicing->make original array copy
// console.log(sliced);


// // spread operator
// let first=[1,2,3];
// let second=[4,5,6];

// let combined=[...first,'a',false,...second,'b',true];
// console.log(combined);

// // create copy
// let another=[...combined];


// Iterating a array

// let arr=[10,20,30,40,50];

// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(function(number){
//     console.log(number);
// })

// arrow fn
// arr.forEach(number=>console.log(number));

// Joining array


// let num=[10,20,30,40,50];
// const joined=num.join(',');
// console.log(num);

// let msg='This is my first msg';
// let parts=msg.split(' ');

// console.log(parts);
// let joined=parts.join('_');
// console.log(joined);

// sorting Array

// let num=[40,30,10,20,50];
// num.sort();
// console.log(num);

// num.reverse();
// console.log(num);

// filtering array

// let num=[1,2,-1,-4];
// let filtered=num.filter(function(value){
//     return value>=0;
// });

// console.log(filtered);

// arrow fn
// let num=[1,2,-1,-4];
// let filtered=num.filter(value=>value>=0);

// console.log(filtered);

// mapping array

// let num=[7,8,9,10];
// console.log(num);
// let item=num.map(function(value){
//     return 'student_no'+value;
// })
// console.log(item);

//arrow fn
// let item=num.map(value=>'student_no'+value)
// console.log(item);

 // mapping with objects

//   let num=[1,2,-6,-9];
//   let filtered=num.filter(value=>value>=0);

//   let items=filtered.map(function(num){
//     return {value:num};
//   });
//   console.log(items);

// arrow fn
// let items=filtered.map(num=> {value:num} );
// console.log(items);