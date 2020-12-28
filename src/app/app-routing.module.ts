import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full',
  },
  {
    path: 'customers',
    loadChildren: () => import('./components/customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'owners',
    loadChildren: () => import('./components/owners/owners.module').then(m => m.OwnersModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
