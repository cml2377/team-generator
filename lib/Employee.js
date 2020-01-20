function Employee(name, id, title) {
    // We build a constructor that is a blueprint for creating a new employee with information. Employees encompass Intern, Engineer, and Manager.
    if (typeof name !== "string" || !name.trim().length) {
        throw new Error("Expected parameter 'name' to be a non-empty string");
    }

    this.name = name;
    this.id = id;
    this.title = title;
    //getName()
    //getID()
    //getEmail()
    //getRole()

}

module.exports = Employee;