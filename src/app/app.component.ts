import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaBusqueda1Component } from './components/tabla-busqueda1/tabla-busqueda1.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TablaBusqueda1Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'buscadorPipe';
}
