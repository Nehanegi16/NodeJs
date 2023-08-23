const myobj={
    name:"neha",
    age:"21",
    rollno:24,
    location:"pune"
}
//convert the object data into the json data
const jsondata=JSON.stringify(myobj) //stringify() this menthod is use to convert data in json 
console.log(jsondata)

//convert the json data into obj data
const objdata=JSON.parse(jsondata) ///parse() metnod is use to convert  the json data in obj data
console.log(objdata)