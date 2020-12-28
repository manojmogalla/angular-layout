import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnersDetailsComponent } from './owners-details.component';

const routes: Routes = [{ path: '', component: OwnersDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnersDetailsRoutingModule { }
