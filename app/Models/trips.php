<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trips extends Model
{
    protected $fillable = [
        'user_id',
        'from_city',
        'to_city',
        'departure_date',
        'return_date',
    ];
    /** @use HasFactory<\Database\Factories\TripsFactory> */
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class);
    }
}
