import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRestaurntComponent } from './delete-restaurnt.component';

describe('DeleteRestaurntComponent', () => {
  let component: DeleteRestaurntComponent;
  let fixture: ComponentFixture<DeleteRestaurntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRestaurntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRestaurntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
