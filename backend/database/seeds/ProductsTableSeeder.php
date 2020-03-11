<?php

use App\Product;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Product::class)->create([
            'name' => 'Pizza',
            'picture' => 'pizza.jpg'
        ]);

        factory(Product::class)->create([
            'name' => 'Macarrão',
            'picture' => 'macarrao.jpg'
        ]);
    }
}
