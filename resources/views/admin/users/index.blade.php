@extends('layouts.admin')


@section('content')


    @if(Session::has('alert_user'))

        <p class="bg-danger">{{session('alert_user')}}</p>

    @endif

    <h1>Users</h1>

    <table class="table">
       <thead>
         <tr>
           <th>Id</th>
           <th>Photo</th>
           <th>Name</th>
           <th>Email</th>
           <th>Role</th>
           <th>Status</th>
           <th>Created</th>
           <th>Updated</th>
          </tr>
       </thead>
       <tbody>

       @if($users)
           @foreach($users as $user)
                <tr>
                    <td>{{$user->id}}</td>
                    <td><img height="50" src="{{$user->photo ? $user->photo->file : "/images/400.png"}}" alt=""></td>
                    <td><a href="{{route('admin.users.edit',$user->id)}}">{{$user->name}}</a></td>
                    <td>{{$user->email}}</td>
                    @if($user->role)
                        <td>{{$user->role->name}}</td>
                    @else
                        <td>No Role</td>
                    @endif
                    <td>{{$user->is_active==2?"Approved":($user->is_active==1?"Active":"Not Active")}}</td>
                    <td>{{$user->created_at->diffForHumans()}}</td>
                    <td>{{$user->updated_at->diffForHumans()}}</td>
                </tr>
           @endforeach
       @endif
       </tbody>
     </table>



@endsection()