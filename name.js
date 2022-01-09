
function calculate(){
   var number_1
    = Number(document.getElementById("firstno").value);

    var area = number_1 * number_1
    var perimeter = 4 * number_1

    document.getElementById("area1").innerHTML= area;
    document.getElementById("perimeter1").innerHTML= perimeter;
}