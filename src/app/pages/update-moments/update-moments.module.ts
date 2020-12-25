import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateMomentsRoutingModule } from './update-moments-routing.module';
import { UpdateMomentsComponent } from './update-moments.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [UpdateMomentsComponent],
  imports: [
    CommonModule,
    UpdateMomentsRoutingModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatDialogModule
  ]
})
export class UpdateMomentsModule { }
