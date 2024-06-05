<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\User;
// use Dotenv\Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

public function register(Request $request){
$validator= Validator::make($request->all(),[
'user_name'=>'required|string|max:255|unique:users',
'name'=>'required|string|max:255',
'email'=>'required|string|email|max:255|unique:users',
'password' => 'required|string|min:8',
'profile_image'=>'required|string|max:500'
]);
if ($validator->fails()){
    return response()->json($validator->errors(), 422);
}

$user= new User;

$user->user_name= $request->user_name;
$user->name= $request->name;
$user->email= $request->email;
$user->password=  Hash::make($request->password);
$user->profile_image= $request->profile_image;
$user->save();

$token = $user->createToken('authToken')->plainTextToken;
return response()->json(['token' => $token, 'user' => $user,'hello'=>'tello'], 201);

}
}
