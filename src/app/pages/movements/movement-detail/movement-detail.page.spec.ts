import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovementDetailPage } from './movement-detail.page';

describe('MovementDetailPage', () => {
  let component: MovementDetailPage;
  let fixture: ComponentFixture<MovementDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MovementDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
