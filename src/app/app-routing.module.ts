import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateAccount, CanActivateDashboard } from 'app-guards';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
    canActivate: [CanActivateAccount],
  },
  {
    path: 'browse',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [CanActivateDashboard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanActivateDashboard, CanActivateAccount],
})
export class AppRoutingModule {}
