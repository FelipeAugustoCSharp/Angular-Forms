import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataFormComponent } from './data-form/data-form.component';

import { TemplateFormModule } from './template-form/template-form.module';
import { FormDebugComponent } from './form-debug/form-debug.component'; //Module do TEMPLATE-DRIVEN
@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    FormDebugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
