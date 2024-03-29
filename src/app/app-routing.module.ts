import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component'; // Importa el componente de recuperación de contraseña
import { HomeComponent } from './modules/home/home.component';
import { DataUsuarioRutComponent } from './modules/data-usuario-rut/data-usuario-rut.component';
import { ConsultaIndividualComponent } from './modules/consulta-individual/consulta-individual.component';
import { ConsultaMasivaComponent } from './modules/consulta-masiva/consulta-masiva.component';
import { IngresoIndividualComponent } from './modules/ingreso-individual/ingreso-individual.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'consulta-individual', component: ConsultaIndividualComponent },
  { path: 'consulta-masiva', component: ConsultaMasivaComponent },
  { path: 'data-usuario-rut', component: DataUsuarioRutComponent },
  { path: 'ingreso-individual', component: IngresoIndividualComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }