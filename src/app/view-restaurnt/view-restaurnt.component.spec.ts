import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurntComponent } from './view-restaurnt.component';

describe('ViewRestaurntComponent', () => {
  let component: ViewRestaurntComponent;
  let fixture: ComponentFixture<ViewRestaurntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRestaurntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRestaurntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
