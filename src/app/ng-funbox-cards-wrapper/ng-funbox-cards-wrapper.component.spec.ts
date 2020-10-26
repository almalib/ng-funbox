import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFunboxCardsWrapperComponent } from './ng-funbox-cards-wrapper.component';

describe('NgFunboxCardsWrapperComponent', () => {
  let component: NgFunboxCardsWrapperComponent;
  let fixture: ComponentFixture<NgFunboxCardsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFunboxCardsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFunboxCardsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
