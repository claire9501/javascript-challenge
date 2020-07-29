// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");
button.on("click", function() {

  // Select the input element 
  var inputFieldDate = d3.select("#datetime");
  var inputFieldCity = d3.select("#city");
  var inputFieldState = d3.select("#state");
  var inputFieldCountry = d3.select("#country");
  var inputFieldShape = d3.select("#shape");

  // Get the value property
  var inputValue1 = inputFieldDate.property("value");
  var inputValue2 = inputFieldCity.property("value");
  var inputValue3 = inputFieldState.property("value");
  var inputValue4 = inputFieldCountry.property("value");
  var inputValue5 = inputFieldShape.property("value");
  
  
  var filteredData = tableData.filter(x => x.datetime === inputValue1 
                                        || x.city === inputValue2
                                        || x.state === inputValue3
                                        || x.country === inputValue4
                                        || x.shape === inputValue5);
  console.log(filteredData);

  var datetime = filteredData.map(x => x.datetime);

  tbody.html("");

  // append stats 
  filteredData.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });  


});

tableData.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });