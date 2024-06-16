<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\UserController;



Route::post('/register',[UserController::class,'register'])->name('register');
Route::post('/login',[UserController::class,'login'])->name('login');
Route::post('/logout', [UserController::class,'logout'])->name('logout');

Route::get('/auth-check',[UserController::class,'auth_check'])->name('auth_check');;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

