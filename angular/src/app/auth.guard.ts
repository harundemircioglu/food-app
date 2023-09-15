import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'core/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      return true; // Kullanıcı oturum açmamışsa rotaya erişime izin ver
    } else {
      this.router.navigate(['/']); // Kullanıcı oturum açmışsa home sayfasına yönlendir
      return false; // Kullanıcı oturum açmışsa rotaya erişime izin verme
    }
  }
}
