@extends('layout.layout')

@section('content')
    <div class="col-md-6 align-self-center ">
        <form class="card" method="POST" action="{{ route('save_skills') }}">
            @csrf
            <div class="card-header">
                <h3 class="card-title">Add SKills</h3>
            </div>

            <div class="mb-3 row flex-column justify-content-center align-items-center ">
                <label class="col-3 col-form-label">Select</label>
                <input type="hidden" name="user_id" value="{{ $user->id }}">
                <div class="col w-75 ">
                    <select class="form-select" name="skills">
                        @foreach ($skill as $skill)
                            <option value="{{ $skill->id }}">{{ $skill->name }}</option>
                        @endforeach
                    </select>
                    @if ($errors->has('skills'))
                    <span class="text-danger">{{ $errors->first('skills') }}</span>
                    @endif

            
                </div>
            </div>
            <div class="card-footer text-end">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
@endsection
