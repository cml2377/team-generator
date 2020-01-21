class Employee {
    // We build a constructor that is a blueprint for creating a new employee with information. Employees encompass Intern, Engineer, and Manager.

    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        this.name = name;
        this.id = id;
        this.email = email;

    }
    // These are all Getters
    getName() {
        // console.log(`Employee Name: ${this.name} `);
        return this.name;
    };

    getId() {
        // console.log(`Employee ID: ${this.id}`);
        return this.id;
    };

    getEmail() {
        // console.log(`Employee Email: ${this.email}`);
        return this.email;
    }

    getRole() {
        // It will return what this object functionally is-- the string: 'employee'
        // console.log(`Employee Role: ${this.getRole}`);
        return "Employee";
    }
}

module.exports = Employee;