@extends('layout.layout')

@section('content')
    <form action="{{ route('create_skills') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="mb-3">
            <label for="skillName" class="form-label">Add Skill</label>
            <div class="input-group">
                <input type="text" name="skill_name" class="form-control" id="skillName" aria-describedby="skillHelp">
                <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    onclick="searchIcons()">Search Icons</button>
            </div>
            <div id="skillHelp" class="form-text">You can add a skill from here to show on the front-end of your site</div>
            @if ($errors->has('skill_name'))
                <span class="text-danger">{{ $errors->first('skill_name') }}</span>
            @endif
        </div>

        <div class="mb-3">
            <label for="skillImage" class="form-label">Add Skill Image</label>
            <input type="file" name="skill_image" class="form-control" id="skillImage" aria-describedby="imageHelp">
            <div id="imageHelp" class="form-text">You can add a skill image from here to show on the front-end of your site
            </div>
        </div>

        <div class="mb-3">
            <label for="skillIcon" class="form-label">Add Skill Icon</label>
            <input type="text" name="skill_icon_class" id="input1" readonly class="form-control"
                aria-describedby="iconHelp">
            <input type="text" name="skill_icon_color" id="input2" readonly class="form-control"
                aria-describedby="iconHelp">
            <div id="iconHelp" class="form-text">You can add a skill icon from here to show on the front-end of your site
            </div>
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
                        <i class="fas website fa-code" id="firstitem" onclick="handelClick2(this.id, this.style.color)"
                            style="color: #fb79c5;"></i>
                    </span>
                    <span class="mx-2">
                        <i class="fa-brands programing fa-laravel" id="seconditem" onclick="handelClick2(this.id, this.style.color)"
                            style="color: #ff0000;"></i>
                    </span>
                    <span class="mx-2">
                        <i class="fa-brands fa-react" id="thirdtitem" onclick="handelClick2(this.id, this.style.color)"
                            style="color: #63E6BE;"></i>
                    </span>
                    <span class="mx-2">
                        <i class="fa-brands trading fa-bitcoin" id="fourthitem" onclick="handelClick2(this.id, this.style.color)"
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
                        <i class="fa-solid cooking cook fa-bowl-food" id="seventhitem" onclick="handelClick2(this.id, this.style.color)"
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
                    <span class="mx-2">
                        <i class="fab front end fa-css3-alt" id="tenthitem" onclick="handelClick2(this.id, this.style.color)"
                            style="color: #1f9380;"></i>
                    </span>
                    <span class="mx-2">
                        <i class="fas graphic fa-photo-video" id="elevenitem" onclick="handelClick2(this.id, this.style.color)"
                            style="color: #d49310;"></i>
                    </span>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                        aria-label="Close">Select</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        function searchIcons() {
            // Get the search query
            const query = document.getElementById('skillName').value.trim().toLowerCase();

            // Get all icon elements in the modal
            const icons = document.querySelectorAll('#exampleModal .modal-body i');

            // Loop through all icons and filter based on the search query
            icons.forEach(icon => {
                // Get the class name of the icon and convert to lower case
                const iconClass = icon.className.toLowerCase();

                // Check if the icon class includes the search query
                if (iconClass.includes(query)) {
                    icon.parentElement.style.display = 'inline-block'; // Show the icon
                } else {
                    icon.parentElement.style.display = 'none'; // Hide the icon
                }
            });
        }

        function handelClick2(id, color) {
            const classNames = document.getElementById(id).className;
            const input_value = document.getElementById("input1");
            input_value.value = classNames;
            const input_value2 = document.getElementById("input2");
            input_value2.value = color;
        }
    </script>
@endsection
