const express=require('express')
const bodyParser=require('body-parser')
const app=express()

app.use(bodyParser.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/lab5.html')
})

app.post('/login',(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    if(email==='user@example.com' && password==='password'){
        res.send('login successfull!')
    }
    else{
        res.send('invalid email or password')
    }
})

const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})