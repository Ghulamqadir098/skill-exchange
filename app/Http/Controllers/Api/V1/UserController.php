<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\User;
// use Dotenv\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
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
return response()->json(['token' => $token, 'user' => $user], 201);

}


public function auth_check(Request $request){
    // Log::info($request->user('sanctum'));
    return response()->json(['authenticated' => $request->user('sanctum')]);

}
public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['access_token' => $token, 'token_type' => 'Bearer'], 200);
    }

    public function logout(Request $request)
    {
        $request->user('sanctum')->currentAccessToken()->delete();
// dd("hello world");
        return response()->json(['message' => 'Logged out'], 200);
    }


}