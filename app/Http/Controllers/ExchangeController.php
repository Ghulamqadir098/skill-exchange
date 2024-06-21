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

$exchange= new Exchange;

$exchange->user_id= $user_id;
$exchange->offer_skill_id=$offer_skill_id;
$exchange->request_skill_id=$request_skill_id;
$exchange->title=$title;
$exchange->slug=$slug;
$exchange->details=$details;


$exchange->save();

return response()->json(['message'=>'Exchange Created Successfully']);
}


}
