import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetravelpageComponent } from './updatetravelpage.component';

describe('UpdatetravelpageComponent', () => {
  let component: UpdatetravelpageComponent;
  let fixture: ComponentFixture<UpdatetravelpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetravelpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetravelpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
