<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FoodController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('newFood', [FoodController::class, 'newFood']);

Route::get('foods', [FoodController::class, 'getFood']);

Route::get('foods/{id}', [FoodController::class, 'getFoodById']);

Route::put('foods/{id}', [FoodController::class, 'updateFood']);

Route::delete('foods/{id}', [FoodController::class, 'deleteFood']);

//AUTHENTICATION

Route::post('login', [AuthController::class, 'login']);

Route::post('register', [AuthController::class, 'register']);

Route::post('logout', [AuthController::class, 'logout']);
