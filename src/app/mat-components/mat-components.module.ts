import { NgModule } from '@angular/core';

import { 
  MatCheckboxModule,
  MatToolbarModule, 
  MatMenuModule,
  MatButtonModule, 
  MatProgressBarModule,
  MatCardModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatGridListModule } from '@angular/material';

@NgModule({
  exports: [ 
    MatCheckboxModule,
    MatToolbarModule, 
    MatMenuModule,
    MatButtonModule, 
    MatProgressBarModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatGridListModule ]
  })
export class MatComponentsModule { }
