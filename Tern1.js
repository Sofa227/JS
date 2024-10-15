let a = Math.floor(Math.random() * 100);
//(a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);


// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()

let x, z, b;


if(a>10){
    x=a;
}
else{
    x=a*2;
}

if(a<3){
    z=1;
}
else{
    z=2*(a-2);
}


if (x>5){
    b = (2 * a) + 1;
}
else{
    if(z>4){
        b=5;
    }
    else{
        if(a%2 == 0){
            b=6;
        }
        else{
            b=7;
        }
    }
}

console.log(`a = ${a}, b = ${b}`);

switch (true) {
    case (a > 10):
        x = a;
        break;
    default:
        x = a * 2;
        break;
}


switch (true) {
    case (a < 3):
        z = 1;
        break;
    default:
        z = 2 * (a - 2);
        break;
}


switch (true) {
    case (x > 5):
        b = (2 * a) + 1;
        break;
    case (z > 4):
        b = 5;
        break;
    default:
        switch (a % 2==0) {
            case 0:
                b = 6;
                break;
            default:
                b = 7;
                break;
        }
}

console.log(`a = ${a}, b = ${b}`);