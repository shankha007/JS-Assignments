var w = window.prompt("Enter 1 for Celcius to Fahrenheit or 2 for Fahrenheit to Celcius");
if (w == 1) {
    var c = window.prompt("Enter the temperature in Celcius: ");
    var f = 9*c/5 + 32;
    window.alert("Temperature in Fahrenheit is: " + f);
} else if (w == 2){
    var f = window.prompt("Enter the temperature in Fahrenheit: ");
    var c = 5*(f-32)/9;
    window.alert("Temperature in Celcius is: " + c);
} else {
    window.alert("Wrong Input");
}