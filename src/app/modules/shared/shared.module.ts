import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';
import { CardComponent } from './components/card/card.component';
import { CategoryComponent } from './components/category/category.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    IconComponent,
    InputComponent,
    CardComponent,
    CategoryComponent,
    SearchBarComponent,
    SpinnerComponent,
  ],
  providers: [],
  exports: [
    ButtonComponent,
    IconComponent,
    InputComponent,
    CardComponent,
    CategoryComponent,
    SearchBarComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
