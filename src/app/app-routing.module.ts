// Importar los modulos del router de Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routing Child
import { PagesRoutingModule } from './pages/pages-routing';
import { AuthRoutingModule } from './auth/auth-routing';

// Componentes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

// Array de Rutas de la Web
const routes: Routes = [
  // Rutas secundarias
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

// Exportar el módulo de rutas
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
