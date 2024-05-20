<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @include('components.links')
</head>

<body>
    <script src="./dist/js/demo-theme.min.js?1684106062"></script>
    <div class="page">

        @include('components.sidebar')

        <div class="page-wrapper">
            @include('components.header')

         @yield('content')

            @include('components.footer')
        </div>
    </div>
@include("components.modal")
@include("components.script")
</body>

</html>
