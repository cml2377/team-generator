const Employee = require('./Employee');


// Intern class extends the class of Employee-- so you don't have to grab name/id/title again. Just adds the school.
class Intern extends Employee {
    // A constructor that provides the blueprint for creating more Interns(objects) and holds their info.
    constructor(name, id, title, school) {

        // super is calling the Employee.js so you don't have to this.name/id/school
        super(name, id, title);
        // getSchool()= school;
        this.school = school;

        // getRole() = Intern;
    }
}

module.exports = Intern;