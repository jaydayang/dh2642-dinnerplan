
var DetailView = function (container, model) {
	var detailview = container.find("#detail");
	var detailview1 = container.find("#detail1");
	var detailview2 = container.find("#detail2");
	this.backBtn = container.find("#backBtn");

	
	this.addToMenuBtn = container.find("#addToMenuBtn");

	
	var ingredientlist = container.find("#inlist");
	var guestnumber = container.find("#guestnumber");
	//this.addToMenuBtn;
	var totalprice = container.find("#totalprice");
    this.onedish;
    

//this.update();


	

	this.update = function(datachange){

		
		

		if(datachange=="idChanged"){
			//Loading part
			html = '<div><img src="loading.gif"></div>';
			//detailview.html(html);
			detailview1.html(html);
			detailview2.html('');	
			guestnumber.html('');
			ingredientlist.html('');


			var iid = model.getTargetId();
			model.getDish(iid).then(dish => {
			console.log("targetId agintyeer"+iid);
			this.onedish = dish;
			
			this.renderFetchedData(this.onedish);
			this.renderFetchedData1(this.onedish);
			this.renderFetchedData2(this.onedish);
			console.log(this.onedish);
		
		})
		.catch(error =>{
			console.log(error);
			this.renderError();

		})
	}else if(datachange=="guestChanged"){
		this.renderFetchedData1(this.onedish);
		this.renderFetchedData2(this.onedish);
	}
	

	
	}

		
			
	
	
	//var onedish = model.getDish();

	//     if(model.getDish(model.targetId)){

	// 	//console.log("onedish");
	// 	//console.log(model.getDish(model.targetId));
	    
	//     model.getDish(model.targetId).then(dish =>{
	//     	this.onedish = dish;
	//     	this.renderFetchedData2(this.onedish);

	// 	})
	// }


		this.renderFetchedData = function(onedish){
			
				console.log("yujieyangshishabi");
				//console.log(onedish);

			html1='';
			html1 +='<div class="row ">' + '<p class = "h4">' + onedish.title + '</p></div>';
			html1 +='<div class="row">'+'<img src="' + onedish.image+ '"'+'class = "bigpic">' + '</div>';
			//describtion
			html1 +='<div class="row"><p>'+ onedish.sourceName +'</p></div>';
			detailview1.html(html1);
		
			html2='';
			html2 +='<div class="row ">' + '<p class = "h4">' + "Preperation" + '</p></div>';
			//preparation
			html2 +='<div class="row"><p>'+ onedish.instructions +'</p></div>';

			//container.html()
	
			detailview2.html(html2);

			

		}

		this.renderFetchedData1 = function(onedish){
			console.log("linbinyuanshishabi");
			html3='';
			html3 += '<td colspan="3">'+"Ingredients for "+ model.getNumberOfGuests() + " People"+'</td>'
			guestnumber.html(html3);

		}
		
		//for(let i = 0; i < model.getDish().extendedIngredients.length; i++){
		/*create table*/
		this.renderFetchedData2 = function(onedish){
			console.log(onedish.extendedIngredients);
			html4='';
			onedish.extendedIngredients.forEach(function(ingredient){
                
				html4 += '<tr id="'+onedish.id+'"><td>'+ingredient.amount * model.getNumberOfGuests() + ingredient.unit+'</td>';
				console.log(ingredient.amount);
				console.log(ingredient.unit);
				html4 += '<td>'+ingredient.name+'</td>';
				html4 += '<td>'+ 1 * model.getNumberOfGuests()+'</td></tr>';
				html4 += '<td>'+ ingredient.originalString+'</td>';
                html4 +='spring';
			})
			
			footer = ''
			footer += 'Cost:'+model.getTotalMenuPrice();
	
		
			ingredientlist.html(html4);
			totalprice.html(footer);

		}
		this.renderError=function(){
			var content = '';
			content+='<div style=" text-align:center">'+'<img src="errorgif.gif" style="width: 250px">'+'<p>Oh no! The network is broken!</p>'+'</div>';
			detailview1.html(content);	
			detailview2.html('');	
			guestnumber.html('');
			ingredientlist.html('');
			//container.html(content);
		}
 
	
		
 


	model.addObserver(this);

	this.hide = function(){
		container.hide();
	}

	this.show = function(){
		container.show();
	}
	
}

 
