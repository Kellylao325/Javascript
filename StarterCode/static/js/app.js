// from data.js
var tableData = data;

// select tbody
var tbody = d3.select('tbody');

//loop through data in dataset
tableData.forEach ((item)=>{
    var row = tbody.append('tr');
    Object.entries(item).forEach(([key,value])=> {
        var cell = row.append('td').text(value);
        cell.text(value);
    });
});

//filter button
var filterButton = d3.select('#filter-btn');

//complete click handler
filterButton.on('click', function(){
 
    //input element for filter
    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");
    
       //prevent refreshing
       d3.event.preventDefault();

    //filtered table 
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);


});


