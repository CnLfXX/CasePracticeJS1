//soru 6
//switch yapısını kullanarak bir haftanın gününü konsola yazdıran bir kod yazın.

const days = ["Pazartesi", "Sali", "Çarşamba", "Perşembe", "Cuma", "Cumartesi","Pazar"];
const userInput = parseInt(prompt("Haftanin kaçinci gününü seçmek istersiniz? (1-7)"));
function daySelector(){
    switch(userInput){

        
    
        case 1:
        console.log(days[0])
        break;
    
        case 2:
        console.log(days[1])
        break;
    
        case 3:
        console.log(days[2])
        break;
    
        case 4:
        console.log(days[3])
        break;
    
        case 5:
        console.log(days[4])
        break;
    
        case 6:
        console.log(days[5])
        break;

        case 7:
        console.log(days[6])
        break;
    
        default:
            console.log("invalid value")
    
    }
}
daySelector()

var tarih = new Date();
var gun = tarih.getDay();

switch(gun){

        case 0:
        gun="pazar"
        break;
    
        case 1:
        gun="pazartesi"
        break;
            
        case 2:
        gun="sali"
        break;

        case 3:
        gun="carsamba"
        break;

        case 4:
        gun="persembe"
        break;

        case 5:
        gun="cuma"
        break;

        case 6:
        gun="cumartesi"
        break;

        default:
            gun= "geçersiz"
            break;
            
}
console.log(gun)// bu da reel zamandaki gün verisini çekiyor