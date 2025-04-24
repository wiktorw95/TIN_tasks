class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return "Jestem zwierzęciem.";
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    fetch(item) {
        return `${this.name} aportuje ${item}.`;
    }
}