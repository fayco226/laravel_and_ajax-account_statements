<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Operation extends Model
{
    protected $table = 'operations';

    public function client(){
        return $this->belongsTo(Client::class);
    }

    protected $fillable = ['annee', 'trimestre', 'nature', 'reference', 'montant'];
}
