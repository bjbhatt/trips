import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CanService } from './../../services/can.service';
import { CanFormComponent } from './can-form.component';
import { GenericListComponent } from 'app/admin/_generic/generic.list.component';

@Component({
  selector: 'cans',
  templateUrl: '../_generic/generic.list.component.html',
  styleUrls: ['../_generic/generic.list.component.css']
})
export class CansComponent extends GenericListComponent {

  constructor(
    private canService: CanService,
    public dialog: MatDialog) {

    super()

    this.objectType = "Can";
    this.component = CanFormComponent;
    this.dataService = canService;
    this.dialog = dialog;
    this.parentKeyValue = "1"; //TBD: to fix
    this.columns = [
      {name: 'CanId', key: true },
      {name: 'DivisionId', parentKey: true },
      {name: 'CanNumber', edit: true, header: 'CAN #', sortable: true },
      {name: 'Description', header: 'Description', sortable: true },
      {name: 'ProjectNumber', header: 'Project Number', sortable: true },
      {name: 'Reimbursable', header: 'Reimbursable', sortable: true },
      {name: 'ActiveUntil', header: 'Active Until', sortable: true, date: true },
      {name: 'Delete', delete: true, header: 'Delete', sortable: false }
    ];
  }

}
