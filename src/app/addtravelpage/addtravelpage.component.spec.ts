import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtravelpageComponent } from './addtravelpage.component';

describe('AddtravelpageComponent', () => {
  let component: AddtravelpageComponent;
  let fixture: ComponentFixture<AddtravelpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtravelpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtravelpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
