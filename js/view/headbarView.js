// JavaScript Document

var HeadbarView = function (container, model) {
	
	this.hide = function(){
		container.hide();
	}
	
	this.show = function(){
		container.show();
	}
	
	var numberOfGuests = container.find("#numberOfGuests");
	this.backBtn = container.find("#backBtn");
	this.update = function(){
	
	numberOfGuests.html(model.getNumberOfGuests());
	}
	this.update();
    model.addObserver(this);
	}