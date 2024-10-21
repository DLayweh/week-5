//strings: order list of characters

text = "ABC"
console.log(text[0])
console.log(text[text.lenth -1])

//Array- orderd list of values
list = ["apple", "banana", "cherry" ]
console.log(list[0])
console.log(list[2])
console.log(list[list.length -1])



const fruit = { "a" : "apple", "b" : "banana", "c" : "cherry"};

console.log(fruit["a"])
console.log(fruit["c"])
console.log(fruit.b)//dot (.) value

lunch = {
    B : "Bread",
    R : "Rice",
    S : "Stew"
}
console.log(lunch.B)
console.log(lunch.R)
console.log(lunch.S)


const person ={
    first: "Diamond",
    last: "Karway",
    age: "25",
    phone: "444-444-4444",
    DOB: ("6-06-1989")
};

person.hobby = "pool"; //add one more property and define its value

console.log(person.DOB)
console.log(person.phone)
console.log(person.hobby)
console.log(person.age)

const fruit2 = [
    "apple", //0
    "banana", //1
    "cherry", //2
];
console.log(fruit2[1])