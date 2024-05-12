import { Injectable } from "@angular/core";
import { Recipe } from "../models/recipe.model";

@Injectable({providedIn:'root'})

export class recipeDB
{
  recipes:Recipe[] = [
    {
      id: 1,
      imageURL:'../../assets/img/recipes/fondant-chocolat.jpg',
      title: "Fondant Chocolate Cake",
      types:[{name:"dessert"},{name:"pastry"}],
      ingredients: [{name: 'Dark Chocolate', amount: 200, type: 'solid'},
                    {name: 'Flour', amount: 50, type: 'solid'},
                    {name: 'Butter', amount: 70, type: 'solid'},
                    {name: 'sugar', amount: 50, type: 'solid'},
                    {name: 'eggs', amount: 4, type: 'unit'}
                  ],
      adNotes:{
        overAllTime:20,
        cookingTime:7,
        difficulty:"Easy",
        text:"You can change the texture by modifying the cooking time ;)"
      },
      method:["Melt the chocolate and the butter in a bain-marie.",
              "Whip the eggs with the sugar, add the flour, then the chocolate/butter mix.",
              "Preheat the oven at 220°C (th7).",
              "Spread the dough in small ovenproof bowls and cook 7min."
      ],
      authorID: 1
    },
    {
      id: 2,
      imageURL:"../../assets/img/recipes/roux.jpg",
      title: "Roux",
      types:[{name:"prep"},{name:"sauce"}],
      ingredients: [{name: 'Beurre', amount: 100, type: 'solid'},
                    {name: 'farine', amount: 100, type: 'solid'},
                    {name: 'lait', amount: 1000, type: 'liquid'}
      ],
      adNotes:{
        overAllTime:5,
        cookingTime:2,
        difficulty:"Very easy",
        text:"Cuire correctement le roux casse le goût de la farinne."
      },
      method:["Faire fondre le beurre dans une casserole.",
        "Ajouter la farine tamisée en remuant, et cuire quelque 2min à feu moyen.",
        "Ajouter le lait petit à petit pour éviter les grumeaux."

      ],
      authorID: 1
    },
    {
      id: 3,
      imageURL:"../../assets/img/recipes/frozen-yogurt.jpg",
      title: "Frozen yogurt",
      types:[{name:"dessert"}],
      ingredients: [{name: 'yahourt grec', amount: 755, type: 'solid'},
                    {name: 'crème liquide entière 30%', amount: 240, type: 'solid'},
                    {name: 'sucre en poudre', amount: 160, type: 'solid'},
                    {name: 'Pincée de sel', amount: 1, type: 'FM'}
                  ],
      adNotes:{
        overAllTime:90,
        difficulty:"Easy",
        text:"Nécessite une sorbetière. Le sucre peut aussi être remplacé par du miel ou sirop d'agave par exemple."
      },
      method:["Mélanger la crème, le sucre et le sel",
                  "Ajouter le yahourt grec au mélange et fouetter pour obtenir une consistance homogène.",
                  "Réfrigérer au minimum 1h.",
                  "Turbiner en sorbetière pendant au moins 30min.",
                  "Servir dans des ramequins préalablement sortis du congélateur."
      ],
      authorID: 1
    },{
      id: 4,
      imageURL:"../../assets/img/recipes/crêpes.jpg",
      title: "Pâte à crêpes",
      types:[{name:"dessert"}],
      ingredients: [{name: 'farine', amount: 300, type: 'solid'},
                    {name: 'lait', amount: 600, type: 'liquid'},
                    {name: 'oeufs', amount: 3, type: 'unit'},
                    {name: 'beurre', amount: 50, type: 'solid'},
                    {name: 'rhum ambré', amount: 50, type: 'liquid'},
                    {name: 'sucre en poudre', amount: 60, type: 'solid'},
                    {name: 'huile neutre', amount: 1, type:'FM'}
                  ],
      method:["Verser la farine dans un cul de poule et former un puits.",
                  "Placer dans le puit, les oeufs entiers, le sucre et le beurre fondu.",
                  "Mélanger délicatement avec un fouet en ajoutant le lait au fur et à mesure.",
                  "Parfumer au rhum une fois le mélange homogène.",
                  "Chauffer une poêle à feu moyen légèrement huilée à l'aide d'un essui-tout",
                  "Verser l'équivalent d'une louche de pâte dans la poêle et la répartir uniformément.",
                  "Attendre qu'elle soit cuite d'un côté avant de la retourner.",
                  "Répéter les deux dernières étapes jusqu'à finir l'appareil."
      ],
      authorID: 1
    },
    {
      id: 5,
      imageURL:"../../assets/img/recipes/cake-banane.png",
      title: "Cake à la banane sans levure",
      types:[{name:"dessert"},{name:"pastry"}],
      ingredients: [{name: 'Bananes bien mûres', amount: 3, type: 'unit'},
                    {name: 'Oeufs', amount: 2, type: 'unit'},
                    {name: 'Sucre roux', amount: 100, type: 'solid'},
                    {name: 'Farine', amount: 100, type: 'solid'},
                    {name: 'Beurre', amount: 80, type: 'solid'}
                  ],
      method:["écraser les bananes à l'aide d'une fourchette.",
                  "Ajouter le sucre, le beurre fondu, les oeufs, puis la farine.",
                  "Verser la pâte dans un moule à cake ou dans un moule rond chemisé.",
                  "Cuire à 180°C pendant 40min."
      ],
      authorID: 1
    },{
      id: 6,
      imageURL:"../../assets/img/recipes/spinach-sauce.jpg",
      title: "Spinach Sauce",
      types: [{name:"sauce"}],
      ingredients: [{name: 'Roux', amount: 1200, type: 'solid'},
                    {name: 'Spinach', amount: 600, type: 'solid'},
                    {name: 'Chicken stock', amount: 200, type: 'liquid'}
                  ],
      method:[""],
      authorID: 3,
      linkedRecipes:[2,7]
    },{
      id: 7,
      imageURL:"",
      title: "Chicken Stock",
      types: [{name:"prep"}],
      ingredients: [{name: 'chocolat noir', amount: 250, type: 'solid'},
                    {name: 'farine', amount: 100, type: 'solid'}
                  ],
      method:[""],
      authorID: 1
    },
    {
      id: 8,
      title: "Northern Standard",
      imageURL: "",
      types: [{name:"cocktail"}],
      ingredients: [{name: "Bourbon", amount: 40, type: 'liquid'},
                    {name: "Red Vermouth", amount: 30, type: 'liquid'},
                    {name: "Maraschino", amount: 20, type: 'liquid'},
                    {name: "Grapefruit Juice", amount: 20, type: 'liquid'}
      ],
      method: [""],
      authorID: 4
    }];

    getRecipes():Recipe[]
    {
      return this.recipes;
    }
}
