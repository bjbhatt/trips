import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DataService } from './data.service';
import { ServiceParameters } from '../common/service-parameters';

@Injectable()
export class UserRoleService extends DataService{
  constructor(http: Http) { 
    super( 
      new ServiceParameters(
        http,
        "userroles/", 
        "userroles/", 
        "userroles/"));
  }

}
