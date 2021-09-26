//Task 2
console.log("Task 2");
console.log("Taranets");
//Task 3 
let firstValue,secondValue; 
firstValue = 15;
secondValue = "apple";
console.log("Task 3");
console.log("First value: ",firstValue);
console.log("Second value: ",secondValue);
firstValue = secondValue;
console.log("First value after change: ",firstValue);
console.log("Second value after change: ",secondValue);
//Task 4
const ticket = {
    route : "New York",
    number: 1000,
    buisnessClass: true,
    backWay: null
};
console.log("Task 4");
console.log(ticket);
//Task 5
const isAdult = confirm("Task 5. Are you adult?");
console.log("Task 5");
if (isAdult) {
    console.log("Yes");
}
else {
    console.log("No");
}
//Task 6 
let firstName = "Sophia";
let secondName = "Taranets";
let group = 636;
let birthYear = 2001;
let married = false;
console.log("Task 6");
console.log ("Type of group: ",typeof(group));
console.log ("Type of birthYear: ",typeof(birthYear));
console.log ("Type of married status: ",typeof(married));
console.log ("Type of firstName: ",typeof(firstName));
console.log ("Type of secondName: ",typeof(secondName));
let nullValue = null;
let undValue = undefined;
console.log ("Type of nullValue: ",typeof(nullValue));
console.log ("Type of undValue: ",typeof(undValue));
//Task 7
login = prompt("Task 7. Hello, please enter your login","sofa");
email = prompt("Task 7. Enter your email","sony@gmail.com");
password = prompt("Task7. Enter your password","12345678")
alert("Dear " + login + ",your email is " + email + "your password is " + password);
//Task 8 
let hour = 60*60;
alert("Task 8 . Number of seconds per hour: " + hour);
let day = hour*24;
alert("Task 8. Numver of seconds per a day: " + day);
month = prompt("Enter nymber of days in the month");
if (month==30) {
    month =day*hour*30;
    alert("Task 8. Number of seconds per a month (for 30 days): " + month);
    }
else if (month==31){
    month =day*hour*31;
    alert("Task 8. Number of seconds per a month (for 30 days): " + month);
}
else if(month==29){
    month =day*hour*29;
    alert("Task 8. Number of seconds per a month (for 30 days): " + month);
}
else if(month == 28 ){
    month =day*hour*28;
    alert("Task 8. Number of seconds per a month (for 30 days): " + month);
}
else {
    alert("Task 8. It is nonsense!")
}
