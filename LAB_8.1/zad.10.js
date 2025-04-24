function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function() {
    return this.name + ` makes a noise.`;
};

function Mammal(name, furColor){
    Animal.call(this, name);
    this.furColor = furColor;
}
Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

function Dog(name, furColor){
    Mammal.call(this, name, furColor);
}
Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.fetch = function() {
    return this.name + ` fetches.`;
};

const fafik = new Dog('Fafik', 'brown');