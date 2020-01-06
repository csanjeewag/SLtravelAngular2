import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateservicepageComponent } from './updateservicepage.component';

describe('UpdateservicepageComponent', () => {
  let component: UpdateservicepageComponent;
  let fixture: ComponentFixture<UpdateservicepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateservicepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateservicepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
