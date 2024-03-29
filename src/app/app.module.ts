import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { DataUsuarioRutComponent } from './modules/data-usuario-rut/data-usuario-rut.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { PasswordModule } from 'primeng/password';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { ConsultaIndividualComponent } from './modules/consulta-individual/consulta-individual.component';
import { ConsultaMasivaComponent } from './modules/consulta-masiva/consulta-masiva.component';
import { IngresoIndividualComponent } from './modules/ingreso-individual/ingreso-individual.component';
import { EditarUsuarioComponent } from './modules/editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForgotPasswordComponent,
    DataUsuarioRutComponent,
    ConsultaIndividualComponent,
    ConsultaMasivaComponent,
    IngresoIndividualComponent,
    EditarUsuarioComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, // Añade AppRoutingModule aquí
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    MenubarModule,
    MenuModule,
    DividerModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}