import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCatComponent } from './select-cat.component';

describe('SelectCatComponent', () => {
  let component: SelectCatComponent;
  let fixture: ComponentFixture<SelectCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
