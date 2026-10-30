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

  it('should recalculate the filtered pizzas when the input signal changes', () => {
    fixture.componentRef.setInput('textoRecibido', 'mozzarella');
    fixture.detectChanges();

    expect(component.pizzasFiltrada).toHaveLength(6);

    fixture.componentRef.setInput('textoRecibido', 'piña');
    fixture.detectChanges();

    expect(component.pizzasFiltrada.map((pizza) => pizza.nombre)).toEqual([
      'Pizza Hawaiana',
    ]);
  });
});
