// 1. Create an object with the help of a constructor in which will be stored
// basic employee data:
// - Name
// - Company name
// - Job position (job position can be: employee, director or boss).
// - Salary.
// Instance 3 new objects, enter the data for each employee, then print a list
// (<ul>) with all the details of each employee (in HTML).

function Worker (name, company, jobPosition, salary) {
    this.name = name;
    this.company = company;
    this.jobPosition = jobPosition;
    this.salary = salary;
    
    this.appendLiInList = function () {
        const list = document.createElement("ul")

        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        const li4 = document.createElement("li");

        li1.innerText = this.name;
        li2.innerText = this.company;
        li3.innerText = this.jobPosition;
        li4.innerText = this.salary;

        list.append(li1, li2, li3, li4);
        document.body.append(list)
        
    };
};

const worker1 = new Worker("Blagoja Filiposki", "Brainster", "Programmer", "30000 ден.")
const worker2 = new Worker("Elena Joveska", "Genthgerm", "Operator", "22000 ден.")
const worker3 = new Worker("Jovan Jovanoski", "Kromberg & Schubert", "Line Worker", "23000 ден.")
const worker4 = new Worker("Zoran Mitreski", "Farmer", "Private Business :)", "Зависи колку ќе го откупат житото (отприлика околу 250000 ден. годишно)")

worker1.appendLiInList();
worker2.appendLiInList();
worker3.appendLiInList();
worker4.appendLiInList();
