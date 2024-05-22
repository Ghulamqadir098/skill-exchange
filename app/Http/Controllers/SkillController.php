<?php

namespace App\Http\Controllers;

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
    Storage::disk('public')->delete($skill->image);
   $skill->delete();
   return back()->with('success', 'You have successfully deleted a skill');
}

}
