import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddOwnersRoutingModule } from './add-owners-routing.module';
import { AddOwnersComponent } from './add-owners.component';
import { CustomersModule } from '../../customers/customers.module';


@NgModule({
  declarations: [AddOwnersComponent],
  imports: [
    CommonModule,
    AddOwnersRoutingModule,
    CustomersModule
  ]
})
export class AddOwnersModule { }
