import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutCartComponent } from './yout-cart.component';

describe('YoutCartComponent', () => {
  let component: YoutCartComponent;
  let fixture: ComponentFixture<YoutCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
