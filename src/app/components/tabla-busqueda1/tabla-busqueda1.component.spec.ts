import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaBusqueda1Component } from './tabla-busqueda1.component';

describe('TablaBusqueda1Component', () => {
  let component: TablaBusqueda1Component;
  let fixture: ComponentFixture<TablaBusqueda1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaBusqueda1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaBusqueda1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
