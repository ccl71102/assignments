
const employees = [];

function Employee(name, title, salary, status = "Full Time") {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function(){
        console.log("Name: " + this.name);
        console.log("Title: " + this.title);
        console.log("Salary: " + this.salary);
        console.log("Status: " + this.status);
    }
}

const e1 = new Employee("Steve","Supervisor","$60/hour");
const e2 = new Employee("Sarah","Super Supervisor","$70/hour");
const e3 = new Employee("Nathan","CEO","$1000/hour");

e1.status = "Contract";

employees.push(e1);
employees.push(e2);
employees.push(e3);

employees.forEach(item => item.printEmployeeForm());





