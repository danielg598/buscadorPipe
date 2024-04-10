import { Component, NgModule, OnInit } from '@angular/core';
import { city } from '../../utilities/interfaces/consultas';
import { CommonModule } from '@angular/common';
import { BuscadorPipe } from '../../pipes/buscador.pipe';
import { FormsModule } from '@angular/forms';
import { ApiRestService } from '../../services/api-rest.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tabla-busqueda1',
  standalone: true,
  imports: [
    CommonModule,
    BuscadorPipe,
    FormsModule,
    // HttpClientModule
  ],
  templateUrl: './tabla-busqueda1.component.html',
  styleUrl: './tabla-busqueda1.component.scss'
})
export class TablaBusqueda1Component implements OnInit{
  ngOnInit(): void {
    this.getCityes();
  }
  cityes: city[] = [];
  citySelected:string = '';

  constructor(private api:ApiRestService){}

  getCityes(){
    this.api.getCountries().subscribe(res=>{
      this.cityes = res;
      console.log(res);

    })
  }
}
