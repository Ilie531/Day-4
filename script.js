/*
document.getElementById. //take the id element in the HTML
.innerHTML//change the content of text in the id

window.alert(not working)
console.log
document.write //don't usually use this. It removes everything written down in HTML or CSS
//This is a comment



let a,b,c ;
a=5;
b=1;
c= document.getElementById();//when you want to get id and put it in window.alert

var a ;//can make empty variable with this
var a= "something";


//Data types

string
numbers
boolean - true or false
for string
var a="  " or '  '


Operators
+
-
*
** exponentiale
/
%
++ increment
-- decrement

Comparator
== 2 things are equal
=== 2 things are equal and the same type
!= not equal
!== not equal or not same type
>
>=
<
<=


logical operators
and - &&
|| - or
! - not

Object for now won't use objects or data types
var car {mark=...}



//loop for in (will return the position in the array)
for (x in list) { window.alert(x);};
sugar, spice, pretty things - with y
 0       1           2 - with x
for (y of list)

while (z<1o) { window.alert(z); z++};


//function syntax
funtion FunctionTest (x,y) {return x+y;};

give all par numbers between 2 numbers in 2 variables
% of all numbers between x & y with window.alert


var x=10;
var y=28;


for (let i=x; i<=y; i++) 
{
    if(i%2==0) window.alert(i);
};
*/


//make a content with
//let array={ visit, eat...}
//let places={Alhambra, Catedral,...}
//<ol> <li>



let places=["Alhambra", "Catedral", "Sevilla", "Cordoba", "Malaga", "Generalife"];
let x = places.length;
let text = "<h1> Places</h1>";
for (let i=0;i<x;i++) {
  text += "<h2>" + places[i] + "</h2>";
}
document.getElementById("test").innerHTML = text;




let obj=["Learn", "Study", "Exercise", "Relax", "Enjoy the culture"];
let xx = obj.length;
let textt = "<h1> Objectives</h1>";
for (let ii=0; ii<xx; ii++) {
    textt+="<h2>"+obj[ii]+"</h2>";
}

document.getElementById("test2").innerHTML = textt;
