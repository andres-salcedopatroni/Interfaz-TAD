import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaProductoComponent } from './categoria-producto.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CategoriaProductoComponent', () => {
  let component: CategoriaProductoComponent;
  let fixture: ComponentFixture<CategoriaProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ], 
      declarations: [CategoriaProductoComponent]
    });
    fixture = TestBed.createComponent(CategoriaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
