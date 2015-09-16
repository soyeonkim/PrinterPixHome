// sets variable source to the animalTemplate id in index.html
var source = document.getElementById("animalTemplate").innerHTML;
 
// Handlebars compiles the above source into a template
var template = Handlebars.compile(source);
 
// data
var data = {animals: [
  {type: "Dog", sound: "woof"},
  {type: "Cat", sound: "meow"},
  {type: "Cow", sound: "moo"}
]};


var data3 = { 
	promotion: [
    	{ url: "../img/Themes/headBanner/Head-Banner.jpg", description: "Hello!" },
    	{ url: "../img/Themes/headBanner/Head-Banner.jpg", description: "World!" }
  ]
};
 
// data is passed to above template
var output = template(data3);
 
// HTML element with id "animalList" is set to the output above
document.getElementById("animalList").innerHTML = output;