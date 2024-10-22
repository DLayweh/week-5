/*let emp1 = {
    employeeId: "1",
    name: "Ezra",
    jobTitle: "Theater Teacher",
    payRate: 38.46
};
console.log(emp1.employeeId)
console.log(emp1.name)
console.log(emp1.payRate)
console.log(emp1.jobTitle)

let emp2 = {
    employeeId: "2",
    name: "Elisha",
    jobTitle: "Game Programmer",
    payRate: 43.27
};
console.log("Employee 1: " + emp1.name + emp1.payRate);
console.log("Employee 2: " + emp2.name + emp2.jobTitle);


function printEmployeeAndPay(emp) {
    console.log("Name: " + emp.name);
    console.log("Pay: " + emp.payRate);
}
let emp3 = {
    employeeId: "1",
    name: "Ezra",
    jobTitle: "Theater Teacher",
    payRate: 38.46
};
let emp4 = {
    employeeId: "2",
    name: "Elisha",
    jobTitle: "Game Programmer",
    payRate: 43.27
};
printEmployeeAndPay(emp3);
printEmployeeAndPay(emp4);
*/


/*function createPayStub(id, name, payRate, hoursWorked) {
    let grossPay = 0;
    if (hoursWorked <= 40) {
        grossPay = payRate * hoursWorked;
    }
    else {
        grossPay = (40 * payRate) +
            ((hoursWorked - 40) * 1.5 * payRate);
    }
    let payStub = {
        employeeId: id,
        name: name,
        grossPay: grossPay
    };
    return payStub;
}
let emp1PayStub =
    createPayStub("1", "Ezra", 38.46, 49);
console.log(emp1PayStub.name + " earned $" +
    emp1PayStub.grossPay.toFixed(2));
let emp2PayStub =
    createPayStub("2", "Elisha", 43.27, 42);
console.log(emp2PayStub.name + " earned $" +
    emp2PayStub.grossPay.toFixed(2));

*/

let myInfo = {
    name: "Diamond ",
    address: "121 Main Street",
    city: "powdwesperings",
    State: "Georgia",
    zip: "20123",
};
console.log (myInfo.name)
console.log (myInfo.address)
console.log (myInfo.State)
console.log (myInfo.zip)
