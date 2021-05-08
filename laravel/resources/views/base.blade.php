<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>GreenHorse @yield('title')</title>

    <script type="text/javascript" src="{{ mix('/js/app.js')  }}"></script>
    <link rel="stylesheet" href="{{ mix('/css/app.css')  }}">

    <!-- Page's specific javascript -->
    @section('javascript')
    @endsection
</head>
<body>
@yield('body')
</body>
</html>
