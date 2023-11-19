import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoControlErroComponent } from './campo-control-erro.component';

describe('CampoControlErroComponent', () => {
  let component: CampoControlErroComponent;
  let fixture: ComponentFixture<CampoControlErroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampoControlErroComponent]
    });
    fixture = TestBed.createComponent(CampoControlErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
