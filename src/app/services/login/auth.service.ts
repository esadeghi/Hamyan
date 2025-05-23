// src/app/services/auth.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(credentials: {
    email: string;
    password: string;
    rememberMe: boolean;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/login`, credentials);
  }

  register(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    purpose: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/register`, data);
  }
}
