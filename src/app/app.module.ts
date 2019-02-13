import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgFormControlDirective } from './ng-form-control.directive';
import { CommonModule } from '@angular/common';
import { NgFormDirective } from './ng-form.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgFormControlDirective,
    NgFormDirective
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
