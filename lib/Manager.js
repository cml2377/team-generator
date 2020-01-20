const Employee = require('./Employee');

// Manager class extends the class of Employee-- so you don't have to grab name/id/title again. Adds officeNumber.
class Manager extends Employee {
    constructor(name, id, title, officeNumber) {
        // We build a constructor in order to store information on individual managers, using this blueprint.

        // super calls Employee
        super(name, id, title);

        // this grabs officeNumber
        this.officeNumber = officeNumber;

        // getRole() = Manager;
    }
}

module.exports = Manager;