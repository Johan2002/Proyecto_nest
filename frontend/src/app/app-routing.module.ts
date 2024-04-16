import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVideoComponent } from './video/lista-video.component';
import { DetalleVideoComponent } from './video/detalle-video.component';
import { NuevoVideoComponent } from './video/nuevo-video.component';
import { EditarVideoComponent } from './video/editar-video.component';


const routes: Routes = [
  { path: '', component: ListaVideoComponent },
  { path: 'detalle/:id', component: DetalleVideoComponent },
  { path: 'nuevo', component: NuevoVideoComponent },
  { path: 'editar/:id', component: EditarVideoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
