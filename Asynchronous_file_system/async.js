const fs=require("fs")
// fs.writeFile("test.txt","hello people its my new page",()=>{
//     console.log("work is done")
// })

// fs.readFile("test.txt","utf8",(err,data)=>{
//     console.log("your data is in proprss")
//     console.log(err)
//     console.log(data)

// })
fs.appendFile("test.txt","I hope you all like this give me review as a reward",()=>{
    console.log("confirm")
})
fs.rename("test.txt","demo.txt",()=>{
    console.log("rename confirm")
})