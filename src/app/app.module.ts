import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

// NgModule: decorator do angular core 
@NgModule({
  // utilizados dentro do modulo
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  // componentes que utilazamos em modulos
  imports: [
    BrowserModule,
    CursosModule
  ],
  // colocamos os serviços para todos os componentes declarados no modulo, escopo global da aplicação
  providers: [],
  // componente que serve de container do nosso projeto, instancia o appcomponent
  bootstrap: [AppComponent]
})
export class AppModule { }
