import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TemplateFormComponent } from './template-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        HttpClientModule,
        SharedModule
    ],
    exports: [],
    declarations: [
        TemplateFormComponent,

    ],
    providers: [],
})
export class TemplateFormModule { }
