import { OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from './../../services/data.service';
import { AppError, BadInput, NotFoundError, UnauthorizedError } from '../../common/app-error';

export abstract class GenericListComponent implements OnInit {
  objectType: string;
  component: any;
  keyField: string;
  dataService: DataService;
  parentKeyField: string;
  parentKeyValue: string;
  dialog: MatDialog;

  dataSource: MatTableDataSource<any>;
  columns = [];
  displayedColumns = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
  }

  ngOnInit() {
    let obs = this.parentKeyValue ? this.dataService.getAll(true, this.parentKeyValue.split(',')) : this.dataService.getAll(true);
    obs.subscribe(objects => {
      this.dataSource = new MatTableDataSource(objects);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert(this.objectType + '(s) Not Found');
        } else if (error instanceof UnauthorizedError) {
          alert('You do not have access to view ' + this.objectType + ' list');
        } else {
          throw error;
        }
      });
      for (const column of this.columns) {
        if (column.edit || column.delete || (!column.key && !column.parentKey)) {
          this.displayedColumns.push(column['name']);
        }
        if (!this.keyField && column.key) {
          this.keyField = column['name'];
        }
        if (!this.parentKeyField && column.parentKey) {
          this.parentKeyField = column['name'];
        }
      }
    }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openEditDialog(id?) {
    const data = { id: id ? id : 0 };
    const dialogRef = this.dialog.open(this.component, {
      data: data,
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (data.id !== 0) {
          for (let i = 0; i < this.dataSource.data.length; i++) {
            if (this.dataSource.data[i][this.keyField] === data.id) {
              this.dataSource.data[i] = result;
              break;
            }
          }
        } else {
          this.dataSource.data.push(result);
        }
        this.dataSource.data = this.dataSource.data;
      }
    });
  }
}
