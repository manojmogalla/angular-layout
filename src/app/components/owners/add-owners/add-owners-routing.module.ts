import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddOwnersComponent } from './add-owners.component';

const routes: Routes = [{ path: '', component: AddOwnersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddOwnersRoutingModule { }
