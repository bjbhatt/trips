import { Component, OnInit, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { DivisionService } from '../../services/division.service';
import { BranchService } from '../../services/branch.service';
import { GenericFormComponent } from 'app/admin/_generic/generic.form.component';

@Component({
  selector: 'app-branch-form',
  templateUrl: '../_generic/generic.form.component.html',
  styleUrls: ['../_generic/generic.form.component.css']
})
export class BranchFormComponent extends GenericFormComponent {
  constructor(
    divisionService: DivisionService,
    branchService: BranchService,
    dialogRef: MatDialogRef<BranchFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    
    super()

    this.parentObjectService = divisionService;
    this.thisObjectService = branchService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.objectType = 'Branch';
    this.formControls = [
      { name: 'BranchId', type: 'text', label: 'Branch Id', key: true, parentKey: false, userEditable: false },
      { name: 'DivisionId', type: 'text', label: 'Division Id', parentKey: true, userEditable: false },
      { name: 'ShortName', type: 'text', label: 'Short Name *', userEditable: true, validators: [Validators.required] },
      { name: 'Description', type: 'text', label: 'Description *', userEditable: true, validators: [Validators.required] },
      { name: 'NIHSAC', type: 'text', label: 'NIH SAC', userEditable: true },
      { name: 'ActiveUntil', type: 'date', label: 'Active Until', userEditable: true }
    ];
  }
}

