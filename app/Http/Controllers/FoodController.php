<?php

namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FoodController extends Controller
{
    public function getFood()
    {
        $foods = Food::all();

        return response()->json($foods);
    }

    public function getFoodById($id)
    {
        $food = Food::find($id);

        return response()->json($food);
    }

    public function newFood(Request $request)
    {
        // Veri doğrulama kurallarını belirle
        $validator = Validator::make($request->all(), [
            'food_name' => 'required|string|max:255',
            'food_description' => 'required|string',
            'food_detail' => 'required|string',
            'price' => 'required|numeric',
        ]);

        // Veri doğrulama başarısız olursa hata yanıtı döndür
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        // Veritabanına yeni yemek kaydet
        $new = [
            'food_name' => $request->input('food_name'),
            'food_description' => $request->input('food_description'),
            'food_detail' => $request->input('food_detail'),
            'price' => $request->input('price')
        ];

        try {
            $food = Food::create($new);
            return response()->json(['message' => 'Created', 'food' => $food], 201); // Oluşturulan yemeği yanıt olarak döndür
        } catch (\Exception $e) {
            return response()->json(['error' => 'An error occurred while creating the food.'], 500);
        }
    }

    public function updateFood($id, Request $request)
    {
        $food = Food::find($id);

        if (!$food) {
            return response()->json(['message' => 'Yemek bulunamadı'], 404);
        }

        $food->food_name = $request->input('food_name');
        $food->food_description = $request->input('food_description');
        $food->food_detail = $request->input('food_detail');
        $food->save();

        return response()->json(['message' => 'Güncellendi']);
    }

    public function deleteFood($id)
    {
        $food = Food::find($id);

        $food->delete();

        return response()->json([
            'messages' => 'Deleted'
        ]);
    }
}
