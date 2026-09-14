const express=require('express');
const app=express();

//Route to find prime numbers less than 100
app.get('/find_prime_100',(req,res)=>{
    const primes=findPrimes(100);
    res.send(`Prime numbers less than 100:${primes.join(',')}`);
});


//Route to find cubes less than 100
app.get('/find_cube_100',(req,res)=>{
    const cubes=findCubes(100);
    res.send(`Cubes less than 100:${cubes.join(',')}`);
});

//Function to find prime numbers less than a given number
function findPrimes(limit){
    const primes=[];
    for(let num=2;num<limit;num++){
        let isPrime=true;
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i==0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            primes.push(num);
        }
    }
    return primes;
}


// Function to find cubes less than a given number
function findCubes(limit){

    const cubes = [];

    for(let i = 1; i * i * i < limit; i++){
        cubes.push(i * i * i);
    }

    return cubes;
}


//Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});