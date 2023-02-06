console.log(typeof "Ibrahim shibly");
console.log(typeof 5000);
console.log(typeof [10, 15, 17]);
console.log(typeof ["os", "Ah"]);
console.log(typeof { name: 'Ibrahim', age: '25', Country: 'JO' });
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);


var user = "ibrahim";
age = 25;

console.log("Name:", user, "Age:", age);

// hello.innerHTML = "option";

var user = "Small";
var User = "Capital";
var userName

console.log(user);
console.log(User);

var a = 2;

console.log(a);
console.log(typeof a);



console.log('new "School"');
console.log("new 'School'");
console.log("new \"School\"");
console.log("new \\");
console.log("ibrahim \nhani \nShibly");
console.log("ibrahim \
hani \
Shibly");


let o1 = "We love";
let b2 = "JAVA SCRIPT";

document.write(o1 + " " + b2);
console.log(o1, b2);

let w = "We Love";
let j = "Javascript";
let an = "And";
let p = "Programing";

console.log(w + " " + j +
	"\n " + an + " " + p);
// ECM6 
console.log(`${w} ${j} " " ' ' \\
${an} ${p}`);

let title = "Javascript";
let desc = "Language";
let markUp = `
	<div class="card">
		<div class="child">
			<h2>${title}</h2>
			<p>${desc}</p>
		</div>
	</div>
`;

document.write(markUp.repeat(2));
//Addition
console.log(10 + 50);
console.log(10 + " ibrahim");
//Subtraction
console.log(50 - 10);
console.log(10 - " ibrahim");
console.log(typeof NaN);
//Multiplicatin
console.log(10 * 20);
console.log(10 * -20);
//Division
console.log(20 / 5);
console.log(20 / 3);
//Exponentiation
console.log(4 ** 2);
//Moduls
console.log(19 % 2);

//unary
//+
console.log(+ 100);
console.log(+ "-100");
console.log(+"ibrahim");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+true);
console.log(+false);
//-
console.log(-100);
console.log(-"-100");
console.log(-"ibrahim");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-true);
console.log(-false);


let f = 10;
f = f + 20;
f += 100;
console.log(f);

//math object 
console.log(Math.round(32.9));
console.log(Math.ceil(32.4));
console.log(Math.floor(32.7));
console.log(Math.min(10, 20, 30, 40));
console.log(Math.max(10, 20, 30, 40));
console.log(Math.pow(4, 5));
console.log(Math.random());
console.log(Math.trunc(92.939394));


//string methods
let theName = "Alzero web school";
console.log(theName);
console.log(theName[1]);
console.log(theName[5]);
console.log(theName.charAt(1));
console.log(theName.length);
console.log(theName.split(""));
console.log(theName.substring(2, 6))

//comaprison 
console.log(10 == "10");
console.log(10 != "10");
console.log(10 === "10");
console.log(10 !== "10");
console.log(10 > "10");
console.log(10 >= "10");
console.log(10 < "10");
console.log(10 <= "10");


let price = 100;
let discount = false;
let discountAmount = 30;
let country = "jordan";
let student = true;

if (discount === true) {
	price -= discountAmount;
}
else if (country === "jordan" && student === true) {
	price -= 40;
	console.log("Students Discount" + " %" + price);
}
else if (country === "Qatar") {
	price -= 50;
}
else {

	price -= 10;
}
console.log(price);

let theNm = "aya";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
	console.log("Mr");
} else {
	console.log("Mrs");
}

// condition ? if true : if false
theGender === "Female" ? console.log("Mr") : console.log("Mrs");

console.log(`Hello ${theGender === "Feamle" ? 'Mr' : 'Mrs'} ${theNm}`)

theAge < 20
	? console.log(20)
	: theAge > 20 && theAge < 60
		? console.log("20 to 60")
		: theAge > 60
			? console.log("larger than 60")
			: console.log("unknown")

console.log(Boolean(100))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(null))


let price1;
console.log(`The price is ${price1 || 200}`);
console.log(`The price is ${price1 ?? 200}`); // null and no value


let day = 3;
switch (day) {
	case 0:
		console.log("Saturday");
		break;
	case 1:
		console.log("Sunday")
		break;
	default:
		console.log("Unknown Day");
}



let job = "Manager";
let salary = 0;

if (job === "Manager") {
	salary = 8000;
	console.log(`The salary is ${salary}`)
} else if (job === "IT" || job === "Support") {
	salary = 6000;
	console.log(`The salary is ${salary}`)

} else if (job === "Developer" || job === "Designer") {
	salary = 7000;
	console.log(`The salary is ${salary}`)

} else {
	salary = 4000;
	console.log(`The salary is ${salary}`)

}


let myFriends = ["ahmad", "hamzeh", "hamoodeh", ["ali", "sadam"], "hema"]

console.log(`My friend name is ${myFriends[0]}`)
console.log(`My friend name is ${myFriends[1]}`)
console.log(`My friend name is ${myFriends[2]}`)
console.log(`My friend name is ${myFriends[3]}`)
console.log(`My friend name is ${myFriends[3][1]}`)

console.log(myFriends);
myFriends[2] = "BWM"
myFriends[3] = ["Mercedes", "Nisan"]
console.log(myFriends)
console.log(typeof myFriends)
console.log(Array.isArray(myFriends))//check array 
document.write(Array.isArray(myFriends))//check array 
console.log(myFriends.length)
if (myFriends.length === 4) {
	console.log(`my friends name are ${myFriends}`)
} else {
	console.log("unknown")
}

console.log(myFriends)
myFriends[myFriends.length - 1] = "Subarau"
console.log(myFriends)

//unshift ("", "") add element to the first 
myFriends.unshift("moh")
console.log(myFriends)
//push ("", "") add element to the end 
myFriends.push("KIA")
console.log(myFriends)
//shift () remove first element 
let first = myFriends.shift()
console.log(`the first name was deleted by shift the new first name (${first})`)
//pop() remove last element from array 	
let last = myFriends.pop()
console.log(`the last name was deleted by pop the new last name (${last})`)

let myFriends1 = ["Ahmad", "Mohammed", "Sayed", "Alaa", "Ahmad"]
console.log(myFriends1)
//from the first
console.log(myFriends1.indexOf("Ahmad"))
console.log(myFriends1.indexOf("Ahmad", 2))
//from the last 
console.log(myFriends1.lastIndexOf("Ahmad"))
console.log(myFriends1.lastIndexOf("Ahmad", -2))

console.log(myFriends1.includes("Ahmad"))
console.log(myFriends1.includes("Ahmad", 2))

console.log(myFriends1.lastIndexOf("issa"))

let myArr = [10, "sayed", "mohammed", "90", 1000, 100, 20, "10", -20, -10];

console.log(myArr)
console.log(myArr.sort().reverse())

let myArr1 = ["sayed", "mahmoud", "mohammed", "aseel", "sayed", "issa"]
console.log(myArr1.slice())
console.log(myArr1.slice(1))
console.log(myArr1.slice(1, 3))
console.log(myArr1.slice(-3))
console.log(myArr1.slice(-3, -1))
console.log(myArr1)
myArr1.splice(1, 2, "ibrahim", "smaeer")
console.log(myArr1)

//joining arrays 

let myArr2 = ["ibrahim", "hamzeh", "ahmad", "mohammed", "hani", "basel"];
let myArr3 = ["smeer", "sameh", "basel"];
let myArr4 = ["haytham", "shadi"];

let allFriends = myArr2.concat(myArr3, myArr4, "gameel", ["hadeel"]);
console.log(allFriends)
console.log(allFriends.length)
console.log(typeof allFriends)
console.log("This search start from index 1 by using indexOf and the result = ", allFriends.indexOf("basel", 1))
console.log("This search start from index -4 by using lastIndexOf and the rseult = ", allFriends.lastIndexOf("basel", -4))
allFriends.unshift("issa")
console.log("New index in first by use shift ", allFriends)
let sepa = myArr2.join(" and ")
document.write("<br>", "<h2>This join method used separator(and) and toUpperCase</h2>", "<br>", `<h3>${sepa.toUpperCase()}</h3>`)
console.log(sepa.toUpperCase())


let myFriends2 = ["osama", "ahmad", "sayed", "ali", "Ameer", "issa"]

for (let i = 0; i < myFriends2.length; i++) {
	console.log(myFriends2[i])
}


let myFriends3 = [1, 2, 3, "osama", "ahmad", "sayed", "ali", 4, 5, 6, "Ameer", "issa"]
let onlyName = []
let onlyNum = []
for (i = 0; i < myFriends3.length; i++) {
	if (typeof myFriends3[i] === "string") {
		onlyName.push(myFriends3[i])
	}
}
console.log(onlyName);
for (let i = 0; i < myFriends3.length; i++) {
	if (typeof myFriends3[i] === "number") {
		onlyNum.push(myFriends3[i])
	}
}
console.log(onlyNum)

//Nested loops

let products = ["keyboard", "mouse", "pen", "pad", "monitor"]
let colors = ["red", "green", "black"]
let models = [2020, 2021]
for (let i = 0; i < products.length; i++) {
	console.log("#".repeat(5))
	console.log(`#  ${products[i]}`)
	console.log("#".repeat(5))
	console.log("Colors:")
	for (let c = 0; c < colors.length; c++) {
		console.log(`- ${colors[c]}`)
	}
	console.log("Models:")
	for (m = 0; m < models.length; m++) {
		console.log(`- ${models[m]}`)
	}
}

//break
let products1 = ["keyboard", 11, 12, 13, 14, "mouse", "pen", "pad", "monitor"]
let colors1 = ["red", "green", "black"]

console.log("products 1")
for (let i = 0; i < products1.length; i++) {
	console.log(products1[i])
	if (products1[i] === "pen") {
		break;
	}

}
//continue
let products2 = ["keyboard", 11, 12, 13, 14, "mouse", "pen", "pad", "monitor"]
let colors2 = ["red", "green", "black"]

console.log("products 2")
console.log("Remove String")
for (let i = 0; i < products2.length; i++) {
	if (typeof products2[i] === "string") {
		continue;
	}

	console.log(products2[i])
	if (typeof products2[i] === "number") {
		continue;
	}
	console.log(products2[i],"eeeee")

}

//label
console.log("label")
let products3 = ["keyboard", "mouse", "pen", "pad", "monitor"]
let colors3 = ["red", "green", "black"]

console.log("products 3")
mainLoop: for (let i = 0; i < products.length; i++) {
	console.log(`# ${products3[i]}`)

	nestedLoop: for (let j = 0; j < colors3.length; j++) {
		console.log(`- ${colors3[j]}`)
		if (colors[j] === "green")
			break mainLoop;
	}
	let products4 = ["keyboard", "mouse", "pen", "pad", "monitor"]
	i = 0;
	for (; ;) {
		console.log(products4[i]), "dsds	";
		i += 2;
		if (i === products34length);
	}










}

