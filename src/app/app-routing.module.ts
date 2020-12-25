import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'sign-up', loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule) }, { path: 'sign-in', loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInModule) }, { path: 'add-moment', loadChildren: () => import('./pages/add-moment/add-moment.module').then(m => m.AddMomentModule) }, { path: 'all-moments', loadChildren: () => import('./pages/all-moments/all-moments.module').then(m => m.AllMomentsModule) }, { path: 'update-moments', loadChildren: () => import('./pages/update-moments/update-moments.module').then(m => m.UpdateMomentsModule) }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
