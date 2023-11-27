/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CursosListaComponent } from './cursos-lista.component';

describe('CursosListaComponent', () => {
  let component: CursosListaComponent;
  let fixture: ComponentFixture<CursosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
