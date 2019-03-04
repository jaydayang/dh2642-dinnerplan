


var DinnerModel = function() {
	
	var menu = new Array();
	
 
	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu
	var guestnumbers = 0;
	this.targetId;

   	var observers=[];
	this.selecteddish = [];
  
    this.addObserver=function(observer){ 
    	observers.push(observer); 
    	
    }


     this.removeObserver=function(observer){ 
     /* remove observer from array */
     	observers.splice(observers.indexOf(observer),1);
     
    }


    this.notifyObservers=function(changeDetails){ 

    	for(var i=0; i<observers.length; i++){
    		/* update  observers array*/
			observers[i].update(changeDetails);
			
			
    	}     
    }


	this.setNumberOfGuests = function(num) {
		//TODO Lab 1
		if(num>=0){
			guestnumbers = num;
		}
		else{
			guestnumbers=0;
		}
		
		console.log(guestnumbers);
		//this.addObserver(guestnumbers);
		//this.removeObserver(guestnumbers);
		this.notifyObservers("guestChanged");
	
	}
	
	
	this.getNumberOfGuests = function() {
		//TODO Lab 1
		//console.log(guestnumbers);
		return guestnumbers;

		
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function() {
		//TODO Lab 1
		//var selecteddish = new Array();
		//var typ="dessert";
		//console.log("typeeeeesda"+type);
		
		this.notifyObservers("searchChanged");
		return this.selecteddish;
		
		
	}

	//Returns all the dishes on the menu.
	//this.getFullMenu = function() {
		//TODO Lab 1
		//this.addDishToMenu(1);
		//this.addDishToMenu(2);
		//var menu = new Array();
		//return menu;
	//}
	
	this.getFullMenu = function() {
		
		  return menu;
		  
 }

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//TODO Lab 1
		var allingredients = new Array();
		this.getFullMenu().forEach(function(value,index,array){
			value.extendedIngredients.forEach(function(ingredient){
				allingredients.push(ingredient);
			})
			
		})
        console.log(allingredients);
		return allingredients;
		
	
	}
	
	this.getEachMenuPrice = function(index){
		var price0 = 0;
		var dish = this.getFullMenu()[index];
		dish.extendedIngredients.forEach(function(){
			price0 += 1;						 
		})
		return price0;
		
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		//TODO Lab 1
		
		var price2 = 0;
		this.getAllIngredients().forEach(function(value, index, array){
			
			//value.forEach(function(value, index, array){
				//price1 += 1;
			    //console.log(value.price);
			//})
			
			//price2 += price1;
			price2+=1;

		})
		
		var totalprice = price2 *this.getNumberOfGuests();

		return totalprice;
		
	}
	
	this.getOneDish = function() {
  		menu[0] = dishes[7];
  		//TODO Lab 1
  		return menu;
 }

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(dish) {
		//TODO Lab 1
		//var dish = this.getDish(id);
		
		menu.push(dish);
		console.log("add");
		this.notifyObservers("menuChanged");
		
	}

	//Removes dish from menu
	this.removeDishFromMenu = function() {
		//TODO Lab 1
		var dish = this.getDish(id);
		var index = menu.indexOf(dish);
		menu.splice(index,1);
		
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
		//console.log("dishesssx"+dishes);
	    //return fetch("http://sunset.nada.kth.se:8080/iprog/group/14/recipes/search?query=burger&type=main+course",{
	    	return fetch("http://sunset.nada.kth.se:8080/iprog/group/14/recipes/searchComplex?query="+filter+"&type="+type,{
	    		headers:{   
		            'X-Mashape-Key': "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767"
 			}
 		}).then(response =>response.json())
 		.then(dish => dish.results);
	}


	this.onedish;
 //function that returns a dish of specific ID
 this.getDish = function (id) {
   //this.currentId=479101;
 	return fetch("http://sunset.nada.kth.se:8080/iprog/group/14/recipes/" + id +"/information",{
 		headers:{   
		            'X-Mashape-Key': "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767"
 	}
 	})
 	.then(response =>response.json())
 	//.then(dish => dish.results);
 }


 
 this.setTargetId = function(id){
 	//this.targetId
 	this.targetId=id;
 	console.log("herterteterterterte"+this.targetId);
	 this.notifyObservers("idChanged");

 

 }
 this.getTargetId = function(){
	//this.targetId
	return this.targetId;

	notifyObservers();

}

  




	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}

var y = new DinnerModel();







