//-----------------------------------------------------------------
/* File stores functions that control game */
//-----------------------------------------------------------------

// Load instructions variable with help text
let instructions = document.getElementById("helpText");
//----------------------------------------------------------------- 
/* Function to pause game:
	switches game state, which is checked at the beginning of each
	animation loop- will trigger pause */
function pauseGame() {//											
	if (gameStatus) {
		gameStatus = 0;
		return;
	} else {
		instructions.style.display = "none"
		document.getElementById("help").innerHTML = "Help";
		document.getElementById("help1").innerHTML = "Help";
		gameStatus = 1;
		return;
	}
}
//-----------------------------------------------------------------


//----------------------------------------------------------------- 
/* Function pauses game and displays help text */

function helpGame() {//												

	if (gameStatus || (!gameStatus && instructions.style.display == "none")) {
		gameStatus = 0;
		instructions.style.display = "block";
		document.getElementById("help").innerHTML = "Close";
		document.getElementById("help1").innerHTML = "Close";
		return;
	} else {
		document.getElementById("helpText").style.display = "none";
		document.getElementById("help").innerHTML = "Help";
		document.getElementById("help1").innerHTML = "Help";
		gameStatus = 1;
		return;
	}
}