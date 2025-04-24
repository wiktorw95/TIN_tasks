function Person(name, age){
    this.name = name;
    this.age = age;
}
function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

function Teacher(name, age, subject) {
    Person.call(this, name, age);
    this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;