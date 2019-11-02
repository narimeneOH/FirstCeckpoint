let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];
console.log(pets);

const getAge = (pet) => {
   return new Date().getFullYear() - pet.bornOn
};



pets.map(pet=> {
    pet.age = getAge(pet);
    return pet 
});
let petsWithAge = pets;
console.log(petsWithAge);


let dogs = pets.filter(pet => pet.type === "dog")
console.log(dogs);



let jasper = pets.find( pet => pet.name === "jasper" )
console.log(jasper);



