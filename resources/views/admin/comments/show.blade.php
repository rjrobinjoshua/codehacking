@extends('layouts.admin')


@section('content')



    @if(count($comments) > 0)

        <h1>All Comments</h1>

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

            @foreach($comments as $comment)
                <tr>
                    <td>{{$comment->id}}</td>
                    <td>{{$comment->author}}</td>
                    <td>{{$comment->email}}</td>
                    <td>{{$comment->body}}</td>
                    <td>{{$comment->created_at->diffForHumans()}}</td>
                    <td><a href="{{route('home.post',$comment->post->id)}}">{{$comment->post->title}}</a></td>
                    <td><a href="{{route('admin.comments.replies.show',$comment->id)}}">View Replies</a></td>
                    {{--<td>{{$comment->updated_at->diffForHumans()}}</td>--}}

                    <td>

                        @if($comment->is_active==1)

                            {!! Form::open(['method'=>'PATCH','action'=>['PostCommentsController@update',$comment->id]]) !!}

                            <input type="hidden" name="is_Active" value="0">
                            <div class="form-group">

                                {!! Form::submit('UnApprove',['class'=>'btn btn-info']) !!}

                            </div>

                            {!! Form::close() !!}

                        @else

                            {!! Form::model($comment,['method'=>'PATCH','action'=>['PostCommentsController@update',$comment->id]]) !!}

                            <input type="hidden" name="is_Active" value="1">
                            <div class="form-group">

                                {!! Form::submit('Approve',['class'=>'btn btn-success']) !!}

                            </div>

                            {!! Form::close() !!}

                        @endif


                    </td>

                    <td>

                        {!! Form::model($comment,['method'=>'DELETE','action'=>['PostCommentsController@destroy',$comment->id]]) !!}

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

        <h1 class="text-center">No Comments</h1>

    @endif

@endsection