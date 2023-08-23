
const http=require("http") //http module
const server=http.createServer((req,res)=>{ // (Request handling logic) createServer method is used to create an HTTP server.It takes a callback function as its argument, which will be executed whenever a request is made to the server. 
    if(req.url=='/'){ 
    res.end("hello from the home side")
    }
    else if(req.url=='/about'){
        res.end("hello from the about side")
    }
    else if(req.url=='/contect')
    {
        res.end("hello from the contect side")
    }else{
        res.writeHead(404,{"content-type":"text/html"}) /// it change the file name in network section in inspect
        res.end("<h1>404 error, this page not exit<h1>")
    }

})
server.listen(8000,"127.0.0.1",()=>{
    console.log("listning from server 8000")

})