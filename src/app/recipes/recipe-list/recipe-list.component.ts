import {Component, EventEmitter, Output} from "@angular/core";
import {Recipe} from "../recipe.model";

@Component({
  selector: "recipes-list",
  templateUrl: "recipe-list.component.html",
  styleUrls: [
    "./recipe-list.component.css"
  ]
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "Test", "https://cafedelites.com/wp-content/uploads/2019/12/Pork-Loin-Roast-Recipe-1-500x500.jpg"),
    new Recipe("A Next Test Recipe", "Next Test", "https://cafedelites.com/wp-content/uploads/2019/12/Pork-Loin-Roast-Recipe-1-500x500.jpg")
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
