import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, IconComponent, InputComponent],
  providers: [],
  exports: [ButtonComponent, IconComponent, InputComponent],
})
export class SharedModule {}
