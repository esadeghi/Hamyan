// src/app/services/auth.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = import.meta.env['NG_APP_API_URL'] || 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string; rememberMe: boolean }): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/login`, credentials);
  }

  register(data: { firstName: string; lastName: string; email: string; password: string; phone: string; purpose: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/register`, data);
  }
}
