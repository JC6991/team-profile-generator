// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// const Employee = require('./Employee');

class Manager {
    constructor(manager) {
        this.manager = manager;
        
        Manager.lastId++;
        this.id = Manager.lastId;
    }
}

Manager.lastId = 0;

module.exports = Manager
