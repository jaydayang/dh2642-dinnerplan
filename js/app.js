$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	var welcomeView = new WelcomeView($("#welcomeView"), model);
	
	var sidebarView = new SidebarView($("#sidebarView"), model);
	var dishsearchView = new DishsearchView($("#dishsearchView"), model);
	var dishitemView = new DishitemView($("#dishitemView"), model);
	var dinnerView = new DinnerView($("#dinnerView"),model);
	
    
    var printOut = new PrintOut($("#printOut"),model);
	var detailView = new DetailView($("#detailView"),model);
	var headbarView = new HeadbarView($("#headbarView"),model);

    
    //var initViewController = new InitViewController();

	var welcomeViewController = new WelcomeViewController(welcomeView, model,this);
	var sidebarViewController = new SidebarViewController(sidebarView, model,this);
	
	
	var dinnerViewController = new DinnerViewController(dinnerView, model,this);
	var headbarViewController = new HeadbarViewController(headbarView, model,this);
	var dishsearchViewController = new DishsearchViewController(dishsearchView,model,this);
	var detailViewController = new DetailViewController(detailView, model, this);



	
	

	
		
		$('#detailView').hide();
		$('#dinnerView').hide();
		$('#dishitemView').hide();
		$('#dishsearchView').hide();
		$('#headbarView').hide();
		$('#ingredientList').hide();
		$('#printOut').hide();
		$('#sidebarView').hide();
	

	this.jumpTo = function(showingView){
		$('#detailView').hide();
		$('#dinnerView').hide();
		$('#dishitemView').hide();
		$('#dishsearchView').hide();
		$('#headbarView').hide();

		$('#printOut').hide();
		$('#sidebarView').hide();
		$('#welcomeView').hide();


		switch(showingView){
			case "DishSearchView":
			$('#sidebarView').show();
			$('#dishsearchView').show();
				break;

			

			case "DinnerView":
			$('#dinnerView').show();
			$('#headbarView').show();
			break;

			case "PrintOutView":
			$('#printOut').show();
			$('#headbarView').show();
			break;

			case "DetailView":
			$('#sidebarView').show();
			$("#detailView").show();
 	       
		}
	}


});
