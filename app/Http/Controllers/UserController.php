<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

use function Laravel\Prompts\alert;

class UserController extends Controller
{
    public function view_user(){

$viewuser = User::all();
return view('pages.user.view_user',compact('viewuser'));
    }

    
 public function delete_user($id){

$user= User::find($id);
$user->delete();
return back();
 }   
}
