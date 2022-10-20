import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsInfoComponent } from './dogs-info.component';

describe('DogsInfoComponent', () => {
  let component: DogsInfoComponent;
  let fixture: ComponentFixture<DogsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
