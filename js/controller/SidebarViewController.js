// JavaScript Document
var SidebarViewController = function (view, model){
	view.plusGuestBtn.on('click', function(event){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	})
	
	view.minusGuestBtn.on('click', function(event){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	})
	
	
}

