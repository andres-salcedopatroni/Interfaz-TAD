import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarProductoComponent } from './modificar-producto.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModificarProductoComponent', () => {
  let component: ModificarProductoComponent;
  let fixture: ComponentFixture<ModificarProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,    
      ], 
      declarations: [ModificarProductoComponent]
    });
    fixture = TestBed.createComponent(ModificarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
