import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantNavigationComponent } from './plant-navigation.component';

describe('PlantNavigationComponent', () => {
  let component: PlantNavigationComponent;
  let fixture: ComponentFixture<PlantNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
