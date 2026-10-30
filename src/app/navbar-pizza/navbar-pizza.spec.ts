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

  it('should emit the search text through its output', () => {
    const textosEmitidos: string[] = [];
    component.buscar.subscribe((texto) => textosEmitidos.push(texto));

    component.enviarTexto('mozzarella');

    expect(textosEmitidos).toEqual(['mozzarella']);
  });
});
