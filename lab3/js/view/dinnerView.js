// JavaScript Document

var DinnerView = function (container, model) {

	this.printOutBtn = container.find("#printOutBtn");
	var dinneroverview = container.find("#dinneroverview");


	this.hide = function(){
		container.hide();
	}
	
	this.show = function(){
		container.show();
	}

	this.update = function(){
		var dishitemview = new DishitemView(container, model);
	
	
		var dinnercontent = '<div class="col-md-9 col-sm-12 col-xs-12">'+ dishitemview.getdinnercontentandprice()+'</div><div class="col-md-3 col-sm-12 col-xs-12"><h3>Total:</h3><h4>'+model.getTotalMenuPrice()+'</h4></div>';
  
	
		dinneroverview.html(dinnercontent);
	
	}

	this.update();
	model.addObserver(this);
	

	
	
}