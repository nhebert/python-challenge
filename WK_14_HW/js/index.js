var $tbody = document.querySelector("tbody");
var $btnSearch = document.getElementById("search");
var $btnReset = document.getElementById("reset");
var $ul = document.querySelector("ul");


$btnSearch.addEventListener("click", filterByParameters);
$btnReset.addEventListener("click", resetTable);
$ul.addEventListener("click", clickPage);

var itemsPerPage = 1000;

var filteredDataSet = dataSet;

function clickPage(event){
    var pageNumber = event.target.parentNode.id;

    if (pageNumber === 1) {
        var startIndex = 0;
        var endIndex = startIndex + itemsPerPage;
    
        console.log(startIndex);
        console.log(endIndex);
    
        filteredDataSet = filteredDataSet.slice(startIndex, endIndex);
    
        renderTable();
        filteredDataSet = dataSet;

    }  else  {
        var startIndex = (pageNumber-1)*itemsPerPage;
        var endIndex = startIndex + itemsPerPage;
    
        console.log(startIndex);
        console.log(endIndex);
    
        filteredDataSet = filteredDataSet.slice(startIndex, endIndex);
    
        renderTable(filteredDataSet);
        filteredDataSet = dataSet;
    }  
};

function pagination(data){

    $ul.innerHTML = "";
    console.log(data.length)

    var numberOfPages = data.length / itemsPerPage;


    for (var i = 1; i <= numberOfPages; i++) {
        var $li = document.createElement("li");
        $li.setAttribute("id", i);
        $li.innerHTML = `<a href="#">${i}</a>`;
        $ul.appendChild($li);
    };

    var startIndex = 0;
    var endIndex = startIndex + itemsPerPage;

    data = data.slice(startIndex, endIndex);
 
    renderTable(data);
};




function filterByParameters(event) {

    event.preventDefault();

    userInputObject = createUserInputObject()

    filteredDataSet = dataSet.filter(function (row) {
        var filterArray = [];

        
        Object.keys(userInputObject).forEach(function (key) {
            filterArray.push(userInputObject[key] === row[key].trim().toLowerCase());
        });

        
        return filterArray.every(element => element === true)
    });

    pagination(filteredDataSet)

};



function renderTable(data) {
    
    $tbody.innerHTML = "";

    for (i = 0; i < data.length; i++) {
        var $row = $tbody.insertRow(i);

        for (j = 0; j < Object.keys(data[i]).length; j++) {
            var $cell = $row.insertCell(j);
            var cellValue = data[i][Object.keys(data[i])[j]];
            $cell.innerText = cellValue;
        }
    }
};


function createUserInputObject() {

    var userInputObject = {}

    var inputDate = document.querySelector('#inputDate');
    var inputCity = document.querySelector('#inputCity');
    var inputState = document.querySelector('#inputState');
    var inputCountry = document.querySelector('#inputCountry');
    var inputShape = document.querySelector('#inputShape');

    if (inputDate.value !== "") {
        
        userInputObject["datetime"] = inputDate.value;
    }
    if (inputCity.value !== "") {
       
        userInputObject["city"] = inputCity.value.trim().toLowerCase();
    }
    if (inputState.value !== "") {
       
        userInputObject["state"] = inputState.value.trim().toLowerCase();
    }
    if (inputCountry.value !== "") {
        
        userInputObject["country"] = inputCountry.value.trim().toLowerCase();
    }
    if (inputShape.value !== "") {
       
        userInputObject["shape"] = inputShape.value.trim().toLowerCase();
    }
    return userInputObject;
}


function resetTable() {

    var inputDate = document.querySelector('#inputDate');
    var inputCity = document.querySelector('#inputCity');
    var inputState = document.querySelector('#inputState');
    var inputCountry = document.querySelector('#inputCountry');
    var inputShape = document.querySelector('#inputShape');

    inputDate.value = "";
    inputCity.value = "";
    inputState.value = "";
    inputCountry.value = "";
    inputShape.value = "";

    data = dataSet;

    pagination(data)

};


pagination(filteredDataSet);