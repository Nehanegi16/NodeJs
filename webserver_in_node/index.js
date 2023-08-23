
const http=require("http") //http module
const server=http.createServer((req,res)=>{   //createServer method with two parameters request and response is use to create the server
    res.end("hello from the other side")
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("listning from server 8000")

})