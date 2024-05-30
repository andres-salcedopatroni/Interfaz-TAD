import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProductoComponent } from './ver-producto.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VerProductoComponent', () => {
  let component: VerProductoComponent;
  let fixture: ComponentFixture<VerProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,    
      ], 
      declarations: [VerProductoComponent]
    });
    fixture = TestBed.createComponent(VerProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
