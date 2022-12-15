import {Component} from "@angular/core";
import {Ingredient} from "../shared/Ingredient.model";

@Component({
  selector: "shopping-list",
  templateUrl: "shopping-list.component.html",
  styleUrls: [
    "./shopping-list.component.css"
  ]
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("Aplles", 5),
    new Ingredient("Tomatoes", 10)
  ];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
