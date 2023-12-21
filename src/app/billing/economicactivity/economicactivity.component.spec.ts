import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicactivityComponent } from './economicactivity.component';

describe('EconomicactivityComponent', () => {
  let component: EconomicactivityComponent;
  let fixture: ComponentFixture<EconomicactivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EconomicactivityComponent]
    });
    fixture = TestBed.createComponent(EconomicactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
