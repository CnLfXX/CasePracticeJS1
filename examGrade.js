

function gradeCalculator(grade=prompt("enter grade")){
    
    if(grade>=90 && grade<=100){
        console.log("A")
    }
    else if(grade>=80 && grade< 90){
        console.log("B")
    }
    else if(grade>=70 && grade< 80){
        console.log("C")
    }
    else if(grade>=60 && grade< 70){
        console.log("D")
    }
    else if(grade<60 && grade>=0){
        console.log("F")

    }
    else{
        console.log("Invalid grade")
    }
}
gradeCalculator()