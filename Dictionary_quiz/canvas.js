try {
	
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// THIS IS THE SECTION WHERE PROCODING INJECTS THE CANVAS SCRIPT
	//
	//
	
	// JavaScript Dictionary
// (cc) 2013 by Michael Markert for Procoding

// create the input element
document.body.style.backgroundColor = "#FFFFFF";
//document.body.style.padding = "10%";
var x =0;
var score = 0;


var div1 = document.createElement('div');
div1 = document.body.appendChild(div1);
div1.class = "styled-select";
div1.style.position = "absolute";
div1.style.top = "0%";
div1.style.height = "20%";
div1.style.width = "100%";
div1.style.padding = "20px";
div1.style.backgroundColor = "#D6FF74";

var div2 = document.createElement('div');
div2 = document.body.appendChild(div2);
div2.style.position = "absolute";
div2.style.top = "20%";
div2.style.height = "80%";
div2.style.width = "100%";
div2.style.padding = "20px";
div2.style.backgroundColor =  "#FFE6C3";

var title = document.createElement('h1');
title.innerHTML = "Programming Dictionary";
title.style.color = "#9DA61C";
title.style.textDecoration = "underline";
//title.style.border = "thin solid #766352";
title = div1.appendChild(title);

var selector = document.createElement('select');
selector.id = "selector";
selector.name = "selector";
selector = div1.appendChild(selector);
addEntry("&lt;please select&gt");
selector.style.position = "absolute";
selector.style.top = "40%";
selector.style.width = "80%;";
selector.style.fontSize = "30px";
//selector.size = "4";
selector.addEventListener("change", selectionChanged);

var scoreDisplay = document.createElement('h3');
scoreDisplay.textContent ="You score is 0   ";
scoreDisplay.style.position = "absolute";
scoreDisplay.style.top = "50%";
scoreDisplay.style.color = "#2EB925";
scoreDisplay.style.backgroundColor = "white";
//scoreDisplay.style.textDecoration = "underline";
scoreDisplay = div1.appendChild(scoreDisplay);

var para = document.createElement('p');
para.style.position = "absolute";
para.style.top = "10%";
para.style.width = "80%";
para.style.color = "#777777";
para.textContent = "Welcome to learning programming terminology page! Please, select a word";
para = div2.appendChild(para);

var start = document.createElement('button');
start.innerHTML = "Click to Start";
start.style.position = "relative";
start.style.top = "20%";
start = div2.appendChild(start);
start.addEventListener("click",initial);

var header = document.createElement('h2');
header.style.position = "absolute";
header.textContent = "Programming Terminology";
header.style.top = "3%";
header.style.color = "#A97122";
header = div2.appendChild(header);

// add values
function addEntry(name, value) {
    var option = document.createElement('option');
    option.value = value;
    option.innerHTML = name;
    option.id = name;
    selector.appendChild(option);  
}

function selectionChanged() {
 if (document.getElementById("selector").selectedIndex == x){ 
         x = Math.round(Math.random() * 10); 
         displayDescription();
         //header.textContent = document.getElementById("selector").selectedIndex + " : " +  this.selectedOptions[0].id ;
         header.textContent = "CORRECT!";
         score ++;
         scoreDisplay.textContent ="You score is " + score;
  }else{
      header.textContent = "TRY AGAIN!";
      score --;
      scoreDisplay.textContent ="You score is " + score;
    }
}

function displayDescription(){ 
    var sel = document.getElementById("selector");
    var selValue = sel.options[x].value;
    //console.log(score);
    para.textContent = selValue;
    console.log(x);
    }

function initial(){
    header.textContent = "Select the correct word";
    start.innerHTML = "Click to Restart";
    score = 0;
    x = Math.round(Math.random() * 14 + 1);
    scoreDisplay.textContent ="You score is " + score;
    displayDescription(); 
    document.getElementById("selector").selectedIndex =0;
    }


// fill the dictionary with some values
addEntry("variable", "A variable can store values. It is declared with 'var'.");
addEntry("value", "A value can be of any datatype. JavaScript is an untyped language. For example, 1 would be an integer value, whereas \"one \" (note the quotes) is an object value of type 'String'");
addEntry("undefined", "The value of an unset variable. Undefined is less than 0 or false, it's the equivalent of nothing. In other languages it might be called NULL, void or nil");
addEntry("NaN", "Abbrev. for 'Not a Number', often a value where a number would have been expected, but the objects's value is not a number.");
addEntry("expression", "A typical expression would be 'x=1;'. An expression typically ends with a semi-colon");
addEntry("function", "A function is a black-box, that can take various parameters as input, process them and return a value (output). A function may also call invoke functions. Round brackets indicate you're dealing with a function");
addEntry("parameter", "Parameters are the variables and values passed with the braces of functions");

addEntry("object", "Objects are somewhat slippery because you will find many definitions, but I think it's safe to say, that objects typically have properties and methods");
addEntry("method", "A function of an object is called method.");
addEntry("property", "A visible variable of an object is called property.");
addEntry("member", "The methods and properties of an object are called 'members'. They can be addressed as 'obj[\"member\"]' or with the Member Operator (the dot) like 'obj.member'");
addEntry("getter", "A getter is a special method of an object, that allows read access to a property -> getName()");
addEntry("setter", "A setter is a special method of an object, that allows write access to a property -> setName('Michael')");
addEntry("accessor", "Getters and Setters are called Accessors: they give access to an objects' properties");

//addEntry("datatype", "?");
//addEntry("operator", "?");
//addEntry("assignmentOperator", "?");
//addEntry("string", "?");
//addEntry("array", "?");
//addEntry("logic operators", "?");

addEntry("DOM", "The Document Object Model: this is (basically) all the HTML nodes represented as a JavaScript Object");
addEntry("element", "An element in the DOM tree (see DOM)");
//addEntry("canvas", "?");
//addEntry("client", "?");
//addEntry("server", "?");
//
//addEntry("declaration", "?");
//addEntry("ECMAScript", "?");
//
//addEntry("variable scope", "?");
//addEntry("global variable", "?");
//addEntry("local variable", "?");
//addEntry("...", "?");


	
	//
	//
	// THIS WAS THE SECTION WHERE PROCODING INJECTED THE CANVAS SCRIPT
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	
} catch (e) {
	_procoding_throwError(e);
}
