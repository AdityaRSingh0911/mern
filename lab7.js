//import modules 
const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

const studentSchema=new mongoose.Schema({
    usn:String,
    name:String,
    sem:Number,
    year_of_admission:Number
});

const Student=mongoose.model('Student',studentSchema);
app.post('/addStudent',async(req,res)=>{
    try{
        const student=new Student(req.body);
        await student.save();
        res.send("Student Data Saved Successfully");
    }catch(error){
        res.status(500).send(error);
    }
    
});

app.get('/search/:name',async(req,res)=>{
    try{
        const name=req.params.name;

        //Regex for partial matching (case-insensitive)
        const students=await Student.find({
            name:{$regex:name,$options:'i'}
        });
        res.json(students);

    }catch(error){
        res.status(500).send(error);
    }
});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});



// async function searchStudentsByName(partialName) {
//     const client=new MongoClinet(uri);
//     try{
//         await client.connect();
//         const db=client.db(dbName);
//         const collection=db.collection('students');

//         const query={name:{$regex:partialName,$}}
//     }
    

    
// }