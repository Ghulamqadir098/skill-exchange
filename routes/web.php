<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '^(?!admin).*$');




Route::prefix('admin')->group(function(){
    Route::get('/', function () {
        return view('./pages/admin/admin');
    })->name('admin_dash');
    
Route::get('view_user',[UserController::class,'view_user'])->name('view_user');
Route::get('delete_user/{id}',[UserController::class,'delete_user'])->name('delete_user');
});