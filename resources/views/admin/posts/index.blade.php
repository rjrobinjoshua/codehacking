@extends('layouts.admin')


@section('content')

    <h1>Posts</h1>

    @if(Session::has('alert_user'))

        <p class="bg-danger">{{session('alert_user')}}</p>

    @endif

    <table class="table">
       <thead>
         <tr>
             <th>Id</th>
             <th>Photo</th>
             <th>Title</th>
             <th>Owner</th>
             <th>Category</th>
             <th>Created</th>
             <th>Updated</th>
             <th>Post Link</th>
             <th>Commments</th>
          </tr>
       </thead>
       <tbody>
        @if($posts)
            @foreach($posts as$post)
                <tr>
                    <td>{{$post->id}}</td>
                    <td><img height="50" src="{{$post->photo ? $post->photo->file: '/images/400.png'}}" alt=""></td>
                    <td> <a href="{{route('admin.posts.edit',$post->id)}}">{{$post->title}}</a></td>
                    <td>{{$post->user->name}}</td>
                    <td>{{$post->category? $post->category->name : 'Uncategorized'}}</td>
                    <td>{{$post->created_at->diffForHumans()}}</td>
                    <td>{{$post->updated_at->diffForHumans()}}</td>
                    <td><a href="{{route('home.post',$post->slug)}}">View Post</a></td>
                    <td><a href="{{route('admin.comments.show',$post->id)}}">View Comments</a></td>
                </tr>
            @endforeach
        @endif
       </tbody>
     </table>

    <div class="row">
        <div class="col-sm-6 col-sm-offset-5">

            {{$posts->render()}}

        </div>
    </div>

@endsection()
