<?php

namespace Tests\Feature;

use App\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * @covers \App\Http\Controller\ProductController
 */
class ProductTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @covers ::mostOrdered
     */
    public function testMostOrderedProductsList()
    {
        factory(Product::class, 5)->create();

        $response = $this->get('/products', ['Accept' => 'application/json']);

        $response->assertOk();
    }

    public function testProductsSearch()
    {
        factory(Product::class)
            ->create([
                'name' => 'Pizza'
            ]);

        factory(Product::class)
            ->create([
                'name' => 'Macarrão'
            ]);

        $response = $this->get('/products/search?q=pizza', ['Accept' => 'application/json']);

        $response->assertOk();
        $response->assertJsonCount(1);
    }
}
