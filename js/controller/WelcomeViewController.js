// JavaScript Document

var WelcomeViewController = function (view, model,app){
	
	view.createNewPlanBtn.on('click', function(event){
		
		app.jumpTo("DishSearchView");
		//view.style.display = 'none';
		//view.contianer.hide();
	})
	
}