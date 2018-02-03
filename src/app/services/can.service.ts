import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DataService } from './data.service';
import { ServiceParameters } from '../common/service-parameters';

@Injectable()
export class CanService extends DataService{
  constructor(http: Http) { 
    super( 
      new ServiceParameters(
        http,
        "divisions/{0}/cans/", 
        "divisions/{0}/cans/updatable/", 
        "cans/"));
  }

}
