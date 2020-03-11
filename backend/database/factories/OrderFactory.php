<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Order;
use Faker\Generator as Faker;

$factory->define(Order::class, function (Faker $faker) {
    return [
        'client_name' => $faker->name,
        'observation' => $faker->sentence(),
        'total_price' => $faker->randomFloat(2, 10, 100),
        'payment_method' => 'cash',
    ];
});
