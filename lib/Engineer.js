const Employee = require('./Employee');


// Engineer class extends the class of Employee-- so you don't have to grab name/id/title again. Adds github link.
class Engineer extends Employee {
    constructor(name, id, title, github) {
        // We build a contructor that will provide the layout/information for a new Engineer.
        super(name, id, title);
        // getGithub();
        this.github = github;

        //getRole() = Engineer;
    }
}

module.exports = Engineer;