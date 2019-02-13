import { Directive, ContentChildren, QueryList, Input, OnInit } from '@angular/core';
import { NgFormControlDirective } from './ng-form-control.directive';
import { FormGroup } from '@angular/forms';
import { NgFormService } from './ng-form.service';

@Directive({
  selector: '[ngForm]',
  providers : [NgFormService]
})
export class NgFormDirective implements OnInit {
  
  @Input('ngForm') form : FormGroup;
  @ContentChildren(NgFormControlDirective) viewChildren: QueryList<NgFormControlDirective>;

  constructor(private _formService: NgFormService) { }

  ngOnInit(): void {
      this._formService.form = this.form;
  }

}

