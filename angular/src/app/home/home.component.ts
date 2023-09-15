import { Component, OnInit } from '@angular/core';
import { ApiService } from 'core/services/api/api.service';
import { Food } from 'core/models/food.model';
import { AuthService } from 'core/services/auth/auth.service';
import { User } from 'core/models/user.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  foods: Food[] = [];

  currentUser: User | null = null;

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  logout() {
    this.authService.logout().subscribe(response => {
      console.log(response);
      this.refresh();
    });
  }

  refresh() {
    if (this.authService.isAuthenticated()) {
      this.currentUser = this.authService.getUser();
    }
    else {
      this.currentUser = null;
    }
  }

  ngOnInit() {
    this.refresh();
  }

}
