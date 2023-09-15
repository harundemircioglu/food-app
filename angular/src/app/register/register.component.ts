import { Component } from '@angular/core';
import { AuthService } from 'core/services/auth/auth.service';
import { UserRequest } from 'core/models/request/user-request.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  constructor(
    private authService: AuthService
  ) { }

  userRequest: UserRequest = <UserRequest>{};

  register() {
    this.authService.register(this.userRequest.name, this.userRequest.email, this.userRequest.password).subscribe(response => {
      console.log(response);
    })
  }
}
