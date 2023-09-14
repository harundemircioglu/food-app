<?php

use App\Http\Controllers\FoodController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('newFood', [FoodController::class, 'newFood']);

Route::get('foods', [FoodController::class, 'getFood']);

Route::get('foods/{id}', [FoodController::class, 'getFoodById']);

Route::put('foods/{id}', [FoodController::class, 'updateFood']);

Route::delete('foods/{id}', [FoodController::class, 'deleteFood']);
