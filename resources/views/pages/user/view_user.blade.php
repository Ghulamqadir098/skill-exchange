@extends('layout.layout')
@section('content')
<table class="table table-vcenter card-table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Title</th>
        <th>Email</th>
        <th>Role</th>
        <th class="w-1"></th>
      </tr>
    </thead>
    <tbody>

@foreach ($viewuser as $item)
<tr>
    <td>{{$item->name}}</td>
    <td class="text-muted">
      Civil Engineer, Product Management
    </td>
    <td class="text-muted"><a href="#" class="text-reset">{{$item->email}}</a></td>
    <td class="text-muted">
      User
    </td>
    <td>
      <a class="btn btn-sm btn-danger" href="{{route('delete_user',$item->id)}}">Delete</a>
    </td>
  </tr>   
@endforeach

    </tbody>
  </table>
@endsection