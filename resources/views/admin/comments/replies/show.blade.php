@extends('layouts.admin')


@section('content')



    @if(count($replies) > 0)

        <h1>All Replies</h1>

        <table class="table">
            <thead>
            <tr>
                <th>Id</th>
                <th>Author</th>
                <th>Email</th>
                <th>Body</th>
                <th>Created</th>
                <th>Post</th>
                <th>Status</th>
                {{--<th>Updated</th>--}}
                {{--<th>Photo</th>  --}}
            </tr>
            </thead>
            <tbody>

            @foreach($replies as $reply)
                <tr>
                    <td>{{$reply->id}}</td>
                    <td>{{$reply->author}}</td>
                    <td>{{$reply->email}}</td>
                    <td>{{$reply->body}}</td>
                    <td>{{$reply->created_at->diffForHumans()}}</td>
                    <td><a href="{{route('home.post',$reply->comment->post->id)}}">View Post</a></td>
                    {{--<td>{{$comment->updated_at->diffForHumans()}}</td>--}}

                    <td>

                        @if($reply->is_active==1)

                            {!! Form::open(['method'=>'PATCH','action'=>['CommentRepliesController@update',$reply->id]]) !!}

                            <input type="hidden" name="is_Active" value="0">
                            <div class="form-group">

                                {!! Form::submit('UnApprove',['class'=>'btn btn-info']) !!}

                            </div>

                            {!! Form::close() !!}

                        @else

                            {!! Form::model($reply,['method'=>'PATCH','action'=>['CommentRepliesController@update',$reply->id]]) !!}

                            <input type="hidden" name="is_Active" value="1">
                            <div class="form-group">

                                {!! Form::submit('Approve',['class'=>'btn btn-success']) !!}

                            </div>

                            {!! Form::close() !!}

                        @endif


                    </td>

                    <td>

                        {!! Form::model($reply,['method'=>'DELETE','action'=>['CommentRepliesController@destroy',$reply->id]]) !!}

                        <div class="form-group">

                            {!! Form::submit('Delete',['class'=>'btn btn-danger']) !!}

                        </div>

                        {!! Form::close() !!}

                    </td>

                </tr>
            @endforeach
            </tbody>
        </table>
    @else

        <h1 class="text-center">No Replies</h1>

    @endif

@endsection