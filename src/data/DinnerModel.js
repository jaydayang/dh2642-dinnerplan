import ObservableModel from "./ObservableModel";

const BASE_URL = "http://sunset.nada.kth.se:8080/iprog/group/14/";
const httpOptions = {
  headers: {
    "X-Mashape-Key": "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767"
  }
};

class DinnerModel extends ObservableModel {
  constructor() {
    super();
    this.allTypes = [
      "main course",
      "side dish",
      "dessert",
      "appetizer",
      "salad",
      "bread",
      "breakfast",
      "soup",
      "beverage",
      "sauce",
      "drink"
    ];
    this._numberOfGuests = 1;
    this.menu = new Array();
  }

  /**
   * Get the number of guests
   * @returns {number}
   */
  getDetailIndex() {
    return this.detailIndex;
  }

  getNumberOfGuests() {
    return this._numberOfGuests;
  }

  /**
   * Set number of guests
   * @param {number} num
   */
  setNumberOfGuests(num) {
    if (num >= 1) {
      this._numberOfGuests = num;
    } else {
      this._numberOfGuests = 1;
    }
    this.notifyObservers();
  }

  getFullMenu() {
    return this.menu;
  }
  addDishToMenu(dish) {
    //TODO Lab 1
    //var dish = this.getDish(id);

    this.menu.push(dish);
    console.log("add");
    this.notifyObservers("menuChanged");
  }

  getAllIngredients() {
    //TODO Lab 1
    var allingredients = new Array();
    this.getFullMenu().forEach(function(value, index, array) {
      value.extendedIngredients.forEach(function(ingredient) {
        allingredients.push(ingredient);
      });
    });
    console.log(allingredients);
    return allingredients;
  }

  // API methods

  /**
   * Do an API call to the search API endpoint.
   * @returns {Promise<any>}
   */
  getAllDishes(type, filter) {
    console.log("type" + type);
    console.log("filter" + filter);
    return fetch(
      "http://sunset.nada.kth.se:8080/iprog/group/14/recipes/searchComplex?query=" +
        filter +
        "&type=" +
        type,
      {
        headers: {
          "X-Mashape-Key": "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767"
        }
      }
    ).then(response => response.json());
    //.then(dish => dish.results))
  }

  getDish(id) {
    //this.currentId=479101;
    return fetch(
      "http://sunset.nada.kth.se:8080/iprog/group/14/recipes/" +
        id +
        "/information",
      {
        headers: {
          "X-Mashape-Key": "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767"
        }
      }
    ).then(response => response.json());
    // .then(dish => dish.results);
  }

  getAllTypes() {
    return this.allTypes;
  }

  getEachMenuPrice() {
    var price0 = 0;
    this.getDetailIngredients().forEach(function() {
      price0 += 1;
    });
    return price0;
  }

  getTotalMenuPrice() {
    var price2 = 0;
    this.getAllIngredients().forEach(function(value, index, array) {
      price2 += 1;
    });
    var totalprice = price2 * this.getNumberOfGuests();
    return totalprice;
  }

  processResponse(response) {
    if (response.ok) {
      return response.json();
    }
    throw response;
  }
}

// Export an instance of DinnerModel
const modelInstance = new DinnerModel();
export default modelInstance;
