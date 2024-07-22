 
// //object create
//  let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };
// // factory function

// function createRectangle(len,bre){
//     return rectangle = {
//         length: len,
//         breadth: bre,
    
//         draw: function(){
//             console.log('drawing rectangle');
//         }
//     };
//    // return rectangle;
  
// }

// let rectangleObj1=createRectangle(5,4);
// let rectangleObj2=createRectangle(2,3);
// let rectangleObj3=createRectangle(7,9);




// //Camelcase -> numberOfStudents
// //constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
// //constructor function -> prop/methods -> intialise/Define

// function Rectangle(){
//     this.length=1;
//     this.breadth=2;
//     this.draw=function(){
//         console.log('drawing');
//     }
// }

// //object creation using constructor

//  let rectangleObject=new Rectangle();

//  rectangleObject.color='yellow';
//  console.log(rectangleObject);

//  delete rectangleObject.color;
//  console.log(rectangleObject);

//  let rectangle1=new Function(
//     'length','breadth',
//     this.length=1;
//     this.breadth=2;
//     this.draw=function(){
//         console.log('drawing');
//     }

//  );

 //object creation using Rectangle1

//  let rect=new rectangle1(2,3);
//  rect.length;
//  console.log(rect);

// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);


// let a = { value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a=10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);

// let a={value:10};
// function inc(a){
//     a.value++;
// }

// inc(a);
// console.log(a.value);

let rectangle = {
    length:2,
    breadth:4
};

//for-in loop 
// for(let key in rectangle ) {
//     //keys are reflected through key variable 
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

//for-of loop
// for(let key of Object.entries(rectangle)) {
//     console.log(key);
// }


// if('length' in rectangle) {
//     console.log('Present');
// }
// else {
//     console.log('Absent');
// }


//object - colone #1
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);


//Object Cloning #2
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = { value: 25};

// let dest = Object.assign({}, src, src2);

// console.log(dest);

// src.a++;

// console.log(dest);


//Object Cloning #3
// let src = {
//     a: 10,
//     b:20,
//     c:30
// };

// let dest = {...src};

// console.log(dest);

// src.a++;

// console.log(dest);




 