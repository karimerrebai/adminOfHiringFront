import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { CompaniesComponent } from '../companies/companies.component';
import { ContractsComponent } from '../contracts/contracts.component';
import { DetailoffreComponent } from '../detailoffre/detailoffre.component';
import { ForgetComponent } from '../forget/forget.component';
import { GuardsGuard } from '../guards/guards.guard';
import { LayoutsComponent } from '../layouts/layouts.component';
import { ListplacesComponent } from '../listplaces/listplaces.component';
import { LoginComponent } from '../login/login.component';
import { OffresComponent } from '../offres/offres.component';
import { ProfilComponent } from '../profil/profil.component';
import { ProfilcompanyComponent } from '../profilcompany/profilcompany.component';
import { RegistreComponent } from '../registre/registre.component';
import { ResetComponent } from '../reset/reset.component';
import { SpecialityComponent } from '../speciality/speciality.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forget', component: ForgetComponent },
  { path: 'resetnewpassword/:token', component: ResetComponent },
  { path: 'register', component: RegistreComponent },

  {
    path: 'home',
    canActivate: [GuardsGuard],
    component: HomeComponent,
    children: [
      { path: '', component: LayoutsComponent },
      { path: 'category', component: CategoriesComponent },
      { path: 'speciality', component: SpecialityComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'listplaces', component: ListplacesComponent },
      { path: 'contracts', component: ContractsComponent },
      { path: 'offres', component: OffresComponent },
      { path: 'profilcompany/:id', component: ProfilcompanyComponent },
      { path: 'detailoffre/:id', component: DetailoffreComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
