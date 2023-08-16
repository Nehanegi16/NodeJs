
const fs=require("fs")
// fs.mkdirSync("thapa")
//  fs.writeFileSync("thapa/bio.txt","hello my name is neha  ")
//  fs.appendFileSync("thapa/bio.txt","negi i hope you all are well")
// const qura=fs.readFileSync("thapa/bio.txt","utf8")
// console.log(qura)

// fs.renameSync("thapa/bio.txt","thapa/hello.txt")

// fs.mkdirSync("CRUD_opration")
fs.writeFileSync("CRUD_opration/first.txt","Hy everyone how are you ")
fs.appendFileSync("CRUD_opration/first.txt","I hope you all are verry happy and verry well")
fs.renameSync("CRUD_opration/first.txt","crud.txt")

fs.appendFileSync("CRUD_opration/crud.txt","happy independentday")
const read=fs.readFileSync("CRUD_opration/crud.txt","utf8")
console.log(read)
fs.unlinkSync("CRUD_opration/crud.txt")