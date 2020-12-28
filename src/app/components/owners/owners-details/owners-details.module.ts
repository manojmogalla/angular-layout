import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersDetailsRoutingModule } from './owners-details-routing.module';
import { OwnersDetailsComponent } from './owners-details.component';


@NgModule({
  declarations: [OwnersDetailsComponent],
  imports: [
    CommonModule,
    OwnersDetailsRoutingModule
  ]
})
export class OwnersDetailsModule { }
