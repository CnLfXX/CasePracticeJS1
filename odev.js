
//soru 1
const a = 20;
const b = 10;
console.log(a > b && b === 10);
// false döndürür

//soru 2
let x = 10;
let y = "10";
console.log(x === y);
// false döndürü

//soru 3

const square = (num) => num * num; // fat arrow fonksyonu
console.log(square(5));
//basit bir kare alma fonksyonu bunu prompt olarak yaparsak daha şekil şukul durur o yüzden hadi yapalım
console.log(square(prompt("karesini almak istediğiniz sayiyi giriniz")))

//soru 4
let x1 = 5;
let y1 = 10;
console.log(x1 > 3 ? (y1 > 10 ? "A" : "B") : "C");
// x1 3 den büyük o yüzden C döndürmicek içerdeki ternary operatörüne giricek orda da y1=10 ancak içerdeki koşul ">"dediği için B döndürücek

//soru 5
// Parametre alan ve bir sayının pozitif, negatif veya sıfır olduğunu döndüren bir fonksiyon yazın.

var numForValuse = prompt('lutfen bir sayi giriniz').toString(12)
 
function check (){
  if(numForValuse > 0){
    console.log("girdiğiniz deger pozitif bir degerdir")
  }
  else if(numForValuse < 0){12
    console.log("girdiğiniz deger negatif bir degerdir")
  }
  else{
    console.log("girdiğiniz deger 0")
  }
}
console.log(check());

