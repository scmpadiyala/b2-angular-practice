import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritytestComponent } from './securitytest.component';

describe('SecuritytestComponent', () => {
  let component: SecuritytestComponent;
  let fixture: ComponentFixture<SecuritytestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritytestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
