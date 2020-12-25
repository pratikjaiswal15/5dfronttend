import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMomentsComponent } from './update-moments.component';

describe('UpdateMomentsComponent', () => {
  let component: UpdateMomentsComponent;
  let fixture: ComponentFixture<UpdateMomentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMomentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
