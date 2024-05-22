@extends('layout.layout')

@section('content')
    <form action="{{ route('create_skills') }}" method="POST" enctype="multipart/form-data">
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
            <input type="file" name="skill_image" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">You can Add skill Image from here to show on front-end of your site</div>
        </div>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Add Skill Icon</label>
            <input type="text" name="skill_icon_class" id="input1" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp">
            <input type="text" name="skill_icon_color" id="input2" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">You can Add skill Icon from here to show on front-end of your site</div>
            {{-- <a class="btn btn-sm btn-success mt-2 ">Select Icons</a> --}}


            <!-- Button trigger modal -->
            <button type="button" class="btn btn-sm btn-success mt-2 " data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                Select Icons
            </button>
            <script>
                // alert("hello world!");

                function handelClick2(id, color) {

                    var classNames = document.getElementById(id).className
                    //  var classNames2= document.getElementById(id)
                    input_value = document.getElementById("input1");
                    input_value.value = classNames;
                    input_value2 = document.getElementById("input2");
                    input_value2.value = color
                    // alert(classNames+color);
                }
            </script>




        </div>



        <button type="submit" class="btn btn-primary">Submit</button>

    </form>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Select your Fav Icon</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <span class="mx-2">
                        <i class="fas fa-code" id="firstitem" onclick="handelClick2(this.id, this.style.color)"
                            style="color: #fb79c5;"></i>
                    </span>
                    <span class="mx-2">
                        <i class="fa-brands fa-laravel" id="seconditem" onclick="handelClick2(this.id, this.style.color)"
                            style="color: #ff0000;"></i>

                    </span>

                    <span class="mx-2">
                        <i class="fa-brands fa-react" id="thirdtitem" onclick="handelClick2(this.id, this.style.color)"
                            style="color: #63E6BE;"></i>
                    </span>

                    <span class="mx-2">
                        <i class="fa-brands fa-bitcoin" id="fourthitem" onclick="handelClick2(this.id, this.style.color)"
                            style="color: #FFD43B;"></i>
                    </span>
                    <span class="mx-2">
                        <i class="fa-solid fa-music" id="fifthitem" onclick="handelClick2(this.id, this.style.color)"
                            style="color: #B197FC;"></i>
                    </span>
                    <span class="mx-2">
                        <i class="fa-solid fa-heart" id="sixthitem" onclick="handelClick2(this.id, this.style.color)"
                            style="color: #e16bd1;"></i>
                    </span>
                    <span class="mx-2">
                        <i class="fa-solid fa-bowl-food" id="seventhitem" onclick="handelClick2(this.id, this.style.color)"
                            style="color: #fb98b6;"></i>
                    </span>
                    <span class="mx-2">
                        <i class="fa-solid fa-microchip" id="eigthitem" onclick="handelClick2(this.id, this.style.color)"
                            style="color: #000000;"></i>
                    </span>
                    <span class="mx-2">
                        <i class="fa-solid fa-person-swimming" id="ninthitem"
                            onclick="handelClick2(this.id, this.style.color)" style="color: #74C0FC;"></i>
                    </span>



                </div>
                <div class="modal-footer">
                    {{-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> --}}
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                        aria-label="Close">Select</button>
                </div>
            </div>
        </div>
    </div>
@endsection
