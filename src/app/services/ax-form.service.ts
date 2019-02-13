import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { AxFormConfiguration } from '../ax-form/ax-form.component';

@Injectable()
export class AxFormService {

  public config: AxFormConfiguration;
  public form: FormGroup;
  public submit: Subject<boolean>;
  public errors: Subject<string[]>;
  public addErrorsRequest: Subject<null>;
  private _errors: { [key: string]: any };

  constructor() {
    this._errors = {};
    this.submit = new Subject<boolean>();
    this.errors = new Subject<string[]>();
    this.addErrorsRequest = new Subject();
  }

  public setConfig(config: AxFormConfiguration): void {
    this.config = config;
  }

  public addError(formControlName: string, errors: { [key: string]: any }): void {
    if (!this._errors[formControlName]) {
      this._errors[formControlName] = {};
    }
    this._errors[formControlName] = Object.assign(this._errors[formControlName], errors);
  }

  public checkErrors(): void {
    this.errors.next(this.getErrors());
  }

  public clearErrors(formControlName: string = null): void {
    if (formControlName) {
      delete this._errors[formControlName];
    }
    else {
      this._errors = {};
      this.errors.next([]);
    }
  }

  private getErrors(): string[] {
    var errors = [];
    for (const key in this._errors) {
      if (this._errors.hasOwnProperty(key)) {
        const errs = this._errors[key];
        if (errs) {
          for (const err in errs) {
            if (errs.hasOwnProperty(err)) {
              var error = errs[err];
              if (err === 'email') {
                error = `${key} is not a valid email.`;
              }
              else if (err === 'required') {
                error = `${key} is required.`;
              }
              else if (err === 'minlength') {
                error = `Minimun length for ${key} is ${ error.requiredLength }.`;
              }
              else if (err === 'maxlength') {
                error = `Maximum length for ${key} is ${ error.requiredLength }.`;
              }
              else if (err === 'min') {
                error = `Minimum number for ${key} is ${ error.min }.`;
              }
              else if (err === 'max') {
                error = `[${ key }] : Maximum number for ${key} is ${ error.max }.`;
              }
              else{
                error = `[${ key }] : ${error}`;
              }
              errors.push(error);
            }
          }
        }
      }
    }
    return errors;
  }

}
