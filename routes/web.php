<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SkillController;

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '^(?!admin|api).*$');




Route::prefix('admin')->group(function () {


    
    Route::get('/', function () {
        return view('./pages/admin/admin');
    })->name('admin_dash');


    //=====> USer
    Route::get('view_user', [UserController::class, 'view_user'])->name('view_user');
    Route::get('delete_user/{id}', [UserController::class, 'delete_user'])->name('delete_user');
    Route::get('add_skills/{id}', [UserController::class, 'add_skills'])->name('add_Skills');
    Route::post('save_skills', [UserController::class, 'save_skills'])->name('save_skills');

// Skills logic
Route::get('view_skills',[SkillController::class, 'view_skills'])->name('view_skills');
Route::post('create_skills',[SkillController::class, 'create_skills'])->name('create_skills');
Route::get('show_skills',[SkillController::class, 'show_skills'])->name('show_skills');
Route::get('delete_skills/{id}',[SkillController::class, 'delete_skills'])->name('delete_skills');
});
