<?php

namespace Tests\Feature;

use App\Order;
use App\Product;
use App\Repositories\OrderRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * @covers \App\Http\Controllers\OrderController
 *
 * @internal
 */
class OrderTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @covers ::create
     */
    public function testCreatingOrderWithNoProducts()
    {
        $data = ['products' => []];
        $response = $this->postJson('/orders', $data, ['Accept' => 'application/json']);

        $orders = app(OrderRepository::class)->all();

        $response->assertStatus(422); // 422: Validation errors
        $this->assertCount(0, $orders);
    }

    /**
     * @covers ::create
     */
    public function testCreatingOrderWithProducts()
    {
        $products = factory(Product::class, 3)
            ->create()
            ->map(function (Product $product) {
                return ['id' => $product->id, 'amount' => 2];
            })
        ;

        $order = [
            'client_name' => 'Test',
            'observation' => '',
            'payment_method' => 'cash',
            'products' => $products,
        ];

        $response = $this->postJson('/orders', $order, ['Accept' => 'application/json']);

        $orders = app(OrderRepository::class)->all();

        $response->assertOk();
        $response->assertJsonStructure(['id']);
        $this->assertCount(1, $orders);
    }

    /**
     * @covers ::setStatus
     */
    public function testUpdatingStatus()
    {
        $order = factory(Order::class)->create();
        $newStatus = Order::STATUS_READY;

        $response = $this->postJson('/orders/'.$order->id, ['status' => $newStatus, '_method' => 'PUT'], ['Accept' => 'application/json']);
        $order->refresh();

        $response->assertOk();
        $this->assertEquals($newStatus, $order->status);
    }

    /**
     * @covers ::setStatus
     */
    public function testUpdatingStatusWithInvalidStatus()
    {
        $order = factory(Order::class)->create();
        $newStatus = 50;

        $response = $this->postJson('/orders/'.$order->id, ['status' => $newStatus, '_method' => 'PUT'], ['Accept' => 'application/json']);
        $order->refresh();

        $response->assertStatus(422);
        $this->assertNotEquals($newStatus, $order->status);
    }
}
