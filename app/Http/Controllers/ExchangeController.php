<?php

namespace App\Http\Controllers;

use App\Models\Exchange;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class ExchangeController extends Controller
{
    
public function create_exchange(Request $request){
$user_id=$request->user_id;
$offer_skill_id=$request->myskillspost;
$request_skill_id=$request->all_skillspost;
$title=$request->title;
$slug=Str::slug($title, separator: '-');
$details=$request->content;


$imageName = time().'.'.$request->featured_image->extension();
$request->featured_image->move(storage_path('app/public/images'), $imageName);


$exchange= new Exchange;

$exchange->user_id= $user_id;
$exchange->offer_skill_id=$offer_skill_id;
$exchange->request_skill_id=$request_skill_id;
$exchange->title=$title;
$exchange->slug=$slug;
$exchange->details=$details;
$exchange->featured_image='images/' . $imageName;

$exchange->save();

return response()->json(['message'=>'Exchange Created Successfully']);
}

public function single_exchange($id){

$exchange= Exchange::find($id);


return response()->json(['exchange'=>$exchange],200);
}
}
