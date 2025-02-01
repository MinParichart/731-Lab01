// Function Expression 
// const greet = function greet (name){ 
//     return 'Hello ' + name; 
// }
// console.log(greet('John'))

// Arrow Function 
// const greet = (name) => 'Hello ' + name; 
// console.log(greet('John'))

// Arrow Function หลายบรรทัด 
// const multiply = (x,y) => { return x + y }
// console.log(multiply (5,10))

// Arrow Function โดยให้รับค่าตัวแปร 2 ค่า แล้วคืนค่าที่มากกว่าออกมา 
const receiveNum = (x,y) => {
    if (x > y){ 
        return x
    } else { 
        return y
    }
}
console.log(receiveNum(8,13)); 