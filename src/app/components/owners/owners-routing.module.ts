import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ownersRoutes: Routes = [
  { path: '',
  children: [ {
    path: '',
    redirectTo: 'owners-details',
    pathMatch: 'full',
  },
  {
    path: 'owners-details',
    loadChildren: () => import('./owners-details/owners-details.module').then(m => m.OwnersDetailsModule)
  },
  { path: 'add-owners',
   loadChildren: () => import('./add-owners/add-owners.module').then(m => m.AddOwnersModule)
  },

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(ownersRoutes)],
  exports: [RouterModule]
})
export class OwnersRoutingModule { }
