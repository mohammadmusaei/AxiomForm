# Axiom Form

### Online Demo

[Usage Demo](http://app.musaei.me/angular/form/)

### Stackblitz Source Demo

[Stackblitz Demo](https://stackblitz.com/edit/axiom-form)

### Installation

##### Install component package from npm :

`npm install axiom-form`

##### Import component module :

```typescript
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AxiomFormModule } from 'axiom-form';

...

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AxiomFormModule,
  ], 
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})

...

```

### Usage

1. Use `[ax-form]` attribute component and assign a formGroup to it. 
2. For each input elements use `axFormControl`.
3. For action buttons[Submit and Reset] use `axFormButton` and pass a string parameter to it as button type.

```html

<form class="card" [formGroup]="form" [ax-form]="form" [axAutoDisableSubmit]="true" [axShowErrors]="true">
  <div class="form-row">
     <div class="form-group col-md-6">
        <label for="inputEmail">Email</label>
        <input type="email" axFormControl formControlName="email" class="form-control form-control-sm" id="inputEmail">
     </div>
     div class="form-group col-md-6">
         <label for="inputPassword">Password</label>
         <input type="password" axFormControl formControlName="password" class="form-control form-control-sm" id="inputPassword">
     </div>
     <button axFormButton="submit" type="button" (click)="save()" class="btn btn-sm btn-primary">Sign up</button>
     <button axFormButton="reset" type="button" class="btn btn-sm btn-danger ml-2" (click)="axForms.form.reset()">Clear</button>
  </div>
</form>

```

### Custom form decorator

Also you can use Axiom custom form decorator `@AxForm` for every components you want and generate formGroups. 

```typescript

@AxForm({
  form: {
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    ...
  },
  form2 : { ... },
  form3 : { ... },
  ...
})

```

When use `@AxForm` decorator it create a new property for component class as `axForms` with type `{ [key: string]: FormGroup; }`, so you can access each generated formGroups with `this.axForms['your form name']`. 
for better usage please implements `AxForm` interface in your component class. 

Here is an example of decorator usage.

```typescript

import { AxForm } from 'axiom-form'

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

  public axForms: { [key: string]: FormGroup; };
  public autoDisableSubmit : boolean = true;
  public showErrors : boolean = true;

  public save(): void {
    console.log(this.axForms.form.value);
  }

}

```

### @Input() Params

| Name | Type | Usage |
| ------ | ------ | ------ |
| axAutoDisableSubmit | boolean | auto disable submit button when form is invalid |
| axShowErrors | boolean | show form errors as a list |


## License

[MIT](http://opensource.org/licenses/MIT)
