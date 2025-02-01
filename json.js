// การสร้าง Object จาก JSON
// const object = { 
//     name : "john", 
//     age : 30, 
//     city : "New York"
// }
// console.log(object)
// console.log(object.name)

// สร้าง String จาก JSON 
// const jsonStr = JSON.stringify(object)
// console.log(jsonStr)

// สร้าง function ที่รับ object ของนักศึกษา
const student = { 
    "name" : "Molly Crybaby", 
    "age" : 30, 
    "GPA" : 3.5
}

function studentGPA (student){ 
    if (student.GPA > 2) { 
        const studentJSON = JSON.stringify(student)
        console.log(studentJSON)
        return studentJSON
    } else { 
        console.log(`คุณ ${student.name} พ้นสภาพ`)
        return `คุณ ${student.name} พ้นสภาพ`
    }
}

studentGPA(student);