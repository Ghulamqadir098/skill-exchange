<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SkillController extends Controller
{
    public function view_skills(){
        return view('pages.skill.add_skill');
    }

   public function create_skills(Request $request){

    $request->validate([
        'skill_name' =>'unique:skills,name',
        'skill_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);
// dd($request->image);
    $imageName = time().'.'.$request->skill_image->extension();
    $request->skill_image->move(storage_path('app/public/images'), $imageName);
    $skill= new Skill;
    $skill->icon_classes=$request->skill_icon_class;
    $skill->color=$request->skill_icon_color;
    $skill->name= $request->skill_name;
    $skill->image= 'images/' . $imageName;
    $skill->save();
    return back()->with('success', 'You have successfully added a skill');
   }

public function show_skills(){

$skill= Skill::all();

// dd($skill);

return view('pages.skill.view_skill',compact('skill'));
}
public function delete_skills($id){

    $skill= Skill::findOrFail($id);
   $skill->delete();
   Storage::disk('public')->delete($skill->image);

   return back()->with('success', 'You have successfully deleted a skill');
}




// Front end requests 

public function get_skills(Request $request){

    // $skills= Skill::all();
// return response()->json(['authenticated' => $request->user('sanctum')]);
$user=$request->user('sanctum');
if (!$user) {
    return response()->json(['message' => 'User not authenticated'], 401);
}
$skills=$user->skills;
$all_skills=Skill::all();
return response()->json(['skills' => $skills, 'all_skills' => $all_skills]);

}

public function get_all_skills(){

$skill=Skill::all();


return response()->json(['skill' => $skill]);
}

}
