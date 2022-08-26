// Grabbing all necessary elements
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector('li');



function inputLength() {
	return input.value.length;
}
function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value))
	li.appendChild(btn);
	btn.appendChild(document.createTextNode("Complete!"));
	li.classList.add("item");
	btn.classList.add("deleteBtn");
	ul.appendChild(li);
	input.value = "";
}
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// This function strikes a line through the item
// when you click on it!
function toggleStrikeThroughItem(e){
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("done");
	}
}

// This function deletes the list item when the button is clicked!
function removeListItem(e) {
	if (e.target.tagName === "BUTTON") {
		e.target.parentNode.remove();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleStrikeThroughItem);
ul.addEventListener("click", removeListItem);
