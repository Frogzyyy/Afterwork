import { Injectable } from "@angular/core";
import { Recipe } from "../models/recipe.model";

@Injectable({providedIn:'root'})

export class recipeDB
{
  recipes:Recipe[] = [
      {
        id: 1,
        types:[
          {name:"dessert"},
          {name:"pastry"}
        ],
        imageURL:["../../assets/img/recipes/fondant-chocolat.jpg"],
        title: "Fondant Chocolate Cake",
        ingredients:[
          {name: "Dark Chocolate",amount: 200,type: "solid"},
          {name: "Flour",amount: 50,type: "solid"},
          {name: "Butter",amount: 70,type: "solid"},
          {name: "sugar",amount: 50,type: "solid"},
          {name: "eggs",amount: 4,type: "unit"}
        ],
        adNotes:{
          overAllTime:20,
          cookingTime:7,
          difficulty:"Easy",
          text:"You can change the texture by modifying the cooking time ;)"
        },
        method:[
          "Melt the chocolate and the butter in a bain-marie.",
          "Whip the eggs with the sugar, add the flour, then the chocolate/butter mix.",
          "Preheat the oven at 220°C (th7).",
          "Spread the dough in small ovenproof bowls and cook 7min."
        ],
        authorID: 1
      },

      {
        id: 2,
        imageURL:["../../assets/img/recipes/roux.jpg"],
        title: "Roux",
        types:[
          {name:"prep"},
          {name:"sauce"}
        ],
        ingredients:[
          {name: "Butter", amount: 100, type: "solid"},
          {name: "Flour", amount: 100, type: "solid"},
          {name: "milk", amount: 1000, type: "liquid"}
        ],
        adNotes:{
          overAllTime:5,
          cookingTime:2,
          difficulty:"Very easy",
          text:"Cook the roux properly in order to get rid of the flour taste"
        },
        method:[
          "Melt the butter in a pot.",
          "Add the flour while stirring, and cook 2min on medium heat.",
          "Add the milk, little by little to avoid chuncks."
        ],
        authorID: 2
      },

      {
        id: 3,
        imageURL:["../../assets/img/recipes/frozen-yogurt.jpg"],
        title: "Frozen yogurt",
        types:[
          {name:"dessert"},
          {name:"ice-cream"}
        ],
        ingredients:[
          {name: "greek yogurt", amount: 755, type: "solid"},
          {name: "cream 30%", amount: 240, type: "solid"},
          {name: "Sugar", amount: 160, type: "solid"},
          {name: "Pinch of salt", amount: 1, type: "FM"}
        ],
        adNotes:{
          overAllTime:90,
          difficulty:"Easy",
          text:"Ice spinner is needed. The sugar can be replaced by some honey."
        },
        method:[
          "Mix the cream, the sugar and the salt.",
          "Add the greek yogurt to the mix and whip until the texture gets even.",
          "Refrigerate for at least an hour.",
          "Spin in the ice machine for around 30min.",
          "Serve in small bowls, preferably just out of the freezer."
        ],
        authorID: 1
      },

      {
        id: 4,
        imageURL:["../../assets/img/recipes/crêpes.jpg"],
        title: "Crêpes",
        types:[
          {name:"dessert"}
        ],
        ingredients: [
          {name: "flour", amount: 300, type: "solid"},
          {name: "milk", amount: 600, type: "liquid"},
          {name: "Eggs", amount: 3, type: "unit"},
          {name: "Butter", amount: 50, type: "solid"},
          {name: "amber rhum", amount: 50, type: "liquid"},
          {name: "sugar", amount: 60, type: "solid"},
          {name: "neutral oil", amount: 1, type:"FM"}
        ],
        method:[
          "Pour the flour in a mixing bowl and form a well.",
          "Place the whole eggs,the sugar and the melted butter.",
          "Mix slowly with a wisk while adding the milk little by little.",
          "Once the mix is even, add the rhum to taste.",
          "Heat up a pan on medium heat, slightly oiled up with a paper towel.",
          "Spread evenly a thin layer od dough on the pan.",
          "Wait for the first side to be cooked and slightly colored and then flip it.",
          "Repeat the two last steps until you finish the dough."
        ],
        authorID: 1
      },

      {
        id: 5,
        imageURL:["../../assets/img/recipes/cake-banane.png"],
        title: "Banana cake without yeast",
        types:[
          {name:"dessert"},
          {name:"pastry"}
        ],
        ingredients:[
          {name: "ripe banana", amount: 3, type: "unit"},
          {name: "eggs", amount: 2, type: "unit"},
          {name: "brown sugar", amount: 100, type: "solid"},
          {name: "flour", amount: 100, type: "solid"},
          {name: "butter", amount: 80, type: "solid"}
        ],
        adNotes:{
          overAllTime:50,
          cookingTime:40,
          difficulty:"Easy",
          text:"A good way to get rid of the bananas you'll not eat !"
        },
        method:[
          "Mash the bananas with a fork.",
          "Add the sugar, the melted butter, the eggs, and the flour.",
          "Pour the mix in a buttered cake mold.",
          "Cook 40min at 180°C."
        ],
        authorID: 2
      },

      {
        id: 6,
        imageURL:["../../assets/img/recipes/spinach-sauce.jpg"],
        title: "Spinach Sauce",
        types:[
          {name:"sauce"},
          {name:"savoury"}
        ],
        ingredients:[
          {name: "Roux", amount: 1200, type: "solid"},
          {name: "Spinach", amount: 600, type: "solid"},
          {name: "Chicken stock", amount: 200, type: "liquid"}
        ],
        method:[
          "Add the chicken stock to the roux.",
          "Put the mix in a blender.",
          "Start the blender and add the blanched spinach slowly, until the wanted texture and color."
        ],
        authorID: 3,
        linkedRecipes:[2,7]
      },

      {
        id: 7,
        imageURL:["../../assets/img/recipes/chicken-stock.webp"],
        title: "Chicken Stock",
        types: [
          {name:"prep"},
          {name:"sauce"},
          {name:"savoury"}
        ],
        ingredients:[
          {name: "chicken left overs", amount: 250, type: "solid"},
          {name: "stock mix", amount: 100, type: "solid"}
        ],
        authorID: 1
      },

      {
        id: 8,
        title: "Northern Standard",
        imageURL:["../../assets/img/recipes/northern-standard.jpg"],
        types: [
          {name:"cocktail"}
        ],
        ingredients: [
          {name: "Bourbon", amount: 40, type: "liquid"},
          {name: "Red Vermouth", amount: 30, type: "liquid"},
          {name: "Maraschino", amount: 20, type: "liquid"},
          {name: "Grapefruit Juice", amount: 20, type: "liquid"}
        ],
        authorID: 4
      }];

    getRecipes():Recipe[]
    {
      return this.recipes;
    }
}
