// const categoriesArr = document.querySelectorAll('.item');
// console.log(`Number of categories: ${categoriesArr.length}`);
// console.log(""); 

// categoriesArr.forEach((item) => {
//     console.log(`Category: ${item.firstElementChild.textContent}`);
//     console.log(`Elements: ${item.lastElementChild.children.length}`);  
//     console.log(""); 
// }) 



// function solution(str, ending){
//     // TODO: complete
//     str.slice( - ending.length) === ending ? console.log(`true`) : console.log(`false`);
//     console.log(str.slice( - ending.length));
//   }
//   solution('abcвуа', 'вуаv')


//   function maps(x){
//     return x.map(item => item *= 2);
  
//   }
//   maps([1,2,3])

// function padIt(str,n){
//   let leftRight = true;
//   let result = str;
//   for (let i = 0; i < n; i += 1){
//     if (leftRight) {
      
//       result = '*' + result;
//       leftRight = false
//     } else {
//       result = result + '*';
//       leftRight = true;
//     }
//   }
//   return result;
// }
// padIt('qwerty', 17);
// console.log('qwqw' + '*')
// function pickIt(arr){
//   var odd=[],even=[];
//   //coding here
//   arr.map(item => {
//     if (item%2 === 0) {
//       odd.push(item)
//     } else {
//       even.push(item)
//     }
//   })
  
//   console.log([odd,even]) ;
// }
// pickIt([7,25,78,46,56,3])
function infiniteLoop(arr,d,n){
  console.log(arr);
let result = [];
  if (d === 'left') {
    result.push(arr.map(lowArray => {
      for(let i = 0; i <= n; i += 1) {
        lowArray.push(lowArray[lowArray.length - 1] + 1);
        lowArray.shift(lowArray[0]);
      }
      console.log(lowArray);
      return lowArray;
    }))
   

  } else {
    result.push(arr.map(lowArray => {
     for(let i = 0; i <= n; i += 1) {
      lowArray.pop(lowArray[lowArray.length - 1]);
      lowArray.unshift(lowArray[0] - 1);
      }
      console.log(lowArray);
      return lowArray;
    }))
  }
console.log(result)


  
}

infiniteLoop([[1,2],[3,4,5,6],[7,8,9,10]],"right",2)