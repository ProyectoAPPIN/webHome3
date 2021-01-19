import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IntroComponent } from './componentes/intro/intro.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './componentes/home/home.component';
import { FacebookModule } from "ngx-facebook";
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { IngSistemasComponent } from './componentes/ing-sistemas/ing-sistemas.component';
import { CursosDestacadosComponent } from './componentes/cursos-destacados/cursos-destacados.component';
import { ProfesoradoComponent } from './componentes/profesorado/profesorado.component';
import { DiferenciasMercadoComponent } from './componentes/diferencias-mercado/diferencias-mercado.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    HomeComponent,
    CarouselComponent,
    IngSistemasComponent,
    CursosDestacadosComponent,
    ProfesoradoComponent,
    DiferenciasMercadoComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FacebookModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
