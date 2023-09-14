import { Component, OnInit } from '@angular/core';
import { ApiService } from 'core/services/api/api.service';
import { Food } from 'core/models/food.model';
import { FoodRequest } from 'core/models/request/food-request.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  foods: Food[] = [];

  foodRequest: FoodRequest = <FoodRequest>{};

  refresh() {
    this.apiService.getEntity<Food[]>('foods').subscribe(response => {
      this.foods = response;
    })
  }

  onCreate() {
    this.apiService.createEntity<Food>('newFood', this.foodRequest).subscribe(response => {
      console.log("Created", response);
      this.refresh();
    })
  }

  ngOnInit() {
    this.refresh();
  }
}
