function Employee(name, id, title) {
    // We build a constructor that is a blueprint for creating a new employee with information. Employees encompass Intern, Engineer, and Manager.
    this.name = name;
    this.id = id;
    this.title = title;
}

module.exports = Employee;