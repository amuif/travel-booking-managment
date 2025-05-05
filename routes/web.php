<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\travelController;
use App\Http\controllers\FlightController;

Route::get('/', [travelController::class,'index'])->name('home');
Route::get('/about', [travelController::class, 'about'])->name('about');
Route::get('/explore', [travelController::class, 'explore'])->name('explore');
Route::get('/flights', [FlightController::class, 'flights'])->name('flights');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
