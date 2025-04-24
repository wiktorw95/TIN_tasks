class Person{
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old. I live in ${this.city}.`;
    }
    canVote(){
        return this.age >= 18;
    }
    changeCity(newCity){
        this.city = newCity;
    }
}