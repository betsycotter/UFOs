// import the data from data.js 12.2.4
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement 12.3.1
function printHello() {
  console.log("Hello there!");
}

// Takes two numbers and adds them 12.3.2
function addition(a, b) {
  return a + b;
}

// Functions can call other functions 12.3.2
function doubleAddition(c, d) {
  var total = addition(c, d) * 2;
  return total;
}

// Converted to an arrow function 12.3.3
addition = (a, b) => a + b;

doubleAddition = (c, d)
=> addition(c, d) * 2;

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// for loop examples: 
// example 1 using friends list above 12.4.1: 
function listLoop(userList) {
  for (var i = 0; i < userList.length; i++) {
    console.log(userList[i]);
  }
}; 

// example 2 12.4.2: 
var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
};

// example 3: 
for (var i = 0; i < 5; i++) {
  console.log("I am " + i);
};

// 12.5.1 function: 
function buildTable(data) {
  tbody.html("");
}

// 12.5.2
data.forEach((dataRow) => {
  let row = tbody.append("tr");
  Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
  );
});

// full function from 12.5.1 and 12.5.2
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}