<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Skill;

use Illuminate\Http\Request;
use function Laravel\Prompts\alert;

class UserController extends Controller
{
    public function view_user()
    {

        $viewuser = User::all();
        return view('pages.user.view_user', compact('viewuser'));
    }


    public function delete_user($id)
    {

        $user = User::find($id);
        $user->delete();
        return back();
    }

    public function add_skills($id){
        $user = User::find($id);
        $skill= Skill::all();
        return view('pages.user.add_skills',compact('user','skill'));
       
    }

    public function save_skills(Request $request){
        // dd($request->all());
    
        $user = User::find($request->user_id);

        $user->skills()->attach($request->skills);
    }
}

