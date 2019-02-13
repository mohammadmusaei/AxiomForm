import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AxFormComponent } from './ax-form/ax-form.component';
import { AxFormControlDirective } from './axFormControl/ax-form-control.directive';
import { AxFormButtonDirective } from './axFormButton/ax-form-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    AxFormComponent,
    AxFormControlDirective,
    AxFormButtonDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 

}
