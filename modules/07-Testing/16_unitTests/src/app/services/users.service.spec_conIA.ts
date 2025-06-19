import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { provideHttpClient } from '@angular/common/http';

describe('UsersService', () => {
  let service: UsersService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting(), provideHttpClient()],
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a default URL', () => {
    expect(service.url).toBe('https://peticiones.online/api/users');
  });

  it('should calculate the sum of ages correctly', () => {
    const sum = service.getSumAge();
    expect(sum).toBe(156); // 43 + 22 + 12 + 45 + 34 = 156
  });

  it('should fetch all users as a promise', async () => {
    const mockResponse = {
      page: 1,
      per_page: 5,
      total: 10,
      total_pages: 2,
      results: [{ id: 1, name: 'Test User', age: 30 }],
    };

    const promise = service.getAllUserPromises();

    const result = await promise;
    expect(result).toEqual(mockResponse);
  });

  it('should fetch all users as an observable', (done) => {
    const mockResponse = {
      page: 1,
      per_page: 10,
      total: 10,
      total_pages: 2,
      results: [{ id: 1, name: 'Test User', age: 30 }],
    };

    service.getAllUserObservable().subscribe((response) => {
      expect(response).toEqual(mockResponse);
      done();
    });


  });
});
