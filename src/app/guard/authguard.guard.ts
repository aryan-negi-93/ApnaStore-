// authguard.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../Services/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router, private service: ServiceService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const userData = localStorage.getItem('userData'); // Check localStorage for user data
    if (userData) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('userData'); // Remove user data from localStorage on logout
    this.router.navigate(['login']);
  }
}
