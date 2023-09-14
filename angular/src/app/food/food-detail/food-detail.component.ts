import { Component, OnInit } from '@angular/core';
import { ApiService } from 'core/services/api/api.service';
import { Food } from 'core/models/food.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  food: Food | null = null;

  foodId: number = 0;

  refresh() {
    this.activatedRoute.params.subscribe(response => {
      this.foodId = response['id'];
      this.apiService.getEntityById<Food>('foods', this.foodId).subscribe(response => {
        this.food = response;
      })
    })
  }

  onUpdate() {
    this.apiService.updateEntity('foods', this.foodId, this.food).subscribe(response => {
      console.log("Updated", response);
    })
  }

  onDelete() {
    this.apiService.deleteEntity<Food>('foods', this.foodId).subscribe(response => {
      this.router.navigate(['foods']);
    })
  }

  ngOnInit() {
    this.refresh();
  }
}
