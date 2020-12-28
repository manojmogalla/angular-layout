import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';

const routes: Routes = [
{ path: '', component: CustomersComponent },
{ path: 'customers-details',
 loadChildren: () => import('./customers-details/customers-details.module').then(m => m.CustomersDetailsModule)
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
