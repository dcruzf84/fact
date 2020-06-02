import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaFacturaComponent } from './captura-factura.component';

describe('CapturaFacturaComponent', () => {
  let component: CapturaFacturaComponent;
  let fixture: ComponentFixture<CapturaFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturaFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturaFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
