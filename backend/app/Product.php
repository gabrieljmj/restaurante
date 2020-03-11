<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'picture', 'price', 'quantity_in_stock', 'ordered'];
}
