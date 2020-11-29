// Display current date at top of counter
// Write code to add time blocks from 9 am to 5 pm
// create dynamic text boxes inside of each time block



// ======================
// VARIABLES
// ======================
let timeblock = document.querySelector('container');

btnShow.addEventListener(click, () => {
	let today = new Date();
	let month = today.getFullYear();	
	let date = today.getDate();

let current_date = `${month}/${date}/${year}`;
output.innerText = current_date;



// ======================
// FUNCTIONS
// ======================



// ======================
// MAIN PROCESS
// ======================