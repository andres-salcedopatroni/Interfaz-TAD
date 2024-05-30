import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarUsuarioComponent } from './agregar-usuario.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AgregarUsuarioComponent', () => {
  let component: AgregarUsuarioComponent;
  let fixture: ComponentFixture<AgregarUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ], 
      declarations: [AgregarUsuarioComponent]
    });
    fixture = TestBed.createComponent(AgregarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
