var height=0;
var weight=0;
function calculate_bmi(weight, height)
{
    var bmi=weight/(height*height);
    return bmi;
}
function display_bmi(){
    var height=document.getElementById("height").value;
    var weight=document.getElementById("weight").value;
    var finalbmi=calculate_bmi(weight,height);
    document.getElementById("res").innerHTML="Your BMI is "+Math.round(finalbmi);
}