import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DataService } from './data.service';
import { ServiceParameters } from '../common/service-parameters';

@Injectable()
export class CanAllocationService extends DataService{
  constructor(http: Http) { 
    super( 
      new ServiceParameters(
        http,
        "http://localhost:51920/api/divisions/{0}/canallocations/{1}/", 
        "http://localhost:51920/api/divisions/{0}/canallocations/{1}/updatable/", 
        "http://localhost:51920/api/canallocations/"));
  }

}
