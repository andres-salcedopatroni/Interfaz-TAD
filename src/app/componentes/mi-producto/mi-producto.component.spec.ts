import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiProductoComponent } from './mi-producto.component';

describe('MiProductoComponent', () => {
  let component: MiProductoComponent;
  let fixture: ComponentFixture<MiProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
