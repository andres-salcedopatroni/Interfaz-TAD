import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiProductoComponent } from './mi-producto.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MiProductoComponent', () => {
  let component: MiProductoComponent;
  let fixture: ComponentFixture<MiProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ], 
      declarations: [MiProductoComponent]
    });
    fixture = TestBed.createComponent(MiProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
