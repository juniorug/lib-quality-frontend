import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftBeerDetailsComponent } from './craft-beer-details.component';

describe('CraftBeerDetailsComponent', () => {
  let component: CraftBeerDetailsComponent;
  let fixture: ComponentFixture<CraftBeerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftBeerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftBeerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
