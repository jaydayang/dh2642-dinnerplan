
var DetailView = function (container, model) {
	var detailview1 = container.find("#detail1");
	var detailview2 = container.find("#detail2");
	this.backBtn = container.find("#backBtn");

    
	this.update = function(){
		//model.targetId
		console.log("targetId agin"+model.targetId);
		var iid = model.targetId;
		model.getDish(iid).then(dish => {
			console.log("targetId agintyeer"+iid);
			this.onedish = dish;
			
			this.renderFetchedData(this.onedish);
		
			
		
			
		})

		this.renderFetchedData = function(onedish){
			
				console.log("yujieyangshishabi");
				//console.log(onedish);

			html1='';
			html1 +='<div class="row ">' + '<p class = "h4">' + onedish.name + '</p></div>';
			html1 +='<div class="row">'+'<img src="' + onedish.image+ '"'+'class = "bigpic">' + '</div>';
			//describtion
			html1 +='<div class="row"><p>'+ onedish.originalString +'</p></div>';
			detailview1.html(html1);
		
			html2='';
			html2 +='<div class="row ">' + '<p class = "h4">' + "Preperation" + '</p></div>';
			//preparation
			html2 +='<div class="row"><p>'+ onedish.originalString +'</p></div>';
	
			detailview2.html(html2);
			

		}
	
		
	}

	//this.update();

	model.addObserver(this);

	this.hide = function(){
		container.hide();
	}

	this.show = function(){
		container.show();
	}
	
}
 
