import * as WorkAround from "./workAround.js";

let salary = 100000;

printInformation(WorkAround.getEmployeeInformation(10000));
printInformation(WorkAround.getEmployeeInformation(50000));
printInformation(WorkAround.getEmployeeInformation(100000));

function printInformation(information) {
  const element = document.createElement("p");
  element.innerHTML = information;
  document.body.appendChild(element);
}
