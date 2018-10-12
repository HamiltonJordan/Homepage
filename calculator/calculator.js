//alert("hello there maf'k");
var focus = 0;
var action = null;
var input = document.getElementById('inputValue');
input.value = 0;
var button_selection = [false, false, false, false];

input.addEventListener("keyup", function(event) {
	//event.preventDefault();
	if (event.keyCode === 13) {
		equals();
	}
}); 

function addFocus(value) {
	if(!(isNaN(value))){
		focus = value;
		var node = document.createElement("p");
		var textnode = document.createTextNode(value);  
		node.appendChild(textnode); 
		var list = document.getElementById("whiteboard");
		list.insertBefore(node,list.childNodes[0]);
		input.value = '';
	}

}
function equals() {
	var cur_val = parseFloat(input.value);
	var a = focus;
	var b = cur_val;
	if(action == "plus") {
		addFocus(a+b);
		action = null;
		document.getElementById("button1").classList.remove("selected");
		button_selection[0] = false;
	}
	else if (action == "minus") {
		addFocus(a-b);
		action = null;
		document.getElementById("button2").classList.remove("selected");
		button_selection[1] = false;
	}
	else if (action == "mult") {
		addFocus(a*b);
		action = null;
		document.getElementById("button3").classList.remove("selected");
		button_selection[2] = false;
	}
	else if (action == "div") {
		addFocus(a/b);
		action = null;
		document.getElementById("button4").classList.remove("selected");
		button_selection[3] = false;
	}
	else{
    	addFocus(cur_val);
    }
}

function click1() {
	if (button_selection[0] == false){
		button_selection[0] = true;
		action = "plus";
		document.getElementById("button1").classList.add("selected");
		addFocus(parseFloat(input.value));
	}
	else{
		button_selection[0] = false;
		action = null;
		document.getElementById("button1").classList.remove("selected");

	}
	input.focus();
}
function click2() {
	if (button_selection[1] == false){
		button_selection[1] = true;
		action = "minus";
		document.getElementById("button2").classList.add("selected");
		addFocus(parseFloat(input.value));
	}
	else{
		button_selection[1] = false;
		action = null;
		document.getElementById("button2").classList.remove("selected");
	}
	input.focus();
}
function click3() {
	if (button_selection[2] == false){
		button_selection[2] = true;
		action = "mult";
		document.getElementById("button3").classList.add("selected");
		addFocus(parseFloat(input.value));
	}
	else{
		button_selection[2] = false;
		action = null;
		document.getElementById("button3").classList.remove("selected");
	}
	input.focus();
}
function click4() {
	if (button_selection[3] == false){
		button_selection[3] = true;
		action = "div";
		document.getElementById("button4").classList.add("selected");
		addFocus(parseFloat(input.value));
	}
	else{
		button_selection[3] = false;
		action = null;
		document.getElementById("button4").classList.remove("selected");
	}
	input.focus();
}