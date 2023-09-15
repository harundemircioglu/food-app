import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FoodComponent } from './food/food.component';
import { FoodDetailComponent } from './food/food-detail/food-detail.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'foods', component: FoodComponent }, //TÜM YEMEKLERİN LİSTELENDİĞİ SAYFA
  { path: 'foods/:id', component: FoodDetailComponent } //YEMEK DETAY SAYFASI
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
