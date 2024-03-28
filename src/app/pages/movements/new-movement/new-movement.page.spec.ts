import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewMovementPage } from './new-movement.page';

describe('NewMovementsPage', () => {
  let component: NewMovementPage;
  let fixture: ComponentFixture<NewMovementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewMovementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
