import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NgFormService {

  public form:FormGroup;
  
  constructor() { }

}
