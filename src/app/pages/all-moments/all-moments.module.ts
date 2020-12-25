import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllMomentsRoutingModule } from './all-moments-routing.module';
import { AllMomentsComponent } from './all-moments.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatChipsModule} from '@angular/material/chips';
import { DialogModule } from '../dialog/dialog.module';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [AllMomentsComponent],
  imports: [
    CommonModule,
    AllMomentsRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatChipsModule,
    DialogModule,
    MatDialogModule
  ]
})
export class AllMomentsModule { }
