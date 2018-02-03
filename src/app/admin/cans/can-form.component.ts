import { Component, OnInit, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { DivisionService } from '../../services/division.service';
import { CanService } from '../../services/can.service';
import { GenericFormComponent } from 'app/admin/_generic/generic.form.component';

@Component({
  selector: 'app-can-form',
  templateUrl: '../_generic/generic.form.component.html',
  styleUrls: ['../_generic/generic.form.component.css']
})
export class CanFormComponent extends GenericFormComponent {
  constructor(
    divisionService: DivisionService,
    canService: CanService,
    dialogRef: MatDialogRef<CanFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    
    super()

    this.parentObjectService = divisionService;
    this.thisObjectService = canService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.objectType = 'Can';
    this.formControls = [
      { name: 'CanId', type: 'text', label: 'Can Id', key: true, parentKey: false, userEditable: false },
      { name: 'DivisionId', type: 'text', label: 'Division Id', parentKey: true, userEditable: false },
      { name: 'CanNumber', type: 'text', label: 'CAN # *', userEditable: true, validators: [Validators.required] },
      { name: 'Description', type: 'text', label: 'Description *', userEditable: true, validators: [Validators.required] },
      { name: 'ProjectNumber', type: 'text', label: 'Project Number', userEditable: true },
      { name: 'ActiveUntil', type: 'date', label: 'Active Until', userEditable: true },
      { name: 'Reimbursable', type: 'boolean', label: 'Reimbursable', userEditable: true },
    ];
  }
}

