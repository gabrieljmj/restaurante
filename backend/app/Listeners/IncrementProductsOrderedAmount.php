<?php

namespace App\Listeners;

use App\Events\OrderMade;
use App\Repositories\ProductsRepository;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class IncrementProductsOrderedAmount
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct(ProductsRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Handle the event.
     *
     * @param \App\Events\OrderMade $
     *
     * @return void
     */
    public function handle(OrderMade $event)
    {
        $order = $event->getOrder();

        foreach ($order->products as $product) {
            $ordered = $product->pivot->amount + $product->ordered;

            $this->repository->update(compact('ordered'), $product->id);
        }
    }
}
