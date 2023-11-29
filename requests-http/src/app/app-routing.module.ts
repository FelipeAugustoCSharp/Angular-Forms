import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo: 'upload'
  },
  {
    path:'cursos', loadChildren: () => import('./cursos/cursos.module').then(PegarModulo => PegarModulo.CursosModule)
  },
  {
    path:'upload', loadChildren: () => import('./upload-file/upload-file.module').then(PegarModulo => PegarModulo.UploadFileModule)
  },
  {
    path: 'rxjs-poc',
    loadChildren: () => import('./unsubscribe-rxjs/unsubscribe-rxjs.module').then(PegarModulo => PegarModulo.UnsubscribeRxjsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
