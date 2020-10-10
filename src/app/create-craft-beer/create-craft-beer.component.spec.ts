import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCraftBeerComponent } from './create-craft-beer.component';

describe('CreateCraftBeerComponent', () => {
  let component: CreateCraftBeerComponent;
  let fixture: ComponentFixture<CreateCraftBeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCraftBeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCraftBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
