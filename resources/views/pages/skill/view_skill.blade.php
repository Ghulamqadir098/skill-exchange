@extends('layout.layout')

@section('content')

<table class="table">
    <thead>
      <tr>
        <th scope="col">#ID</th>
        <th scope="col">Name</th>
        <th scope="col">Image</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      @foreach ($skill as $skill)
      <tr>
        <th>{{$skill->id}}</th>
        <td>{{$skill->name}}</td>
        <td>
{{-- {{dd($skill->image)}} --}}
<img src="{{asset('storage/'.$skill->image)}}" height="50px" width="50px" alt="Img">


        </td>
        <td>
       <a class="btn btn-sm btn-danger " href="{{route('delete_skills',$skill->id)}}">Delete</a>
        </td>
      </tr>
      @endforeach
      
    </tbody>
  </table>
@endsection