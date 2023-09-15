<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        // Kullanıcıyı veritabanından e-posta adresine göre alın
        $user = User::where('email', $email)->first();

        if (!$user) {
            // Kullanıcı bulunamazsa hata dönün
            return response()->json(['message' => 'Geçersiz e-posta adresi'], 401);
        }

        // Şifre doğrulaması yapın
        if (Hash::check($password, $user->password)) {
            // Şifre doğruysa kullanıcıyı oturum açık olarak işaretleyin
            Auth::login($user);

            return response()->json([
                'message' => 'Giriş başarılı',
                'user' => $user,
            ]);
        } else {
            // Şifre yanlışsa hata dönün
            return response()->json(['message' => 'Geçersiz şifre'], 401);
        }
    }

    public function register(Request $request)
    {
        $register = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ];

        $user = User::create($register);

        Auth::login($user);

        return response()->json([
            'messages' => 'Üyelik başarılı',
            'user' => $user,
        ]);
    }

    public function logout()
    {
        Auth::logout();

        return response()->json([
            'messages' => 'Oturum kapatıldı',
        ]);
    }
}
