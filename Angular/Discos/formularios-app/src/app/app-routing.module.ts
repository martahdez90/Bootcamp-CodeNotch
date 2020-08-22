import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { MostrarComponent } from './pages/mostrar/mostrar.component';


const routes: Routes = [
  { path: "formulario", component: FormularioComponent },
  { path: "mostrar", component: MostrarComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
