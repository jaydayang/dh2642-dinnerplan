// JavaScript Document
var DetailViewController = function (view, model,app){
	

	view.backBtn.on('click', function(event){
		app.jumpTo("DishSearchView");
	})

	view.addToMenuBtn.on('click', function(event){
	
		var id = $(this).attr('id'); 
 	   
		model.addDishToMenu(view.onedish);
		console.log("addtomenu");
	})



	
}