import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorComponent } from './valor.component';

describe('ValorComponent', () => {
  let component: ValorComponent;
  let fixture: ComponentFixture<ValorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValorComponent]
    });
    fixture = TestBed.createComponent(ValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
