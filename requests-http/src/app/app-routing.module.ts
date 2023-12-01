import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo: 'busca-reativa'
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
  },
  {
    path: 'busca-reativa',
    loadChildren: () => import('./reactive-search/reactive-search.module').then(PegarModulo => PegarModulo.ReactiveSearchModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
