import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgApiCallerComponent } from './mtg-api-caller.component';

describe('MtgApiCallerComponent', () => {
  let component: MtgApiCallerComponent;
  let fixture: ComponentFixture<MtgApiCallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtgApiCallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtgApiCallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
