// Importar los modulos del router de Angular
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SearchComponent } from './search/search.component';
import { PagesComponent } from './pages.component';

// Array de Rutas de la Web
const routes: Routes = [
  // Rutas principales
  {
    path: 'home',
    component: PagesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'buscador/:search', component: SearchComponent },
    ],
  },
];

// Exportar el módulo de rutas
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
