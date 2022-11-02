import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./categories/categories.module').then((m) => m.CategoriesModule),
  },
  {
    path: 'speciality',
    loadChildren: () =>
      import('./speciality/speciality.module').then((m) => m.SpecialityModule),
  },
  {
    path: 'companies',
    loadChildren: () =>
      import('./companies/companies.module').then((m) => m.CompaniesModule),
  },
  {
    path: 'profil',
    loadChildren: () =>
      import('./profil/profil.module').then((m) => m.ProfilModule),
  },
  {
    path: 'registre',
    loadChildren: () =>
      import('./registre/registre.module').then((m) => m.RegistreModule),
  },
  {
    path: 'listplaces',
    loadChildren: () =>
      import('./listplaces/listplaces.module').then((m) => m.ListplacesModule),
  },

  {
    path: 'contract',
    loadChildren: () =>
      import('./contracts/contracts.module').then((m) => m.ContractsModule),
  },
  { path: 'offres', loadChildren: () => import('./offres/offres.module').then(m => m.OffresModule) },
  { path: 'profilcompany', loadChildren: () => import('./profilcompany/profilcompany.module').then(m => m.ProfilcompanyModule) },
  { path: 'detailoffre', loadChildren: () => import('./detailoffre/detailoffre.module').then(m => m.DetailoffreModule) },
  { path: 'forget', loadChildren: () => import('./forget/forget.module').then(m => m.ForgetModule) },
  { path: 'reset', loadChildren: () => import('./reset/reset.module').then(m => m.ResetModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
