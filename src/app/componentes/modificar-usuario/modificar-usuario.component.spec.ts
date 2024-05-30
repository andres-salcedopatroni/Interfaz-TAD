import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarUsuarioComponent } from './modificar-usuario.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModificarUsuarioComponent', () => {
  let component: ModificarUsuarioComponent;
  let fixture: ComponentFixture<ModificarUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ], 
      declarations: [ModificarUsuarioComponent]
    });
    fixture = TestBed.createComponent(ModificarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
