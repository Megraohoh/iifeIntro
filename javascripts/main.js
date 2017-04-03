// var outside = "global";

// function scopeStuff() {
// 	var inside = "local";
// 	console.log("outside from inside the function", outside); //global
// 	console.log("inside from inside the funtion", inside); //local
// }

// console.log("outside from outside the funtion", outside); //global
// // console.log("inside from the outside the funtion", inside); //not available outside the function

// scopeStuff();

// ************************************

// var global_base = 500;
// (function throwAway(){
// 	global_base+=500;
// 	console.log(global_base); //1000
// })();

// throwAway(); -- to make the function run without naming it is to add more ()().  
// The first () makes the function an expression. The second () calls the function. 

// document.getElementById('cat').addEventListener("click", throwAway);


// ************************************
var cats = (function(){
	var color = "black";				//These are private
	var type = "tiger";
	var name = "fluffy";

	return {		//inside of an object, you need to use a : instead of an =
		getColor : function(){
			return color;			//Everything in the object is public
		},
		getType : function(){
			return type;
		},
		setColor : function(newColor){
			color = newColor;
		}
	};
})();
// console.log(cats.getColor());	//black  
//console.log(cats.getType());	//tiger


// cats.getColor();   
// "black"
// cats.setColor("pink");  //get'ters and set'ters
// undefined
// cats.getColor();
// "pink"


// ************************************



























