

function summitAndControl(){

    let number1 = parseInt(prompt("lutfen 1. deger için sayi giriniz"));
    let number2 = parseInt(prompt("lutfen 2. deger için sayi giriniz"));

    if(number1 + number2 > 100) {
        console.log("iki değer toplami 100 den büyük")

    } else if(number1 + number2 < 100){
        console.log("iki değer toplami 100 den büyük")
    } else{
        console.log("sayilarin toplami 100")
    }
    
    

}

//büşraya sor alttaki chat gptnin yaptırdığı
summitAndControl()

function summitAndControl1() {
    
    let number1 = parseInt(prompt("Lütfen 1. değer için bir sayı giriniz:"));
    let number2 = parseInt(prompt("Lütfen 2. değer için bir sayı giriniz:"));

    
    if (number1 + number2 > 100) {
        console.log("İki değerin toplamı 100'den büyük.");
    } else if (number1 + number2 < 100) {
        console.log("İki değerin toplamı 100'den küçük.");
    } else {
        console.log("Sayıların toplamı tam olarak 100.");
    }
}


summitAndControl1();