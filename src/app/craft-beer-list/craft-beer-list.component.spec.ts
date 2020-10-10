import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftBeerListComponent } from './craft-beer-list.component';

describe('CraftBeerListComponent', () => {
  let component: CraftBeerListComponent;
  let fixture: ComponentFixture<CraftBeerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftBeerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftBeerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
