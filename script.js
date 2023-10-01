//Parent Div
var div = document.createElement("div");
div.style.marginTop = "10rem";
div.style.textAlign= "center";


//Input Field
var input = document.createElement("input");
input.setAttribute("type","date");
input.id = "dob";
input.style.width = "20rem";
input.style.marginRight = "1rem";

//Display date button
var displaybutton = document.createElement("button");
displaybutton.innerText = "Display Date";
displaybutton.className = "btn btn-success";
displaybutton.marginLeft = "5rem";
displaybutton.addEventListener("click",displaydata);

function displaydata(){
var inpdata = document.getElementById("dob").value;
var inpdate = new Date(inpdata);

var currdate = new Date();
 
//milliseconds
var millisecdiff = currdate.getTime() - inpdate.getTime();

var seconds = mathfloor(millisecdiff,1000);

var minutes = mathfloor(seconds,60);

var hours = mathfloor(minutes,60);

var day = mathfloor(hours,24);

var monthdiff = getmonth(inpdate,currdate);

var year = currdate.getFullYear() - inpdate.getFullYear();
var ansdiv = document.createElement("div");
ansdiv.style.textAlign = "center";
ansdiv.append("This Given Input date is "+inpdate);
ansdiv.append(brk());
ansdiv.append("year "+year);
ansdiv.append(brk());
ansdiv.append("month "+monthdiff);
ansdiv.append(brk());
ansdiv.append("day "+day);
ansdiv.append(brk());
ansdiv.append("hour "+hours);
ansdiv.append(brk());
ansdiv.append("minute "+minutes);
ansdiv.append(brk());
ansdiv.append("second "+seconds);
ansdiv.append(brk());
ansdiv.append("milli second "+millisecdiff);
document.body.append(ansdiv);
}
function getmonth(val1,val2){
    var year = val2.getFullYear() - val1.getFullYear();
    var month = (year*12) + (val2.getMonth() - val1.getMonth());
    return month;
}
function mathfloor(val1,val2){
    return Math.floor(val1/val2);
}
function brk(){
    var brk1 = document.createElement("br");
    return brk1;
}

div.append(input,displaybutton);
document.body.append(div);

