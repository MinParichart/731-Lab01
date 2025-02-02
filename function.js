// ทดสอบเขียน function ในรูปแบบ Function Declaration
// function greet (name){ 
//     console.log('Hello ' + name); 
// }
// greet ('John'); 

// การใช้งาน function ให้คืนค่าจากการคำนวณ 
// function greet (name){ 
//     return 'Hello ' + name; 
// }
// console.log(greet('John'));

// โปรแกรมที่รับ list เป็นคะแนนของนักศึกษา
function SumScore (score){ 
    let sum = 0; 
    for (let i = 0; i < score.length; i++){ 
        sum += score[i]
    }
    return sum
}
console.log(SumScore([10,20,30]));