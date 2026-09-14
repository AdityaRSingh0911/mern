const http=require('http')
const server=http.createServer((req,res)=>{
    const cookie=req.headers.cookie
    res.writeHead(200,{'content-type':'text/plain'})

    if(cookie){
        res.write("cookie received\n")
        res.write(cookie)
    }
    else{
        res.write("No cookies found in request header")
    }
    res.end()
})

server.listen(3000,()=>{
    console.log("Server running at http://localhost:3000/")

})