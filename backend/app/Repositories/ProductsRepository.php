<?php

namespace App\Repositories;

use App\Product;
use Prettus\Repository\Eloquent\BaseRepository;

class ProductsRepository extends BaseRepository
{
    public function model()
    {
        return Product::class;
    }

    /**
     * @param int $limit
     *
     * @return mixed
     */
    public function getMostOrdered(int $limit = 5)
    {
        return $this->scopeQuery(function ($query) use ($limit) {
            return $query
                ->orderBy('ordered', 'desc')
                ->limit($limit);
        })->all();
    }

    public function search(string $searchQuery)
    {
        return $this->scopeQuery(function ($query) use ($searchQuery) {
            return $query->whereRaw('name LIKE \'%' . $searchQuery . '%\'');
        })->all();
    }
}
