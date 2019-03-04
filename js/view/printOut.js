
var PrintOut = function (container, model) {
	
	this.backBtn = container.find("#backBtn");
	var printlist = container.find("#printlist");
	
	this.hide = function(){
		container.hide();
	}
	
	this.show = function(){
		container.show();
	}
	var numberOfGuests = container.find("#numberOfGuests");
	
	
	
	this.update=function(){
	html='';
	
	
	var menu = model.getFullMenu();
	const menulength = menu.length;
	console.log("lenth"+menu.length);
	//menu.forEach(function())
	for(let i = 0; i < menu.length; i++){
		
		
			
		html += '<div class="col-md-12 col-sm-12 col-xs-12">'+'<div class="col-md-3 col-sm-3 col-xs-12">'+ '<img src = "' + menu[i].image  +'" '+'class = "img-responsive">'+'</div>';
		html +=
        '<div class="col-md-3 col-sm-3 col-xs-12">' +
        '<p class="h4">' +
        menu[i].title +
        "</p >" +
        "<p>" +
        menu[i].instructions +
        "</p >" +
        "</div>";
		//html +='<div class="col-md-3 col-sm-3 col-xs-12">' + '<p class="h4">' + menu[i].name + '</p>'  + '<p>' + menu[i].instructions + '</p>'+'</div>';
		html +='<div class="col-md-6 col-sm-6 col-xs-12">' +'<p class="h4">' + 'Preperation' + '</p>' + '<p>' + menu[i].instructions + '</p>' + '</div>' + '</div>'
	}
	
	printlist.html(html);
	numberOfGuests.html(model.getNumberOfGuests());
}
this.update();
model.addObserver(this);
	
	
}
 
