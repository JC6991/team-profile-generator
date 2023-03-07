// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// requires the Employee class
const Employee = require('./Employee');

// Manager is a subclass of Employee
class Manager extends Employee {
    // constructor parameters
    constructor(name, id, email, officeNumber) {
        // super defines the parameters that are inherited from the Employee class
        super(name, id, email);

        this.officeNumber = officeNumber;    
    };

    getOfficeNumber() {        
        return this.officeNumber;
    };

    getRole() {
        return 'Manager';
    };
}


module.exports = Manager;
