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

// condition ?  true :  false
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

console.log("products 1 break")
for (let i = 0; i < products1.length; i++) {
	console.log(products1[i])
	if (products1[i] === "pen") {
		break;
	}

}
//continue
let products2 = ["keyboard", 11, 12, 13, 14, "mouse", "pen", "pad", "monitor"]
let colors2 = ["red", "green", "black"]

console.log("products 2 continue")
console.log("Remove String")
for (let i = 0; i < products2.length; i++) {
	if (typeof products2[i] === "string") {
		continue;
	} console.log(products2[i])
}
console.log("products 2 break")
console.log("Remove numbers")
for (let i = 0; i < products2.length; i++) {
	console.log(products2[i])
	if (typeof products2[i] === "monitor") {
		break;
	}
}
//label
document.write("<h1>#Label</h1><br>")
let products3 = ["keyboard", "mouse", "pen", "pad", "monitor"]
let colors3 = ["red", "green", "black"]

console.log("products 3")
mainLoop: for (let i = 0; i < products.length; i++) {
	console.log(`# ${products3[i]}`)

	nestedLoop: for (let j = 0; j < colors3.length; j++) {
		console.log(`- ${colors3[j]}`)
		if (colors[j] === "black") {
			break mainLoop;
		}
	}
}
document.write("Loop Advanced ")
let products4 = ["MAZDA", "MER.", "TOYOTA", "SUPRA", "BWM", "X6"]
let u = 0;

for (; ;) {
	document.write(products4[u])
	u += 2;
	if (u === products4.length) break;

}


document.write(`<h1 style="text-align: center;text-decoration: underline;">Loop Advanced </h1>`)
let products5 = ["MAZDA", "MER.", "TOYOTA", "SUPRA", "BWM", "X6"]
let colors4 = ["red", "green", "black"]
let showCount = 5;
document.write('<h3 class="h3">Car Items product 5</h3>')

for (i = 0; i < showCount; i++) {
	document.write(`<div class="product5">`)
	document.write(`<span>${[i + 1]} - ${products5[i]}<br></span>`);
	for (let j = 0; j < colors4.length; j++) {
		document.write(`<br><span> ${[j + 1]} - The colors are ${colors4[j]} </span>`)
	}
	document.write(`<br>Used ' join ' ( ${colors4.join(" | ")} )`)
	document.write(`</div>`)
}
console.log("While Loop")
let n = ["MAZDA", "MER.", "TOYOTA", "SUPRA", "BWM", "X6"];
let index = 0;

while (index < n.length) {
	console.log(n[index])
	index += 1;
}
let products6 = ["MAZDA", "MER.", "TOYOTA", "SUPRA", "BWM", "X6"];
let index1 = 10;
do {
	console.log(index1)
	index1++;
} while (false);
console.log(index1);

function sayHello(userName) {
	console.log(`hola ${userName}`)
}
sayHello("ibrahim");
sayHello("hamzeh");
sayHello("mohammed");

function generateYears(start, end, exclude) {
	for (let i = start; i <= end; i++) {
		if (i === exclude) {
			continue;
		}
		document.write(`<p>${i}</p>`)
	}
}
generateYears(1997, 2023, 2020)

console.log("Function Return")
function calc(num1, num2) {
	return num1 + num2;
}
result = calc(10, 20)
console.log(result)

function generate(start, end) {
	for (let i = start; i <= end; i++) {
		if (i === 15) {
			return "Interrupting";
		}
		console.log(i)
	}
}
generate(10, 20)


function sayHello1(username = "unknown", age = "unknown") {
	// if (age === undefined) {
	// 	age = "unknown"
	// }
	// age = age || "unknown"
	return `Hello your name is ${username} and your age is ${age}`;
}
console.log(sayHello1("Ibrahim", 25))

console.log("function rest")
function calCu(...numbers1) {
	let result1 = 0
	for (let i = 0; i < numbers1.length; i++) {
		result1 += numbers1[i] //result = result + numbers1[i]
	}
	return `The result is ${result1}`;
}
console.log(calCu(10, 20, 30, 40, 50, 60, 70))




document.write(`<div class="advanced">`)
document.write("<h1>Function Ultimate Practice</h1>")
document.write("<hr>")
function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
	document.write(`<div>`)
	document.write(`<h3>Welcome ${us}</h3>`)
	document.write(`<h3>Your age is : ${ag}</h3>`)
	document.write(`<h3>Hour rate is : $${rt}</h3>`)
	if (show === "Yes") {
		if (sk.length > 0) {
			document.write(`<h3> Skills is :${sk.join(" | ")}</h3>`)
		} else {
			document.write(`<h3> Skills is : No Skills</h3>`)
		}
	} else {
		document.write(`<h3> Skills is hidden </h3>`)
	}


	document.write(`</div>`)
	document.write(`</div>`)

}
showInfo("Ibrahim", 25, 20, "Yes", " HTML", "CSS", "JavaScript")



//Nested return 

function sayMassege(fName, lName) {
	let message = `Hello`
	function coctMsg() {
		function getFullName() {
			return `${fName} ${lName}`
		}
		return `${message} ${getFullName()}`
	}
	return coctMsg();
}
console.log(`Nested Return ==>(${sayMassege("Ibrahim", "Shibly")})`)


// Arrow 
// One parameter
let print = num => num;
console.log(print(100))
//multiple line
let print1 = (num1, num2) => num1 + num2;
console.log(print1(100, 50))


//Scoope 
//This is a Global 
var a = 1;
let b = 2;

function showText() {
	var a = 10;
	let b = 20;
	console.log(`Function from the local a = ${a}`)
	console.log(`Function from the local b = ${b}`)
}
showText()
console.log(`From the global a = ${a}`)
console.log(`From the global b = ${b}`)

//scoope [if switch for]
let x = 10;
if (true) {
	let x = 50;
	console.log(`from if block ${x}`)
}
console.log(`from global ${x}`)

//way 1
let myNums = [1, 2, 3, 4, 5, 6]
let newArray = []

for (let i = 0; i < myNums.length; i++) {
	newArray.push(myNums[i] + myNums[i])
}
console.log(newArray)

//another way using map 
//map (call back function)
//annymous function
let addSelf = myNums.map(function (element, index, arr) {
	// console.log(`Current Element ${element}`)
	// console.log(`Current Index ${index}`)
	// console.log(`Array [${arr}]`)
	// console.log(`This argument => ${this}`)
	return element + element;
}, 10)
console.log("This is the array", myNums)
console.log("Array Map", addSelf)

//arrow
// let addSelf1 = myNums.map((a) => a + a)

// console.log(`Arrow [${addSelf1}]`)

function addittion(ele) {
	return ele + ele;
}
let add = myNums.map(addittion)
console.log(`${add}`)


//swapping cases
let swappingCases = "IbRaHiM sHiBlY"
let invertedNumbers = [1, -10 - 20, 15, 100, -30]
let ignoreNumbers = "Ibr121ah7im"


//____.split("") ==>convert string to array
// let sw = swappingCases.split("").map(function (ele) {
// 	return ele === ele.toUpperCase() ? ele.toLocaleLowerCase() : ele.toUpperCase()
// })
// 	//.join convert from array to string
// 	.join(``)
// console.log(swappingCases.split(""))
// console.log(sw)

//arrow
console.log(`Arrow functions and swapping cases`)
console.log(`The orginal casses ${swappingCases}`)

let sw = swappingCases.split("")
	.map((ele) => (ele === ele.toUpperCase() ? ele.toLocaleLowerCase() : ele.toUpperCase()))
	//.join convert from array to string
	.join(``)
console.log(`The orginal casses ${swappingCases.split("")}`)
console.log(`The swapping casses ${sw}`)

//inverted numbers 
let inv = invertedNumbers.map(function (ele) {
	return -ele;
})
console.log(inv)

//Ignore Numbers
let ign = ignoreNumbers.split("").map(function (ele) {
	return isNaN(parseInt(ele)) ? ele : "";
})
	.join("")
console.log(ign)

//filter 
//get friends with a name start with a
let friend11 = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
//get friends with a name start with a
console.log("get friends name start with (a)")

let filterFriends = friend11.filter(function (ele) {
	return ele.startsWith("A") ? true : false;
})
console.log(filterFriends);


//Get even Numbers 
console.log("Get even Numbers ")
let numbers2 = [11, 20, 2, 5, 17, 10];
let evenNumbers = numbers2.filter(function (ele) {
	return ele % 2 === 0 ? true : false;
})
console.log(evenNumbers)


//test map VS filter 
console.log("add map")
let addMap = evenNumbers.map(function (ele) {
	return ele + ele;
})
console.log(addMap)
console.log("add filter")
let addFilter = evenNumbers.filter(function (ele) {
	return ele + ele;
})
console.log(addFilter)


const assert = chai.assert;

// describe("Create Phone Number", () => {
// 	it("Fixed tests", () => {
// 		assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
// 		assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
// 		assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
// 	});
// });