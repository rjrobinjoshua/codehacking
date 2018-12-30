<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Requests\CreatePostsRequest;
use App\Photo;
use App\Post;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class AdminPostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $posts = Post::all();
        return view('admin.posts.index',compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::lists('name','id')->all();

        return view('admin.posts.create',compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreatePostsRequest $request)
    {
        $input = $request->all();

        $user = Auth::user();

        if($file=$request->file('photo_id')){

            $name = time().$file->getClientOriginalName();
            $photo = Photo::create(['file'=>$name]);
            $file->move('images',$name);
            $input['photo_id'] = $photo->id;
        }

        $post =$user->posts()->create($input);

        Session::flash('alert_user','The Post '.$post->title .' has been Created');

        return redirect(route('admin.posts.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $categories = Category::lists('name','id')->all();
        $post = Post::findOrFail($id);

        return view('admin.posts.edit',compact('post','categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);

        $input = $request->all();

        if($file = $request->file('photo_id')){

            $name = time().$file->getClientOriginalName();
            $file->move('images',$name);
            $photo = Photo::create(['file' => $name]);
            $input['photo_id'] = $photo->id;
        }

        $user = Auth::user();

        $post = $user->posts()->whereId($id)->first();
        $post->update($input);

        Session::flash('alert_user','The Post '.$post->title .' has been Updated');

        return redirect(route('admin.posts.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::findOrFail($id);

        if($photo=$post->photo){
            unlink(public_path().$photo->file);
            $photo->delete();
        }

        $post->delete();
        Session::flash('alert_user','The Post '.$post->title .' has been deleted');

        return redirect(route('admin.posts.index'));
    }
}
