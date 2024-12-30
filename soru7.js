/*const age = prompt("enter age")
const income = prompt ("enter income")
*/

function controller(age,income){
    age = parseInt(age);  
    income = parseFloat(income);
    if(age<18){
        console.log("NOT ELIGABLE")
        return;
    }
    else if(age>=18 && income >=5000){
        console.log("High income")
    }
    else{
        console.log("low income")
    }
}
controller(prompt("enter age"),prompt("enter income"));


