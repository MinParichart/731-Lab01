// Higher Order Function
// const n = [1,2,3,4,5]; 
// const square = n.map((num) => num * num); 
// console.log(square); 

// Higher Order Function
// const numList = [1,2,3,4,5]; 
// const even = numList.filter((num) => num % 2 === 0); 
// console.log(even); 

// Higher Order Function
function numberList(num){ 
    const mod3List = num.filter((num) => num % 3 === 0); 
    console.log(mod3List); 

    const power3List = mod3List.map((num) => num**3); 
    console.log(power3List)
    
    return power3List
}

numberList([3,5,7,9,11,12,15,18,20]); 