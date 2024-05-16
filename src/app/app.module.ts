import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeHubComponent } from './recipe-hub/recipe-hub.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AdditionalNotesComponent } from './additional-notes/additional-notes.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipeMethodComponent } from './recipe-method/recipe-method.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TagsSectionComponent } from './tags-section/tags-section.component';
import { LinkedRecipeComponent } from './linked-recipe/linked-recipe.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecipeHubComponent,
    HeaderComponent,
    LandingPageComponent,
    RecipeComponent,
    AdditionalNotesComponent,
    IngredientComponent,
    RecipeMethodComponent,
    SingleRecipeComponent,
    UserProfileComponent,
    TagsSectionComponent,
    NewRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    ReactiveFormsModule,
    [LinkedRecipeComponent]
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
