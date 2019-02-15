// JavaScript Document
var IngredientViewController = function (view, model,app){

		
	view.addToMenuBtn.on('click', function(event){
	
		 var id = $(this).attr('id'); 
 	   model.setDish(id);
		model.addDishToMenu(id);
		
	})


}

