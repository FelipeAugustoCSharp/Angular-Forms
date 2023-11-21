import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TemplateFormModule } from './template-form/template-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DataFormModule } from './data-form/data-form.module';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    TemplateFormModule,
    DataFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
