const fs=require('fs')

const http=require("http")
const server=http.createServer((req,res)=>{ 
    const data=fs.readFileSync(`${__dirname}/userapi.json`,'utf8')
    const objd=JSON.parse(data)
    if(req.url=='/'){ 
    res.end("hello from the home side")
    }
    else if(req.url=='/about'){
        res.end("hello from the about side")
    }
    else if(req.url=='/userapi'){ 
        res.writeHead(202,{"content-type":"application/json"})
    res.end(objd[1].rollno)      

   }
   else{
        res.writeHead(404,{"content-type":"text/html"}) /// it change the file name in network section in inspect
        res.end("<h1>404 error, this page not exit<h1>")
    }

})
server.listen(8000,"127.0.0.1",()=>{
    console.log("listning from server 8000")})