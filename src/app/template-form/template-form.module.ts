import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { FormDebugComponent } from '../form-debug/form-debug.component'; 
import { CampoControlErroComponent } from '../campo-control-erro/campo-control-erro.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        
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
