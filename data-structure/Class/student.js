class Student {
  constructor(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.tardies = 0;
    this.scores = [];
  }

  // instance methods
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "You are expelled!!!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce((acc, cur) => acc + cur, 0);
    return sum / this.scores.length;
  }

  // class method
  static enrollStudents(...students) {
    console.log(students);
    return "ENROLLING STUDENTS!";
  }
}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Jerry", "Park", 3);

console.log(firstStudent.fullName()); // "Colt Steele"
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());

console.log(secondStudent.scores);
console.log(secondStudent.addScore(50));
console.log(secondStudent.addScore(100));
console.log(secondStudent.calculateAverage());

console.log(Student.enrollStudents(firstStudent, secondStudent));
