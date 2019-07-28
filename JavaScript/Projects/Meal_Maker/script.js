"use strict";

const menu = {
  _courses: {
    appetizers: [],
    main: [],
    desserts: []
  },

  _getRandomDish(course) {
    const randomIndex = Math.floor(Math.random() * course.length);
    return course[randomIndex];
  },

  _getRandomDishFromCourse(courseName) {
    const course = this._courses[courseName];
    if (course) {
      if (course.length === 0) return;
      return this._getRandomDish(course);
    } else {
      throw new Error("Course not found");
    }
  },

  get courses() {
    return {
      appetizers: this._courses.appetizers,
      main: this._courses.main,
      desserts: this._courses.desserts
    };
  },

  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(value) {
    if (typeof value === "array") {
      this._courses.appetizers = value;
    } else {
      throw new Error("Invalid argument");
    }
  },

  get main() {
    return this._courses.main;
  },
  set main(value) {
    if (typeof value === "array") {
      this._courses.main = value;
    } else {
      throw new Error("Invalid argument");
    }
  },

  get desserts() {
    return this._courses.desserts;
  },
  set desserts(value) {
    if (typeof value === "array") {
      this._courses.desserts = value;
    } else {
      throw new Error("Invalid argument");
    }
  },

  addDishToCourse(courseName, name, price) {
    const dish = { name, price };
    if (this._courses[courseName]) {
      this._courses[courseName].push(dish);
    } else {
      throw new Error("Course not found");
    }
  },

  generateRandomMeal() {
    const appetizer = this._getRandomDishFromCourse("appetizers");
    const main = this._getRandomDishFromCourse("main");
    const dessert = this._getRandomDishFromCourse("desserts");
    const totalCost = appetizer.price + main.price + dessert.price;
    return `Your meal constains of ${appetizer.name}, ${main.name} and 
            ${dessert.name} for dessert. Total cost is ${totalCost}`;
  }
};


menu.addDishToCourse("appetizers", "Caesar salad", 90);
menu.addDishToCourse("appetizers", "Milano salad", 120);
menu.addDishToCourse("appetizers", "Spring salad", 50);
menu.addDishToCourse("appetizers", "Carpaccio", 130);
menu.addDishToCourse("main", "Pojarsky beefstake with mashed potato", 210);
menu.addDishToCourse("main", "Beefstroganov with mashed potato", 240);
menu.addDishToCourse("main", "Salmon stake with rice", 300);
menu.addDishToCourse("main", "Chinese pork with rice", 220);
menu.addDishToCourse("desserts", "Crepes with apple", 70);
menu.addDishToCourse("desserts", "Tiramisu", 110);
menu.addDishToCourse("desserts", "Cheesecake NewYork", 100);
menu.addDishToCourse("desserts", "Waffles with meeple syrup", 130);
