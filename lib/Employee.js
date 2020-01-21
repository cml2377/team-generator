function Employee(name, id, title) {
    // We build a constructor that is a blueprint for creating a new employee with information. Employees encompass Intern, Engineer, and Manager.
    if (typeof name !== "string" || !name.trim().length) {
        throw new Error("Expected parameter 'name' to be a non-empty string");
    }

    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;

    function getName(Employee) {
        console.log(`Employee Name: ${this.name} `);
    };

    function getID(Employee) {
        console.log(`Employee ID: ${this.id}`);
    };

    function getTitle(Employee) {
        console.log(`Employee Title: ${this.title}`);
        //There are 3 different titles: Engineer, Manager, and Intern
    }

    function getEmail() {
        console.log(`Employee Email: ${this.email}`)
    }

    function getRole() {
        console.log(`Employee Role: ${this.getRole}`)
    }

};



module.exports = Employee;