import { Component, OnInit } from '@angular/core';
import { ApiService } from 'core/services/api/api.service';
import { Food } from 'core/models/food.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  refresh() {
  }

  ngOnInit() {
    this.refresh();
  }

}
