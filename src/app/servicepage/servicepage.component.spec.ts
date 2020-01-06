import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicepageComponent } from './servicepage.component';

describe('ServicepageComponent', () => {
  let component: ServicepageComponent;
  let fixture: ComponentFixture<ServicepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
