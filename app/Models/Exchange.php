<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exchange extends Model
{
    protected $fillable = [
        'user_id', 'offer_skill_id', 'request_skill_id', 'details', 'status'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function offerSkill()
    {
        return $this->belongsTo(Skill::class, 'offer_skill_id');
    }
    public function requestSkill()
    {
        return $this->belongsTo(Skill::class, 'request_skill_id');
    }

    use HasFactory;
}
