import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { MatIconModule } from '@angular/material/icon';

import { MainRoutes } from './main.routing';
import { AppTaskOperationsComponent } from './upload-video/task-operations.component';
import { HeaderComponent } from './page-header/header.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MainRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule
  ],
  declarations: [
    AppTaskOperationsComponent,
    HeaderComponent
  ],
})
export class MainModule { }
