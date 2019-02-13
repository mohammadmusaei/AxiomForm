import { Component, OnInit, Input, ContentChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControlOptions, FormBuilder } from '@angular/forms';
import { AxFormService } from '../services/ax-form.service';
import { AxFormControlDirective } from './../axFormControl/ax-form-control.directive';



export interface AxForm {
  axForms: { [key: string]: FormGroup };
}
export interface ngFormCollectionItem {
  name: string,
  form: FormGroup;
}
export interface AxFormDecoratorConfig {
  [key: string]: {
    [key: string]: any;
  }, options?: AbstractControlOptions | {
    [key: string]: any;
  } | null
}
export function AxForm(forms: AxFormDecoratorConfig) {
  return (constructor: Function) => {
    constructor.prototype.axForms = {};
    for (const form in forms) {
      if (forms.hasOwnProperty(form)) {
        const formConfig = forms[form];
        const group = new FormBuilder().group(formConfig);
        constructor.prototype.axForms[form] = group;
      }
    }
  }
}


export interface AxFormConfiguration {
  axAutoDisableSubmit?: boolean;
  axShowErrors? : boolean;
}


@Component({
  selector: '[ax-form]',
  template: `
    <ng-content></ng-content>
    <div class="ax-form-errors" *ngIf="errors.length > 0 && _formService.config.axShowErrors">
        <div *ngFor="let error of errors"> <b>●</b> {{ error }} </div>
    </div>
  `,
  styleUrls: ['./ax-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [AxFormService],
  host: {
    '[class.ax-submitted]': 'submitted'
  }
})
export class AxFormComponent implements OnInit {

  @Input('ax-form') form: FormGroup;
  @Input() axAutoDisableSubmit: boolean = true;
  @Input() axShowErrors: boolean = true;
  @ContentChildren(AxFormControlDirective) viewChildren: QueryList<AxFormControlDirective>;

  public submitted: boolean = false;
  public errors: string[] = [];

  constructor(private _formService: AxFormService) { }

  ngOnInit(): void {
    this._formService.setConfig({
      axAutoDisableSubmit : this.axAutoDisableSubmit,
      axShowErrors : this.axShowErrors
    });
    this._formService.form = this.form;
    this._formService.submit.subscribe(submitted => {
      this.submitted = submitted;
    });
    this._formService.errors.subscribe(errors=>{
      this.errors = errors;
    });
  }

}
