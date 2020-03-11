<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::prefix('orders')->group(function () {
    Route::get('{order}', 'OrderController@read');

    Route::put('{order}', 'OrderController@setStatus');

    Route::get('', 'OrderController@all');

    Route::post('', 'OrderController@create');
});

Route::prefix('/products')->group(function () {
    Route::get('search', 'ProductController@search');

    Route::get('', 'ProductController@mostOrdered');
});
