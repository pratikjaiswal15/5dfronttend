import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllMomentsComponent } from './all-moments.component';

const routes: Routes = [{ path: '', component: AllMomentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllMomentsRoutingModule { }
