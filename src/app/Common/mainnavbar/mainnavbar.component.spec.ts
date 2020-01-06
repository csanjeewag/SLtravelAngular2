import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainnavbarComponent } from './mainnavbar.component';

describe('MainnavbarComponent', () => {
  let component: MainnavbarComponent;
  let fixture: ComponentFixture<MainnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
