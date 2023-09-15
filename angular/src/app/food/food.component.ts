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

  selectedFile: File | null = null;

  constructor(private apiService: ApiService) { }

  foods: Food[] = [];

  foodRequest: FoodRequest = {
    food_name: '',
    food_description: '',
    food_detail: '',
    price: 0,
    img_url: ''
  };

  refresh() {
    this.apiService.getEntity<Food[]>('foods').subscribe(response => {
      this.foods = response;
    });
  }

  onCreate() {
    const formData = new FormData();
    formData.append('food_name', this.foodRequest.food_name);
    formData.append('food_description', this.foodRequest.food_description);
    formData.append('food_detail', this.foodRequest.food_detail);
    formData.append('price', this.foodRequest.price.toString());
    if (this.selectedFile) {
      formData.append('img_url', this.selectedFile, this.selectedFile.name);
    }

    this.apiService.createEntity<Food>('newFood', formData).subscribe(response => {
      console.log('Created', response);
      this.refresh();
      // this.foodRequest = {
      //   food_name: '',
      //   food_description: '',
      //   food_detail: '',
      //   price: 0,
      //   img_url: ''
      // };
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit() {
    this.refresh();
  }
}
