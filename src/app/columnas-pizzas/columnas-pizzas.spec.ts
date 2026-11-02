import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColumnasPizzas } from './columnas-pizzas';

describe('ColumnasPizzas', () => {
  let component: ColumnasPizzas;
  let fixture: ComponentFixture<ColumnasPizzas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnasPizzas],
    }).compileComponents();

    fixture = TestBed.createComponent(ColumnasPizzas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should include all eight pizzas in the catalog', () => {
    expect(component.pizzas).toHaveLength(8);
    expect(component.pizzas.map((pizza) => pizza.imagen)).toEqual(
      expect.arrayContaining([
        '/burrito.jpg',
        '/hawaiana.jpg',
        '/napolitana.jpg',
        '/choculate.jpg',
      ]),
    );
  });

  it('should filter pizzas by ingredients when a search is submitted', () => {
    component.textoRecibido('mozzarella');
    expect(component.pizzasFiltrada).toHaveLength(6);

    component.textoRecibido('piña');

    expect(component.pizzasFiltrada.map((pizza) => pizza.nombre)).toEqual([
      'Pizza Hawaiana',
    ]);
  });

  it('should filter by pizza name and restore the catalog for an empty search', () => {
    component.textoRecibido('barbacoa');
    expect(component.pizzasFiltrada.map((pizza) => pizza.nombre)).toEqual([
      'Pizza Barbacoa',
    ]);

    component.textoRecibido('  ');
    expect(component.pizzasFiltrada).toHaveLength(8);
  });
});
