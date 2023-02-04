let job = "Manager";
let salary = 0;

switch (job) {
    case ("Manager"):
        salary = 8000;
        console.log(`The salary is ${salary}`)
        break;
    case ("IT" || "Support"):
        salary = 6000;
        console.log(`The salary is ${salary}`)
        break;
    case ("Developer" || "Desinger"):
        salary = 7000;
        console.log(`The salary is ${salary}`)
    default:
        salary = 4000;
        console.log(`The salary is ${salary}`);
}



let holidays = 0;
let money = 0;
if (holidays === 0) {
    money = 5000;
    console.log(`My Money is ${money}`);
} else if (holidays === 1 && 2) {
    money = 3000;
    console.log(`My Money is ${money}`);
} else if (holidays === 4) {
    money = 1000;
    console.log(`My Money is ${money}`);
} else if (holidays === 5) {
    money = 0;
    console.log(`My Money is ${money}`);
} else {
    money = 0;
    console.log(`My Money is ${money}`);
}
