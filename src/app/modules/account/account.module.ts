import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path: 'signin',
    component: LoginComponent,
  },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [LoginComponent, SignupComponent],
  providers: [],
})
export class AccountModule {}
