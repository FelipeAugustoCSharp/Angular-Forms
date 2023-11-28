import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CursosModule } from './cursos/cursos.module';
@NgModule({
  declarations: [	
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CursosModule,
    ModalModule.forRoot(),

  ],
  providers: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
