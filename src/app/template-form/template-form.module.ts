import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TemplateFormComponent } from './template-form.component';
import { FormDebugComponent } from '../form-debug/form-debug.component'; 
import { CampoControlErroComponent } from '../campo-control-erro/campo-control-erro.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpClientModule
    ],
    exports: [],
    declarations: [
        TemplateFormComponent,
        FormDebugComponent,
        CampoControlErroComponent
    ],
    providers: [],
})
export class TemplateFormModule { }
