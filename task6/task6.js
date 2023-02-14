let myAdmins = ["Ahmad", "Osama", "Sayed", "Stop", "ٍSmaera"]
let myEmployes = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amani", "Soso"]
let count = 0;

document.write(`<div class="title"> We have  X Admins<br><hr></div>`)

for (let i = 0; i < myAdmins.length; i++) {
    document.write(`<div class="task6">The Admin For Team ${i + 1} Is ${[myAdmins[i]]} <br>`)
    document.write(`<h3>Team Members:</h3>`)
    for (let k = 0; k < myEmployes.length; k++) {
        if (myAdmins[i][0] === myEmployes[k][0]) {
            document.write(`<p>${count += 1} - ${myEmployes[k]} </p>`)
        }
    }
    document.write(`<hr>`)
    if (i === 2) {
        break;
    }

}


