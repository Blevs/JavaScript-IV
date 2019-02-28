class Person {
  constructor(person) {
    this.name = person.name;
    this.age = person.age;
    this.location = person.location;
    this.gender = person.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(instructor) {
    super(instructor);
    this.specialty = instructor.specialty;
    this.favLanguage = instructor.favLanguage;
    this.catchPhrase = instructor.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }

  calculateGrade(student) {
    const old = student.grade;
    student.grade += Math.floor((Math.random() - 0.5) * 30);
    student.grade = Math.min(student.grade, 100);
    student.grade = Math.max(student.grade, 0);
    console.log(`${this.name} has changed ${student.name}'s grade from ${old} to ${student.grade}`);
  }
}

class Student extends Person {
  constructor(student) {
    super(student);
    this.previousBackground = student.previousBackground;
    this.className = student.className;
    this.favSubjects = student.favSubjects;
    this.grade = student.grade;
  }

  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(subject));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  graduate() {
    if (this.grade >= 70) {
      console.log(`${this.name} has graduated with a grade of ${this.grade}!`)
      return true;
    } else {
      console.log(`${this.name} is not yet able to graduate with a grade of ${this.gradge}.`)
      return false;
    }
  }
}

class ProjectManager extends Instructor {
  constructor(projectmanager) {
    super(projectmanager);
    this.gradClassName = projectmanager.gradClassName;
    this.favInstructor = projectmanager.favInstructor;
  }

  standUp(channel) {
    console.log( `${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

// Test Objects
// Person
var riley = new Person({name: "Riley", age: 27, location: "Chicago", gender: "M"});
riley.speak();

var brad = new Person({name: "Brad", age: 86, location: "Florida", gender: "M"});
brad.speak();

// Student
var henry = new Student({
  name: "Henry",
  age: 25,
  location: "Troy",
  gender: "M",
  previousBackground: "Physics",
  className: "web18",
  favSubjects: ['Lisp', 'Clojure', 'Functional Programming'],
  grade: 80,
});

henry.speak();
henry.listsSubjects();
henry.PRAssignment("Javascript");
henry.sprintChallenge("CSS");

var mike = new Student({
  name: "Mike",
  age: 38,
  location: "Massachusetts",
  gender: "M",
  previousBackground: "Farming",
  className: "web2000",
  favSubjects: ['Computers', 'Keyboards', 'Mice'],
  grade: 40,
});

mike.speak();
mike.listsSubjects();
mike.PRAssignment("Math");
mike.sprintChallenge("Numbers");


// Instructor
var tj = new Instructor({
  name: "TJ",
  age: 38,
  location: "Boston",
  gender: "M",
  specialty: "Chemistry",
  favLanguage: "Excel VBA Macros",
  catchPhrase: "You did that wrong.",
});

tj.speak();
tj.demo("Grouting");
tj.grade(henry, "Tiling");

var doris = new Instructor({
  name: "Doris",
  age: 30,
  location: "Mexico",
  gender: "F",
  specialty: "Dentistry",
  favLanguage: "Spanish",
  catchPhrase: "Don't tell TJ.",
});

doris.speak();
doris.demo("Avacados");
doris.grade(mike, "Babysitting");

// ProjectManager
var jacob = new ProjectManager({
  name: "Jacob",
  age: 26,
  location: "Berkley",
  gender: "M",
  specialty: "String Theory",
  favLanguage: "Mathmatica",
  catchPhrase: "I derived it.",
  gradClassName: "String Theory",
  favInstructor: "TJ",
});

jacob.speak();
jacob.demo("Lee Algebra");
jacob.grade(henry, "Friendship");
jacob.standUp("physics");
jacob.debugsCode(henry, "Derivatives");

var ryan = new ProjectManager({
  name: "Ryan",
  age: 25,
  location: "Chicago",
  gender: "M",
  specialty: "Material Science",
  favLanguage: "Python",
  catchPhrase: "Let me help.",
  gradClassName: "Electromagnetic Theory",
  favInstructor: "Doris",
});

ryan.speak();
ryan.demo("Tensors");
ryan.grade(henry, "GNUPlot");
ryan.standUp("materialscience");
ryan.debugsCode(henry, "Something");

do {
  jacob.calculateGrade(henry);
} while (!henry.graduate());

do {
  tj.calculateGrade(mike);
} while (!mike.graduate());
