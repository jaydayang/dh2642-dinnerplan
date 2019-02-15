
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
	
	
	var onedish = model.onedish;

	if(onedish){

		console.log("onedish");
		console.log(onedish);
	
 
		html1 += '<td colspan="3">'+"Ingredients for "+ model.getNumberOfGuests() + " People"+'</td>'
		
		for(let i = 0; i < onedish.ingredients.length; i++){
		/*create table*/

			html2 += '<tr><td>'+onedish.ingredients[i].quantity * model.getNumberOfGuests() + onedish.ingredients[i].unit+'</td>';
			html2 += '<td>'+onedish.ingredients[i].name+'</td>';
			html2 += '<td>'+onedish.ingredients[i].price * model.getNumberOfGuests()+'</td></tr>';
		}
		footer = ''
		footer += 'Cost:'+model.getTotalMenuPrice()
	
		guestnumber.html(html1);
		ingredientlist.html(html2);
		totalprice.html(footer);
		

	}
	
	
	
}
	
//this.update();
model.addObserver(this);
	
	
}
 
