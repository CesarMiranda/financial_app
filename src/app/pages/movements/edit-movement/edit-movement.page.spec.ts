import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditMovementPage } from './edit-movement.page';

describe('EditMovementPage', () => {
  let component: EditMovementPage;
  let fixture: ComponentFixture<EditMovementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditMovementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
