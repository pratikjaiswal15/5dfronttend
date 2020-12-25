import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMomentsComponent } from './update-moments.component';

const routes: Routes = [{ path: '', component: UpdateMomentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateMomentsRoutingModule { }
