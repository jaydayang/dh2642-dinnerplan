
var SidebarView = function (container, model) {
	

	var orderlist = container.find("#orderlist");
	var numberOfGuests = container.find("#numberOfGuests");
	var totalPrice = container.find("#totalPrice");

	this.plusGuestBtn = container.find("#plusGuestBtn");
	this.minusGuestBtn = container.find("#minusGuestBtn");
	this.confirmBtn = container.find("#confirmBtn");
	

     
	this.update = function(){
		html='';
		front = `<table class="wholetable2"><tr><td>Dish</td><td>Cost</td>`;
	
		var menu = model.getFullMenu();

		if(menu){
			const menulength = menu.length;
		
			for(let i = 0; i < menulength; i++){
	
				html += '<tr><td>'+menu[i].name+'</td>';
				html += '<td>'+model.getEachMenuPrice(i)+'</tr>';
			}

			footer = '<tr><td colspan="2">Cost:'+model.getTotalMenuPrice()+'</td></tr></table>'
			orderlist.html(front+html+footer);
			numberOfGuests.html(model.getNumberOfGuests());
			totalPrice.html(model.getTotalMenuPrice());
			
			
		}
		
	}
	


	this.hide = function(){
		container.hide();
	}
	
	this.show = function(){
		container.show();
	}

	// initialization
	this.update();
	this.update1 = function(){
		
	}

	model.addObserver(this);
}


 
