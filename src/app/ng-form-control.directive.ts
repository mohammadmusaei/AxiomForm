import { Directive, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { NgFormService } from './ng-form.service';

@Directive({
  selector: '[ngFormControl]'
})
export class NgFormControlDirective implements OnInit {

  private controlName: string;

  constructor(private _element: ElementRef, private _formService: NgFormService) { }

  ngOnInit(): void {
    this.controlName = this._element.nativeElement.getAttribute('formControlName');
    this._formService.form.controls[this.controlName].valueChanges.subscribe(s => {
      console.log(s);
    })  
  }

}
