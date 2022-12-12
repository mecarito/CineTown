import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, IconComponent, InputComponent, CardComponent],
  providers: [],
  exports: [ButtonComponent, IconComponent, InputComponent, CardComponent],
})
export class SharedModule {}
