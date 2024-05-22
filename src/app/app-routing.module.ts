import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeHubComponent } from './recipe-hub/recipe-hub.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecipeComponent } from './recipe/recipe.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'recipe-hub',component:RecipeHubComponent},
  {path:'recipe/:id',component:RecipeComponent},
  {path:'new-recipe',component:NewRecipeComponent},
  {path:'user/:id',component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
