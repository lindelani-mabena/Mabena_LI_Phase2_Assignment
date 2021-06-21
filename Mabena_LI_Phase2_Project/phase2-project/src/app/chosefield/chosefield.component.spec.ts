import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosefieldComponent } from './chosefield.component';

describe('ChosefieldComponent', () => {
  let component: ChosefieldComponent;
  let fixture: ComponentFixture<ChosefieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosefieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
