import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting(), provideHttpClient()]
    }).compileComponents();
    service = TestBed.inject(UsersService);
  });

  it('Saber si el servicio ha sido cargado', () => {
    expect(service).toBeTruthy();
  });

  it('data tiene elementos, ergo tengo datos para trabajar', () => {
    expect(service.data.length).toBeGreaterThanOrEqual(1)
  })

  it('Revisar que el valor que devuelve getSumAge es un numero', () => {
    const numero = service.getSumAge()
    expect(numero).toMatch(/\d{1,3}/)
  })

  it('Revisar que el valor que devuelve getSumAge es 156', () => {
    const numero = service.getSumAge()
    expect(numero).toBe(156)
  })

  it('Revisar que el valor que devuelve getSumAge es mayor 100', () => {
    const numero = service.getSumAge()
    expect(numero).toBeGreaterThan(100)
  })

  it('getAllUserPromises() debe retornar un array con hasta10 usuarios', async () => {
    const response = await service.getAllUserPromises()
    expect(response.results.length).toBeGreaterThanOrEqual(10)
  })

  it('getAllUserObservable() de retornar la pagina 1', (done: DoneFn) => {
    service.getAllUserObservable().subscribe(response => {
      expect(response.page).toBe(1)
      done()
    })
  })

});
