<?php

namespace App;
use Cviebrock\EloquentSluggable\SluggableScopeHelpers;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Post extends Model
{

    use Searchable;

    use Sluggable;

    use SluggableScopeHelpers;


    protected $fillable= [
        'title',
        'body',
        'user_id',
        'photo_id',
        'category_id',
        'slug'
        ];

    public function user(){

        return $this->belongsTo('App\User');
    }

    public function photo(){

        return $this->belongsTo('App\Photo');
    }

    public function category(){

        return $this->belongsTo('App\Category');
    }

    public function comments(){

        return $this->hasMany('App\Comment');
    }

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function photoPlaceHolder(){

        return "http://placehold.it/700x200";

    }


    /**
     * Get the indexable data array for the model.
     *
     * @return array
     */
    public function toSearchableArray()
    {
        $array = $this->toArray();

        // Applies Scout Extended default transformations:
        $array = $this->transform($array);

        // Add an extra attribute:
        $array['category_name'] = $this->category->name;
        $array['user_name'] = $this->user->name;

        //remove unnecessary attributes
        unset($array['photo_id']);
        unset($array['user_id']);
        unset($array['category_id']);

        return $array;
    }

}
