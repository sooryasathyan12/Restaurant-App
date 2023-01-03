import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestaurntComponent } from './add-restaurnt.component';

describe('AddRestaurntComponent', () => {
  let component: AddRestaurntComponent;
  let fixture: ComponentFixture<AddRestaurntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestaurntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRestaurntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
