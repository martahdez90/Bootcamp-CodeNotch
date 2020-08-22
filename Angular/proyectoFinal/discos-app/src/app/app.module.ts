import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormularioDiscoComponent } from './pages/formulario-disco/formulario-disco.component';
import { MenuComponent } from './pages/menu/menu.component';
import { VistaDiscoComponent } from './pages/vista-disco/vista-disco.component';
import { BootstrapFormComponent } from './pages/bootstrap-form/bootstrap-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioDiscoComponent,
    MenuComponent,
    VistaDiscoComponent,
    BootstrapFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
