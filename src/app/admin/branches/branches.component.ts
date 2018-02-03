import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BranchService } from './../../services/branch.service';
import { BranchFormComponent } from './branch-form.component';
import { GenericListComponent } from 'app/admin/_generic/generic.list.component';

@Component({
  selector: 'branches',
  templateUrl: '../_generic/generic.list.component.html',
  styleUrls: ['../_generic/generic.list.component.css']
})
export class BranchesComponent extends GenericListComponent {

  constructor(
    private branchService: BranchService,
    public dialog: MatDialog) {

    super()

    this.objectType = "Branch";
    this.component = BranchFormComponent;
    this.dataService = branchService;
    this.dialog = dialog;
    this.parentKeyValue = "1"; //TBD: to fix
    this.columns = [
      {name: 'BranchId', key: true },
      {name: 'DivisionId', parentKey: true },
      {name: 'ShortName', edit: true, header: 'Short Name', sortable: true },
      {name: 'Description', header: 'Description', sortable: true },
      {name: 'NIHSAC', header: 'NIH SAC', sortable: true },
      {name: 'ActiveUntil', header: 'Active Until', sortable: true, date: true },
      {name: 'Delete', delete: true, header: 'Delete', sortable: false }
    ];
  }

}
