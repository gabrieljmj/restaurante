<?php

namespace App\Repositories;

use App\Order;
use Prettus\Repository\Eloquent\BaseRepository;

class OrderRepository extends BaseRepository
{
    public function model()
    {
        return Order::class;
    }

    public function last(?int $status = null, int $limit = 5)
    {
        $orders = $this->scopeQuery(function ($query) use ($limit) {
            return $query
                ->orderBy('created_at', 'desc')
                ->limit($limit)
            ;
        });

        $orders = null !== $status ? $orders->where('status', ''.$status)->get() : $orders->all();

        return $orders->map(function (Order $order) use ($status) {
            $data = $order->toArray();
            $data['products'] = $order->products->toArray();

            return $data;
        });
    }
}
