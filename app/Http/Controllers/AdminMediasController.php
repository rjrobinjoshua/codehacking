<?php

namespace App\Http\Controllers;

use App\Photo;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Session;

class AdminMediasController extends Controller
{
    public function index(){

        $photos = Photo::all();

        return view('admin.media.index',compact('photos'));

    }

    public function create(){

        return view('admin.media.create');

    }

    public function store(Request $request){


        $file = $request->file('file');

        $name = time().$file->getClientOriginalName();

        $file->move('images',$name);

        $photo = Photo::create(['file' => $name]);
        //Session::flash('alert_user','The Photo ' .$photo->file." is created");

    }

    public function destroy($id){


        $photo = Photo::findOrFail($id);

        unlink(public_path().$photo->file);

        $photo->delete();

        Session::flash('alert_user','The Photo ' .$photo->file." is deleted");

        return redirect(route('admin.media.index'));

    }
}
