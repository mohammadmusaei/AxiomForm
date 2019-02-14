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

### @Input() Params

| Name | Type | Usage |
| ------ | ------ | ------ |
| axAutoDisableSubmit | boolean | auto disable submit button when form is invalid |
| axShowErrors | boolean | show form errors as a list |


## License

[MIT](http://opensource.org/licenses/MIT)
