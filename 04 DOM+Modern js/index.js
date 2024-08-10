// document.addEventListener('click',function(){
//     console.log('I have clicked on the document');
// }); 

// incorrect 
// document.addEventListener('click',function(){
//          console.log('I have clicked on the document');
//      }); 
// document.removeEventListener('click',function(){
//         console.log('I have clicked on the document');
//     });      

// correct way
//  function eventfun(){
//     console.log('I have clicked on the document');
//  }

//  document.addEventListener('click',eventfun  ); 
// document.removeEventListener('click',eventfun  ); 

// const content=document.querySelector('#wrapper');
// content.addEventListener('click',function(event){
//    console.log(event);
// })

// let links=document.querySelector('a');
// let thirdLink=links[2];
// thirdLink.addEventListener('click',function(event){
//    event.preventDefault();
//    console.log('maza aaya');
// });

// let myDiv=document.createElement('div');

// for(let i=1;i<=100;i++){
//    let newElement=document.createElement('p');
//    newElement.textContent='This is para'+i;

//    newElement.addEventListener('click',function(event){
//       console.log('I have clicked on para' );
//    }); 
//    myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// optimize


// let myDiv=document.createElement('div');

// function paraStatus(event){
//    console.log('para' + event.target.textContent );
// }

// myDiv.addEventListener('click',paraStatus); 

// for(let i=1;i<=100;i++){
//    let newElement=document.createElement('p'); 
//    newElement.textContent='This is para'+i;

  
//    myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


//   let element=document.querySelector('#wrapper');

//   element.addEventListener('click',function(event){
//    if(event.target.nodeName==='SPAN'){
//       console.log('span pr click kiya hai'+ event.target.textContent);
//    }
   
//   });
