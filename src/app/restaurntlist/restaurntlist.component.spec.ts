import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurntlistComponent } from './restaurntlist.component';

describe('RestaurntlistComponent', () => {
  let component: RestaurntlistComponent;
  let fixture: ComponentFixture<RestaurntlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurntlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurntlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
