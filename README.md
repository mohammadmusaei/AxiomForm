# Axiom Form

### Online Demo

[Usage Demo](http://app.musaei.me/angular/form/)

### Stackblitz Source Demo

[Usage Demo](https://stackblitz.com/edit/axiom-form)

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






This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

[MIT](http://opensource.org/licenses/MIT)
