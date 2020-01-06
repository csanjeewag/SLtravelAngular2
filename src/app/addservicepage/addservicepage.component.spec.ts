import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddservicepageComponent } from './addservicepage.component';

describe('AddservicepageComponent', () => {
  let component: AddservicepageComponent;
  let fixture: ComponentFixture<AddservicepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddservicepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddservicepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
