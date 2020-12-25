import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMomentRoutingModule } from './add-moment-routing.module';
import { AddMomentComponent } from './add-moment.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [AddMomentComponent],
  imports: [
    CommonModule,
    AddMomentRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class AddMomentModule { }
