<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\UserController;
use App\Http\Controllers\ExchangeController;
use App\Http\Controllers\SkillController;

// USer Routes
Route::post('/register',[UserController::class,'register'])->name('register');
Route::post('/login',[UserController::class,'login'])->name('login');
Route::post('/logout', [UserController::class,'logout'])->name('logout');
Route::get('/auth-check',[UserController::class,'auth_check'])->name('auth_check');
Route::get('/user_with_exchange',[UserController::class,'user_with_exchange'])->middleware('auth:sanctum');



// Skill Routes
Route::get('/get_skills',[SkillController::class,'get_skills'])->middleware('auth:sanctum');



// Exchange Routes
Route::post('create-exchange',[ExchangeController::class,'create_exchange'])->middleware('auth:sanctum');


Route::get('/user', function (Request $request) {

    return $request->user();
})->middleware('auth:sanctum');

