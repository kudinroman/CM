import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostEditComponent } from './cost-edit.component';

describe('CostEditComponent', () => {
  let component: CostEditComponent;
  let fixture: ComponentFixture<CostEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
