<?php

use App\Http\Controllers\Api\V1\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post('/register',[UserController::class,'register'])->name('register');



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

