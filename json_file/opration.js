const fs=require('fs')

const obj={
    firstname:"neha",
    lastname:"negi",
    class:"bca",
    year:"3year"
}
const json=JSON.stringify(obj)
fs.writeFileSync("data.json",json,(err)=>{
    console.log("file created successfuly")
})

fs.readFile("data.json","utf-8",(err,data)=>{
  console.log(data)
  const objdata=JSON.parse(data)
console.log(objdata)

})

