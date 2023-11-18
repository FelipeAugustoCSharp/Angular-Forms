import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { FormDebugComponent } from '../form-debug/form-debug.component'; 

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        
    ],
    exports: [],
    declarations: [
        TemplateFormComponent,
        FormDebugComponent
    ],
    providers: [],
})
export class TemplateFormModule { }
