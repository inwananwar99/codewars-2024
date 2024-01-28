// function grow(x) {
//     let result = x[0]
//     for (let index = 1; index < x.length; index++) {
//         result = result * x[index]
//     }
//     return result;
//   }


const grow = (x) => x.reduce((acc, current) => acc*current,1)
console.log(grow([1,2,3,4]))