<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{

    public function users()
    {
        return $this->belongsToMany(User::class);
    }


    public function offeredExchanges()
    {
        return $this->hasMany(Exchange::class, 'offer_skill_id');
    }

  public function requestedExchanges()
    {
        return $this->hasMany(Exchange::class, 'request_skill_id');
    }



    use HasFactory;
}
