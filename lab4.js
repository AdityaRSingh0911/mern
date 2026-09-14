const car={
    brand:'Toyota',
    model:'Corolla',
    year:2020,
    color:'blue'
}

console.log('Original car properties:')
for(const property in car){
    console.log(`${property}:${car[property]}`)
}

const secondProperty=Object.keys(car)[1]
delete car[secondProperty]
console.log(`\nDeleted ${secondProperty}`)

console.log('\nUpdated car properties:')
for(const property in car){
    console.log(`${property}:${car[property]}`)
}

const length=Object.keys(car).length
console.log(`\nLength of the car object:${length}`)