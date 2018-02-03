import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DivisionService } from './../../services/division.service';
import { DivisionFormComponent } from './division-form.component';
import { GenericListComponent } from 'app/admin/_generic/generic.list.component';

@Component({
  selector: 'divisions',
  templateUrl: '../_generic/generic.list.component.html',
  styleUrls: ['../_generic/generic.list.component.css']
})
export class DivisionsComponent extends GenericListComponent {

  constructor(
    private divisionService: DivisionService,
    public dialog: MatDialog) {

    super()

    this.objectType = "Division";
    this.component = DivisionFormComponent;
    this.dataService = divisionService;
    this.dialog = dialog;
    this.columns = [
      {name: 'DivisionId', key: true },
      {name: 'InstituteId', parentKey: true },
      {name: 'ShortName', edit: true, header: 'Short Name', sortable: true },
      {name: 'Description', header: 'Description', sortable: true },
      {name: 'NIHSAC', header: 'NIH SAC', sortable: true },
      {name: 'DefaultTravelStartOffset', header: 'Travel Offset', sortable: true },
      {name: 'DefaultLodgeOffset', header: 'Lodging Offset', sortable: true },
      {name: 'Delete', delete: true, header: 'Delete', sortable: false }
    ];
  }

}
