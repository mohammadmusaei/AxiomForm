import { Directive, OnInit, ElementRef } from '@angular/core';
import { AxFormService } from '../services/ax-form.service';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[axFormControl]',
  host: {
    'class': 'ax-form-control',
    '[class.ax-form-invalid]': 'formControl.invalid'
  }
})
export class AxFormControlDirective implements OnInit {

  private controlName: string;
  private formControl: AbstractControl;

  constructor(private _element: ElementRef, private _formService: AxFormService) { }

  ngOnInit(): void {
    this.controlName = this._element.nativeElement.getAttribute('formControlName');
    this.formControl = this._formService.form.controls[this.controlName];
    this._formService.addError(this.controlName, this.formControl.errors);
    this._formService.addErrorsRequest.subscribe(()=>{
      this._formService.addError(this.controlName, this.formControl.errors);
    });
    this.formControl.statusChanges.subscribe(status => {
      this._formService.clearErrors(this.controlName);
      if(status.toLowerCase() === 'invalid'){
        this._formService.addError(this.controlName, this.formControl.errors);
      }
      this._formService.checkErrors();
    });
  }

}