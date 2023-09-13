import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResContrasenaPage } from './res-contrasena.page';

describe('ResContrasenaPage', () => {
  let component: ResContrasenaPage;
  let fixture: ComponentFixture<ResContrasenaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResContrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
