
var IngredientList = function (container, model) {

	this.addToMenuBtn = container.find("#addToMenuBtn");

	this.hide = function(){
		container.hide();
	}
	
	this.show = function(){
		container.show();
	}
	
	var ingredientlist = container.find("#inlist");
	var guestnumber = container.find("#guestnumber");
	//this.addToMenuBtn;
	var totalprice = container.find("#totalprice");

this.update = function(){	

	html1='';
	html2='';
	
	
	//var onedish = model.getDish();

	if(model.getDish(model.targetId)){

		//console.log("onedish");
		//console.log(model.getDish(model.targetId));
	    
	    model.getDish(model.targetId).then(dish =>{
	    	this.onedish = dish;
	    	this.renderFetchedData(this.onedish);

	    })

	    this.renderFetchedData = function(onedish){

	    	html1 += '<td colspan="3">'+"Ingredients for "+ model.getNumberOfGuests() + " People"+'</td>'
	  
		
		//for(let i = 0; i < model.getDish().extendedIngredients.length; i++){
		/*create table*/

			onedish.extendedIngredients.forEach(function(ingredient){

				html2 += '<tr id="'+onedish.id+'"><td>'+ingredient.amount * model.getNumberOfGuests() + ingredient.unit+'</td>';
				html2 += '<td>'+ingredient.name+'</td>';
				html2 += '<td>'+ 1 * model.getNumberOfGuests()+'</td></tr>';
				html2 += '<td>'+ ingredient.originalString+'</td>';

			})
			
			footer = ''
			footer += 'Cost:'+model.getTotalMenuPrice();
	
			guestnumber.html(html1);
			ingredientlist.html(html2);
			totalprice.html(footer);

	    }
 
	
	}
	
	
}
	
//this.update();
model.addObserver(this);

	
	
}
 
