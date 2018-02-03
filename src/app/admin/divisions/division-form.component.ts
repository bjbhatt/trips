import { Component, OnInit, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { InstituteService } from '../../services/institute.service';
import { DivisionService } from '../../services/division.service';
import { GenericFormComponent } from 'app/admin/_generic/generic.form.component';

@Component({
  selector: 'app-division-form',
  templateUrl: '../_generic/generic.form.component.html',
  styleUrls: ['../_generic/generic.form.component.css']
})
export class DivisionFormComponent extends GenericFormComponent {
  constructor(
    instituteService: InstituteService,
    divisionService: DivisionService,
    dialogRef: MatDialogRef<DivisionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    
    super()

    this.parentObjectService = instituteService;
    this.thisObjectService = divisionService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.objectType = 'Division';
    this.formControls = [
      { name: 'DivisionId', type: 'text', label: 'Division Id', key: true, parentKey: false, userEditable: false },
      { name: 'InstituteId', type: 'text', label: 'Institute Id', parentKey: true, userEditable: false },
      { name: 'ShortName', type: 'text', label: 'Short Name *', userEditable: true, validators: [Validators.required] },
      { name: 'Description', type: 'text', label: 'Description *', userEditable: true, validators: [Validators.required] },
      { name: 'NIHSAC', type: 'text', label: 'NIH SAC', userEditable: true },
      { name: 'DefaultTravelStartOffset', type: 'text', label: 'Travel Offset', userEditable: true, matSuffix: 'days' },
      { name: 'DefaultLodgeOffset', type: 'text', label: 'Travel Offset', userEditable: true, matSuffix: 'days' },
      { name: 'DefaultMealFirstPercent', type: 'text', label: 'First Day Meal & TI', userEditable: true, matSuffix: '%' },
      { name: 'DefaultMealLastPercent', type: 'text', label: 'Last Day Meal & TI', userEditable: true, matSuffix: '%' },
      { name: 'DefaultOtherRate', type: 'text', label: 'Other Rate', userEditable: true, matPrefix: '$', matSuffix: '.00' },
    ];
  }
}

