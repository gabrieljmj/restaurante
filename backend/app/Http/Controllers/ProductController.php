<?php

namespace App\Http\Controllers;

use App\Repositories\ProductsRepository;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    private $repository;

    public function __construct(ProductsRepository $repository)
    {
        $this->repository = $repository;
    }

    public function mostOrdered()
    {
        $products = $this->repository->getMostOrdered();

        return response()->json($products);
    }

    public function search(Request $response)
    {
        $query = $response->get('q');
        $result = $this->repository->search($query);

        return response()->json($result);
    }
}
