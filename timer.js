// // High Order Function อื่นๆ - setTimeout()
// waitAndPrint = (message, delay) => { 
//     setTimeout (() => { 
//         console.log(message)
//         message += " World!"
//     }, delay)
// }
// // Usage 
// waitAndPrint("Hello World!", 3000); // 3000 millisec = 3 sec, so 30 millisec = 30 sec


// High Order Function อื่นๆ - setInterval()
waitAndPrintRepeat = (message, delay) => { 
    setInterval (() => { 
        console.log(message)
        message += " World!"
    }, delay)
}
// Usage 
waitAndPrintRepeat("Hello World!", 3000);
