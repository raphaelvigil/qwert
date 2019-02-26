function nextImage(el){
	if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
	}
	else if (el.src.match("images/lemon_slot.PNG")){
		el.src = "images/orange_slot.PNG";
	} 
	else if (el.src.match("images/orange_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
	} 
	else {
		// do nothing
	}
} 

// LEMON --> BAR --> CHERRY
function nextImage1(el){
	if (el.src.match("images/lemon_slot.PNG")){
		el.src = "images/bar_slot.PNG";
	} 
	else if (el.src.match("images/bar_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
	} 
	else if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
	} 
	else {
		// do nothing
	}
}


// ORANGE --> CHERRY --> SEVEN --> WATERMELON
function nextImage2(el){
	if (el.src.match("images/orange_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
	} 
	else if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/seven_slot.PNG";
	} 
	else if (el.src.match("images/seven_slot.PNG")){
		el.src = "images/watermelon_slot.PNG";
	} 
	else if (el.src.match("images/watermelon_slot.PNG")){
		el.src = "images/orange_slot.PNG";
	}
	else {
		// do nothing
	}
}

function playSound() {
	if (document.images["slot1"].src.match("images/cherry_slot.PNG")) {
		if (document.images["slot2"].src.match("images/cherry_slot.PNG")) {
			if (document.images["slot3"].src.match("images/cherry_slot.PNG")) {
				document.images["slot1"].classList.add("opaque")
				document.images["slot2"].classList.add("opaque")
				document.images["slot3"].classList.add("opaque")
				document.getElementById('you-win').play();
			}
		}
	}
}