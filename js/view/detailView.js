
var DetailView = function (container, model) {
	var detailview1 = container.find("#detail1");
	var detailview2 = container.find("#detail2");
	this.backBtn = container.find("#backBtn");

    
	this.update = function(){
		
		var onedish = model.onedish;

	if(onedish){

		html1='';
		html1 +='<div class="row ">' + '<p class = "h4">' + onedish.name + '</p></div>';
		html1 +='<div class="row">'+'<img src="images/' + onedish.image + '"'+'class = "bigpic">' + '</div>';
		html1 +='<div class="row"><p>'+ onedish.description +'</p></div>';
		detailview1.html(html1);
		
		html2='';
		html2 +='<div class="row ">' + '<p class = "h4">' + "Preperation" + '</p></div>';
		html2 +='<div class="row"><p>'+ onedish.description +'</p></div>';
	
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
 
