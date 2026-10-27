import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomularioPedido } from './fomulario-pedido';

describe('FomularioPedido', () => {
  let component: FomularioPedido;
  let fixture: ComponentFixture<FomularioPedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FomularioPedido],
    }).compileComponents();

    fixture = TestBed.createComponent(FomularioPedido);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
