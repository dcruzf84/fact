import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudPedidoComponent } from './solicitud-pedido.component';

describe('SolicitudPedidoComponent', () => {
  let component: SolicitudPedidoComponent;
  let fixture: ComponentFixture<SolicitudPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
