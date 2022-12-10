import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, IconComponent],
  providers: [],
  exports: [ButtonComponent, IconComponent],
})
export class SharedModule {}
