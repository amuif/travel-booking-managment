<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('trips', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('from_city');
            $table->string('to_city');
            $table->date('departure_date')->nullable();
            $table->date('return_date')->nullable();
            $table->string('to_airport')->nullable();
            $table->string('duration');
            $table->string('airlines');
            $table->string('price');
            $table->time('take_off_time');
            $table->time('landing_time');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trips');
    }
};
