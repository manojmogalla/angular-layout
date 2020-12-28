import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersDetailsComponent } from './customers-details.component';

const routes: Routes = [{ path: '', component: CustomersDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersDetailsRoutingModule { }
