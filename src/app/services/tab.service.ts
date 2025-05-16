import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TabService {
  private tabSubject = new BehaviorSubject<'login' | 'register'>('login');
  tab$ = this.tabSubject.asObservable();

  setTab(tab: 'login' | 'register') {
    this.tabSubject.next(tab);
  }
}
