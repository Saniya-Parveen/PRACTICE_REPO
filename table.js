var tableCreated = false;
function createTable(){
var userName = document.getElementById("username").value;
var cityName = document.getElementById("cityname").value;
var radios = document.getElementsByName("gender");
var gender;

if(radios[0].checked){
    gender = "male";
}
else if(radios[1].checked){
    gender = "Female";
}
else {
    gender = "Other";
}

var table;
var tr1;
var tr2;
if(!tableCreated){
table = document.createElement("table");

tr1 = document.createElement("tr");


var th1 = document.createElement("th");
var th2 = document.createElement("th");
var th3 = document.createElement("th");

th1.innerText = "NAME";
th2.innerText = "CITY";
th3.innerText = "GENDER";

tr1.appendChild(th1);
tr1.appendChild(th2);
tr1.appendChild(th3);

table.appendChild(tr1);

table.style.width = "300px";
table.style.border = "2px solid red";
table.style.margin = "30px auto";


var container = document.getElementsByClassName("container");
container[0].appendChild(table);

tableCreated = true;
}else {
    table = document.querySelector("table");
    tr2 = document.createElement("tr");
}
var td1 = document.createElement("td");
var td2 = document.createElement("td");
var td3 = document.createElement("td");

td1.innerText = userName;
td2.innerText = cityName;
td3.innerText = gender;

tr2.appendChild(td1);
tr2.appendChild(td2);
tr2.appendChild(td3);

table.appendChild(tr2);

document.getElementById("username").value = "";
document.getElementById("cityname").value = "";
document.querySelector('input[name="gender"]:checked').checked = false;
}

