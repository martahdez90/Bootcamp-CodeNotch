import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioDiscoComponent } from './pages/formulario-disco/formulario-disco.component';
import { VistaDiscoComponent } from './pages/vista-disco/vista-disco.component';
import { BootstrapFormComponent } from './pages/bootstrap-form/bootstrap-form.component';


const routes: Routes = [
  { path: "formulario", component: FormularioDiscoComponent },
  { path: "discos", component: VistaDiscoComponent },
  { path: "BootstrapForm", component: BootstrapFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
