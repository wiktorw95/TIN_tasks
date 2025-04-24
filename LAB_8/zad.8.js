class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getDetails() {
        return `Pracownik: ${this.name}, Pensja: ${this.salary}`;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    getDetails() {
        return `Kierownik: ${this.name}, Pensja: ${this.salary}, Dział: ${this.department}`;
    }
}