// Parent Class
class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level}.`);
    }
    static pickSubstituteTeacher(substituteTeachers) {
      let randomNumber = Math.floor(Math.random()*substituteTeachers.length);
      return substituteTeachers[randomNumber];
    }
    set numberOfStudents(newNumberOfStudents) {
      if (typeof newNumberOfStudents === "number") {
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log("Invalid input: numberOfStudents must be set to a Number.");
      }
    }
  }
  
  // Primary School Subclass
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    } 
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  // Middle School Subclass
  class MiddleSchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'middle', numberOfStudents);
      this.pickupPolicy = pickupPolicy;
    } 
    get pickupPolicy() {
      return this._pickupPolicy;
    } 
  }
  
  // HighSchool Subclass
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  // Primary and HighSchool Instances
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked by a parent, guardian, or a family member over the age of 13.');
  
  lorraineHansbury.quickFacts();
  
  const substitutes = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeams);