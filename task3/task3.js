

let a = 10;
a < 10
    ? console.log(10)
    : a >= 10 && a <= 40
        ? console.log("10 to 40")
        : a > 40
            ? console.log("> 40")
            : console.log("unknown")




let st = "Elzero Web School";
if (st[st.indexOf("W")].toLowerCase() === "w") {
    console.log("Good");
}

if (!typeof st !== "string") {
    console.log("Good");
}

if (typeof st.length === "number") {
    console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}
