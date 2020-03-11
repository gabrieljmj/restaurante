<?php

use App\Order;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('client_name');
            $table->decimal('total_price')->nullable();
            $table->text('observation')->nullable();
            $table->enum('payment_method', ['cash', 'credit_cartd']);
            $table->enum('status', [Order::STATUS_MADE, Order::STATUS_READY, Order::STATUS_DELIVERED])->default(Order::STATUS_MADE);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
