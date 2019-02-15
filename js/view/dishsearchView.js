// JavaScript Documen
var DishsearchView = function (container, model, app) {
	



	this.dishdisplay = container.find("#dishdisplay");
	this.typeBtn = container.find("#selectType");
    var selectTypee = this.selectType = container.find("#selectType");
	this.searchBtn = container.find("#searchBtn");
	

	this.update=function(){
		
		this.text = container.find("#selectText").val();
		
    	this.type = selectType[selectType.selectedIndex].value;
		
		var content = '';
		
		var dishlist = model.getAllDishes(this.type,this.text);
		//dishlist.length
		
        dishlist.forEach(function(dish){

			var dishitemview = new DishitemView(container, model, dish);
			content += '<div class="col-md-3 col-sm-6 col-xs-12 ">'+'<div id="' + dish.id + '"'+' class="meal">' +dishitemview.getdishcontent()+'</div></div>';
		})
		this.dishdisplay.html(content);		
		console.log("haha"+dishlist);
	}

	this.hide = function(){
		container.hide();
	}

	this.show = function(){
		container.show();
	}

	this.update();

	//var content1 = '';
	//var dishlist1 = model.getAllDishes();	
	//dishlist1.forEach(function(dish){

	//	var dishitemview = new DishitemView(container, model, dish);
	//	content1 += '<div class="col-md-3 col-sm-6 col-xs-12 ">'+'<div id="' + dish.id + '"'+' class="meal">' +dishitemview.getalldishcontent()+'</div></div>';
	//})
	//this.dishdisplay.html(content1);
	


	model.addObserver(this);
	
	
	
	
}
 
