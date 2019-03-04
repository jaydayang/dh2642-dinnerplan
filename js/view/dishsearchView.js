// JavaScript Documen
var DishsearchView = function (container, model, app) {
	



	this.dishdisplay = container.find("#dishdisplay");
	this.typeBtn = container.find("#selectType");
    var selectTypee = this.selectType = container.find("#selectType");
	this.searchBtn = container.find("#searchBtn");
	

	this.update=function(datachange){

		if(datachange=="searchChanged"){
			//loading part
			content = '<div><img id="1" src="loading.gif"></div>';
			this.dishdisplay.html(content);

		    this.text = container.find("#selectText").val();
		
			this.type = selectType[selectType.selectedIndex].value;
			model.getAllDishes(this.text,this.type).then( dishlist=> {
			
				this.dl = dishlist;
            	this.renderFetchedData(this.dl);
		
		})
		.catch(error =>{
			console.log(error);
			this.renderError();

		})
	}
	}
		
			
    	
		


		this.renderFetchedData=function(dishlist){
			
		var content = '';

			dishlist.forEach(function(dish){
				//console.log("shdjflasjdfh");
				//console.log(dish);

			var dishitemview = new DishitemView(container, model, dish);
			//console.log("dish.id"+dish.id);
			content += '<div class="col-md-3 col-sm-6 col-xs-12 ">'+'<div id="' + dish.id + '"'+' class="meal">' +dishitemview.getdishcontent()+'</div></div>';
		})
		this.dishdisplay.html(content);		
		console.log("haha"+dishlist);

		}
		this.renderError=function(){
			var content = '';
			content+='<div style=" text-align:center">'+'<img src="errorgif.gif" style="width: 250px">'+'<p>Oh no! The network is broken!</p>'+'</div>';
			this.dishdisplay.html(content);		
	
		}

		//dishlist.length
		
        
	

	this.hide = function(){
		container.hide();
	}

	this.show = function(){
		container.show();
	}

	this.update('searchChanged');

	//var content1 = '';
	//var dishlist1 = model.getAllDishes();	
	//dishlist1.forEach(function(dish){

	//	var dishitemview = new DishitemView(container, model, dish);
	//	content1 += '<div class="col-md-3 col-sm-6 col-xs-12 ">'+'<div id="' + dish.id + '"'+' class="meal">' +dishitemview.getalldishcontent()+'</div></div>';
	//})
	//this.dishdisplay.html(content1);
	


	model.addObserver(this);
	
	
	
	
}
 
