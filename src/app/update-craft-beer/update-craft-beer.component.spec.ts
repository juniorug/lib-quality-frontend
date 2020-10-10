import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCraftBeerComponent } from './update-craft-beer.component';

describe('UpdateCraftBeerComponent', () => {
  let component: UpdateCraftBeerComponent;
  let fixture: ComponentFixture<UpdateCraftBeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCraftBeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCraftBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
