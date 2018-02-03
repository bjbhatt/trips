import { OnInit } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import 'rxjs/add/operator/take';

import { DataService } from './../../services/data.service';
import { AppError, BadInput, NotFoundError, UnauthorizedError } from '../../common/app-error';

export abstract class GenericFormComponent implements OnInit {
    private keyField;
    private parentKeyField;

    objectType: string;
    action: string;
    form: FormGroup;
    showForm: boolean;
    formControls: controlConfig[];
    editableFormControls: controlConfig[];
    parentKeyValue: any;
    parentObjectService: DataService;
    thisObjectService: DataService;
    dialogRef: MatDialogRef<any>;
    data: any

    constructor() {
    }

    ngOnInit() {
        this.editableFormControls = [];
        this.action = "Add";
        this.form = new FormGroup({});
        this.showForm = false;
        for (let i = 0; i < this.formControls.length; i++) {
            let value = (this.formControls[i].value) ? this.formControls[i].value : null;
            let validators: ValidatorFn[] = (this.formControls[i].validators) ? this.formControls[i].validators : null
            this.form.addControl(this.formControls[i].name, new FormControl(value, validators))
            this.keyField = (!this.keyField && this.formControls[i].key) ? this.formControls[i].name : this.keyField;
            this.parentKeyField = (!this.parentKeyField && this.formControls[i].parentKey) ? this.formControls[i].name : this.parentKeyField;
            if (this.formControls[i].userEditable) {
                this.editableFormControls.push(this.formControls[i]);
            }
        }
        let obs = this.parentKeyValue ? this.parentObjectService.getAll(false, this.parentKeyValue.split(',')) : this.parentObjectService.getOne();
        obs.subscribe(parentObj => {
            let parentId: number = parentObj[this.parentKeyField] as number;
            if (this.data["id"] && (this.data["id"] as number) != 0) {
                this.action = "Update";
                this.thisObjectService
                    .get(this.data["id"] as number)
                    .take(1)
                    .subscribe(obj => {
                        this.showForm = true;
                        for (let i = 0; i < this.formControls.length; i++) {
                            this.form.controls[this.formControls[i].name].setValue(obj[this.formControls[i].name]);
                        }
                    },
                    (error: AppError) => {
                        if (error instanceof NotFoundError) {
                            alert(this.objectType + ' Not Found');
                            this.dialogRef.close();
                        } else if (error instanceof UnauthorizedError) {
                            alert('You do not have access to update this ' + this.objectType);
                            this.dialogRef.close();
                        } else {
                            throw error;
                        }
                    });
            } else {
                this.form.controls[this.keyField].setValue(0);
                this.form.controls[this.parentKeyField].setValue(parentId);
                this.showForm = true;
            }
        },
            (error: AppError) => {
                if (error instanceof NotFoundError) {
                    alert(this.objectType + '\'s Parent Object Not Found');
                    this.dialogRef.close();
                } else if (error instanceof UnauthorizedError) {
                    alert('You do not have access to update this ' + this.objectType);
                    this.dialogRef.close();
                } else {
                    throw error;
                }
            });
    }

    save() {
        let id: number = this.form.controls[this.keyField].value as number;
        let observable = (id) != 0 ? this.thisObjectService.update(id, this.form.value) : this.thisObjectService.create(this.form.value);
        observable
            .subscribe(returnObj => {
                this.dialogRef.close(returnObj);
            },
            (error: AppError) => {
                if (error instanceof NotFoundError) {
                    alert(this.objectType + ' Not Found');
                    this.dialogRef.close();
                } else if (error instanceof UnauthorizedError) {
                    alert('You do not have access to add or update ' + this.objectType);
                    this.dialogRef.close();
                } else if (error instanceof BadInput) {
                    let inputErrors = error.inputErrors;
                    for (let inputErrorKey in inputErrors) {
                        let controlName = inputErrorKey.split('.')[inputErrorKey.split('.').length - 1];  // **reason for the split is WebAPI sometimes returns as two part key eg. divisionDto.ShortName**
                        if (this.form.controls[controlName]) {
                            this.form.controls[controlName].setErrors({
                                apiInputError: {
                                    message: (inputErrors[inputErrorKey] as string[]).join(' | ')
                                }
                            });
                        }
                    }
                } else {
                    throw error;
                }
            });
    }

    getErrorMessage(controlName: string): string {
        let errorMessage = ""
        let control = this.getControl(controlName);
        if (control.errors) {
            if (control.errors.required) {
                errorMessage = "Required";
            } else if (control.errors.apiInputError) {
                errorMessage = control.errors.apiInputError.message;
            }
        }
        return errorMessage;
    }

    public getControl(controlName) {
        return this.form.controls[controlName] as FormControl;
    }
}

interface controlConfig {
    name: string,
    type: string,
    label: string,
    key?: boolean,
    parentKey?: boolean,
    userEditable: boolean,
    value?: any,
    validators?: ValidatorFn[],
    matPrefix?: string,
    matSuffix?: string,
}
