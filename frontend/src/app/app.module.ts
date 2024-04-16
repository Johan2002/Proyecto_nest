import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Externals
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListaVideoComponent } from './video/lista-video.component';
import { NuevoVideoComponent } from './video/nuevo-video.component';
import { EditarVideoComponent } from './video/editar-video.component';
import { DetalleVideoComponent } from './video/detalle-video.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaVideoComponent,
    NuevoVideoComponent,
    EditarVideoComponent,
    DetalleVideoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
