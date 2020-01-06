import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeservicepagesComponent } from './homeservicepages.component';

describe('HomeservicepagesComponent', () => {
  let component: HomeservicepagesComponent;
  let fixture: ComponentFixture<HomeservicepagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeservicepagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeservicepagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
