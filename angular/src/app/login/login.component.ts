import { Component } from '@angular/core';
import { AuthService } from 'core/services/auth/auth.service';
import { UserRequest } from 'core/models/request/user-request.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  userRequest: UserRequest = <UserRequest>{};

  login() {
    this.authService.login(this.userRequest.email, this.userRequest.password).subscribe(response => {
      if (response) {
        this.router.navigate(['/']);
      }
    })
  }
}
