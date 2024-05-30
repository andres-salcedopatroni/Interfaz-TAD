import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerUsuarioComponent } from './ver-usuario.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VerUsuarioComponent', () => {
  let component: VerUsuarioComponent;
  let fixture: ComponentFixture<VerUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ], 
      declarations: [VerUsuarioComponent]
    });
    fixture = TestBed.createComponent(VerUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
