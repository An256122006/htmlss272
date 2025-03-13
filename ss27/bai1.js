let a=+prompt("moi ban nhap so thu 1");
let b=+prompt("moi ban nhap so gthu 2");
let choice='';
do {
     choice = +prompt(`
        Cộng hai số.
        Trừ hai số.
        Nhân hai số.
        Chia hai số.
        Thoát.
        `);
    switch(choice){
        case 1:
            sum(a,b);
            break;
        case 2:
            tru(a,b);
            break;
        case 3:
            nhan(a,b);
            break;
        case 4:
            chia(a,b);
            break;
        default:
            break;        
    }
} while (choice !== 5);

function sum(a,b){
    let sum1=a+b;
    console.log(sum1);
}
function tru(a,b){
    let tru1=a-b;
    console.log(tru1);
}
function nhan(a,b){
    let nhan1=a*b;
    console.log(nhan1);
}
function chia(a,b){
    let chia1=a/b;
    console.log(chia1);
}