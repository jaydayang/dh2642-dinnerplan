
var DishitemView = function (container, model, dish) {
	
	
	var dishimagelist = container.find("#dishimagelist");


	
	
	this.getdishcontent = function(){
		var content='';
		
		//content += '<div class="col-md-3 col-sm-6 col-xs-12">';
		//content += '<div class="meal"';
		content += '<img src="'+dish.image + '" class="imagegroup">';
		content += '<div class= "block">'+ dish.title + '</div>';
		//console.log("dissssssssh"+dish.title);
		
		return content;
	}
	this.getalldishcontent = function(){
		var content='';
		
		//content += '<div class="col-md-3 col-sm-6 col-xs-12">';
		//content += '<div class="meal"';
		content += '<img src="'+dish.image + '" class="imagegroup">';
		content += '<div class= "block">'+ dish.name + '</div>';
		//console.log("dissssssssh"+dish.name);
		
		return content;
	}
	
	
	this.getdinnercontent = function(){
		var dinnerlist = model.getFullMenu();
		var dinnercontent ='';
		
		for(let j=0; j<dinnerlist.length;j++){
			dinnercontent +='<div class="col-md-3 col-sm-6 col-xs-12">';
			dinnercontent += '<div class= "meal">';
			dinnercontent += '<img src="'+dinnerlist[j].image + '"' + ' class="imagegroup">';
			dinnercontent += '<div class= "block">'+ dinnerlist[j].name + ' </div></div></div>';
		}
		return dinnercontent;	
	}

	
	
	/****** use for dinnerView *********/
	this.getdinnercontentandprice = function(){
		var dinnerlist = model.getFullMenu();
		var dinnercontent ='';
	
		
		for(let j=0; j<dinnerlist.length;j++){
			dinnercontent +='<div class="col-md-3 col-sm-6 col-xs-12">';
			dinnercontent +='<div class="col-md-12 col-sm-12 col-xs-12">';
			dinnercontent += '<div class= "meal">';
			console.log(dinnerlist[j]);
		
			dinnercontent += '<img src="'+dinnerlist[j].image + '"' + ' class="imagegroup">';
			dinnercontent += '<div class= "block">'+ dinnerlist[j].title + ' </div></div></div>';
			dinnercontent += '<div class="col-md-12 col-sm-12 col-xs-12">';
			dinnercontent += '<div class = "center"><p>' + model.getEachMenuPrice(j) + " SEK"+'</p></div></div></div>'
		}
		return dinnercontent;	
	}
	
}

 
