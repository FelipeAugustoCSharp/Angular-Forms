import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [],
    declarations: [
        TemplateFormComponent
    ],
    providers: [],
})
export class TemplateFormModule { }
