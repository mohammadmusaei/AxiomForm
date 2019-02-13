import { Component } from '@angular/core';
import { FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AxForm } from './ax-form/ax-form.component';

@AxForm({
  form: {
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    address: [''],
    city: [''],
    state: [''],
    zip: ['', [Validators.minLength(10), Validators.maxLength(10),(control: AbstractControl): { [key: string]: any } => {
      var message = 'Just numbers accepted!';
      return /^\d+$/.test(control.value) ? null : { message: message };
    }]],
    agree: ['']
  }
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AxForm {

  axForms: { [key: string]: FormGroup; };

  public save(): void {
    console.log(this.axForms.form.value);
  }

}