


@if(Session::has('comment_alert'))
    <div class="alert-success col-sm-6">
        <p class="text-center">{{session('comment_alert')}}</p>
    </div>

@endif