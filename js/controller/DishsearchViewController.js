// JavaScript Document
var DishsearchViewController = function (view, model,app){


	view.searchBtn.on('click',function(event){

		
		//console.log("typeeoooooiiioioee"+view.type);
		//console.log("text"+view.text);
		
		model.getSelectedDish();
		
		
	})

	view.dishdisplay.on('click', '.meal', function(event){
 	   var id = $(this).attr('id'); 
 	   model.setTargetId(id);
 	  // model.setDish(id);
 	   console.log(model.targetId+"model.targetId");
 	   view.hide();
 	   app.jumpTo("DetailView");

      
 	})
	
}
