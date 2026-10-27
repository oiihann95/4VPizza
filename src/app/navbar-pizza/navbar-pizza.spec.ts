import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarPizza } from './navbar-pizza';

describe('NavbarPizza', () => {
  let component: NavbarPizza;
  let fixture: ComponentFixture<NavbarPizza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarPizza],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarPizza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
