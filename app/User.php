<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{

    const APPROVED = 2;
    const ACTIVE = 1;
    const INACTIVE = 0;


    use Notifiable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','role_id','is_active','photo_id','token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function role(){

        return $this->belongsTo('App\Role');

    }

    public function photo(){

        return $this->belongsTo('App\Photo');
    }

    public function isAdmin(){

        if($this->role->name=='Administrator' && $this->is_active==2){

            return true;
        }else{

            return false;
        }

    }

    public function posts(){

        return $this->hasMany('App\Post');

    }

    public function getGravatarAttribute(){

        $hash = md5(strtolower(trim($this->attributes['email'])))."?d=mm";


        return "https://www.gravatar.com/avatar/$hash";

    }
}
