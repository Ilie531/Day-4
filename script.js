/*
document.getElementById. //take the id element in the HTML
.innerHTML//change the content of text in the id

window.alert(not working)
console.log
document.write //don't usually use this. It removes everything written down in HTML or CSS
//This is a comment


*/
/*let a,b,c ;
a=5;
b=1;
c= document.getElementById();//when you want to get id and put it in window.alert

var a ;//can make empty variable with this
var a= "something";
*/

//Data types
/*
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
*/

var x=10;
var y=28;

for (let i=x; i<=y; i++) 
{
    if(i%2==0) window.alert(i);
};