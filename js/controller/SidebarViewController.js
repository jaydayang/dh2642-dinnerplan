// JavaScript Document
var SidebarViewController = function (view, model,app){
	view.plusGuestBtn.on('click', function(event){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);

	})
	
	view.minusGuestBtn.on('click', function(event){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	})

	view.confirmBtn.on('click', function(event){
		app.jumpTo("DinnerView");

	})
	//$("#ingredientList").addToMenuBtn.on('click',function(event){
	//	model.addDishToMenu(2);
	//})
	
	
}

