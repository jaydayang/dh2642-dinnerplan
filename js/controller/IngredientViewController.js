// JavaScript Document
var IngredientViewController = function (view, model,app){

		
	view.addToMenuBtn.on('click', function(event){
	
		
		model.addDishToMenu(model.onedish.id);
		
	})


}

