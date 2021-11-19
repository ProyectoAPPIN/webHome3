import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IntroComponent } from './componentes/intro/intro.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './componentes/home/home.component';
import { FacebookModule } from "ngx-facebook";
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { CursosDestacadosComponent } from './componentes/cursos-destacados/cursos-destacados.component';
import { DiferenciasMercadoComponent } from './componentes/diferencias-mercado/diferencias-mercado.component';
import { GuiaProcedimientosComponent } from './componentes/guia-procedimientos/guia-procedimientos.component';
import { IntegrantesGiideaComponent } from './componentes/integrantes-giidea/integrantes-giidea.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    HomeComponent,
    CarouselComponent,
    CursosDestacadosComponent,
    DiferenciasMercadoComponent,
    GuiaProcedimientosComponent,
    IntegrantesGiideaComponent,
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
