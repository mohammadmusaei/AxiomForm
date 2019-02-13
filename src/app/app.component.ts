import { Component } from '@angular/core';
import { FormGroup, AbstractControl, ValidatorFn, AbstractControlOptions, AsyncValidatorFn, FormControl, FormBuilder } from '@angular/forms';

// function Mul<T extends { new(...args: any[]): {} }>(constructor: T) {
//   return class extends constructor {
//     num = 12;
//   }
// }

// function Mul(val : number){
//   return (constructor: Function) => {
//     constructor.prototype.num = val * 3;
//   }
// }

// export function MulF(): MethodDecorator {
//   return function (target: any) {
//     target.prototype.num *= 2;
//   };
// }
// export function Prop() {
//   return function (target: any, propertyKey : string) {

//     let propertyValue;

//     function getter() {
//       return propertyValue;
//     }

//     function setter(value: any) {
//       if(value){
//         propertyValue = value * 2;
//       }
//     }

//     Object.defineProperty(target, propertyKey, {
//       get: getter,
//       set: setter,
//       enumerable: true,
//       configurable: true
//     });

//   };
// }

export interface NgForm{
  ngForms : { [key:string] : FormGroup };
}
export interface ngFormCollectionItem {
  name: string,
  form: FormGroup;
}
export interface ngFormDecoratorConfig {
  [key: string]: {
    [key: string]: any;
  }, options?: AbstractControlOptions | {
    [key: string]: any;
  } | null
}
function Form(forms: ngFormDecoratorConfig) {
  return (constructor: Function) => {
    constructor.prototype.ngForms = {};
    for (const form in forms) {
      if (forms.hasOwnProperty(form)) {
        const formConfig = forms[form];
        const group = new FormBuilder().group(formConfig);
        constructor.prototype.ngForms[form] = group;
      }
    }
  }
}

@Form({
  form: {
    firstName: [''],
    lastName: ['']
  },
  work: {
    phone: [''],
    mail: ['a@s.com']
  }
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements NgForm {

  ngForms: { [key: string]: FormGroup; };
  
}
