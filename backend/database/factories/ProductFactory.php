<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => 'Product #' . $faker->numberBetween(100, 1000),
        'picture' => $faker->image(null, 0, 0, null, false),
        'price' => $faker->randomFloat(2, 10, 100),
        'quantity_in_stock' => $faker->numberBetween(1, 1000),
        'ordered' => $faker->numberBetween(0, 1000),
    ];
});
