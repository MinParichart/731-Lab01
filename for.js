// 1.For Loop Number
// let i = 0; 
// for (i = 0; i < 10; i++){ 
//     console.log(i)
// }

// 2.For Loop String 
// let color = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
// for (let i = 0 ; i < color.length; i++){ 
//     console.log(color[i])
// }

// 3.ทดลองเขียนโปรแกรม โดยสร้าง list ของชื้อคน จำนวน 5 คน
let peopleName = ['Labubu', 'James', 'Smith','Nana Ray', 'Crybaby']
for (let i = 0; i < peopleName.length; i++){ 
    if ( peopleName[i].length > 6) { 
        console.log("สวัสดีคุณ : " + peopleName[i])
    } else { 
        console.log("Hello : " + peopleName[i])
    }
}