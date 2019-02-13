import { Directive, HostListener, Input } from '@angular/core';
import { AxFormService } from '../services/ax-form.service';

@Directive({
  selector: '[axFormButton]',
  host: {
    '[disabled]': '_formService.config.axAutoDisableSubmit && type === "submit" && _formService.form.status.toLowerCase() === "invalid"'
  }
})
export class AxFormButtonDirective {

  @Input('axFormButton') type: 'submit' | 'reset';

  public disabled: boolean = false;

  constructor(private _formService: AxFormService) {}

  @HostListener('click') onClick() {
    if(this._formService.config.axAutoDisableSubmit && !this._formService.form.valid){
      return;
    }
    this._formService.submit.next(this.type === 'submit');
    if(this.type === 'reset'){
      setTimeout(() => {
        this._formService.clearErrors();
      }, 0);
    }
    else{
      this._formService.addErrorsRequest.next();
    }
    this._formService.checkErrors();
  }

}
