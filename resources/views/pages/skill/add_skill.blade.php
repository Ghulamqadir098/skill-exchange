@extends('layout.layout')

@section('content')
<form action="{{route('create_skills')}}" method="POST" enctype="multipart/form-data">
    @csrf
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Add Skill</label>
      <input type="text" name="skill_name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">You can Add skill from here to show on front-end of your site</div>
      @if ($errors->has('skill_name'))
            <span class="text-danger">{{ $errors->first('skill_name') }}</span>
        @endif
    </div>

    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Add Skill Image</label>
        <input type="file" name="skill_image" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">You can Add skill Image from here to show on front-end of your site</div>
      </div>


    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  @endsection