
var WelcomeView = function (container, model) {
	


	var welcomeContext = container.find("#welcomeContext");
	this.createNewPlanBtn = container.find("#createNewPlanBtn");

	this.hide = function(){
		container.hide();
	}
	
	this.show = function(){
		container.show();
	}
	
	welcomeContext.html("Welcome to Dinner Plan!");
	
}
 
