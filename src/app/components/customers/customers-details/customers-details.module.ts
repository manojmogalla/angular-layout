import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersDetailsRoutingModule } from './customers-details-routing.module';
import { CustomersDetailsComponent } from './customers-details.component';


@NgModule({
  declarations: [CustomersDetailsComponent],
  imports: [
    CommonModule,
    CustomersDetailsRoutingModule
  ]
})
export class CustomersDetailsModule { }
