import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingEncapsulationComponent } from './breaking-encapsulation.component';

describe('BreakingEncapsulationComponent', () => {
  let component: BreakingEncapsulationComponent;
  let fixture: ComponentFixture<BreakingEncapsulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakingEncapsulationComponent]
    });
    fixture = TestBed.createComponent(BreakingEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
