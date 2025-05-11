<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\travelController;
use App\Http\controllers\FlightController;
use App\Http\controllers\BlogsController;
use App\Http\Controllers\complaintController;

Route::get('/', [travelController::class, 'index'])->name('home');
Route::get('/about', [travelController::class, 'about'])->name('about');
Route::get('/explore', [travelController::class, 'explore'])->name('explore');
Route::get('/flights', [FlightController::class, 'flights'])->name('flights');
Route::get('/blogs', [BlogsController::class, 'blogs'])->name('blogs');
Route::get('/blogs/{id}', [BlogsController::class, 'blogWithId'])->name('blogWithId');
Route::get('/contact', [complaintController::class, 'index'])->name('contact-index');
Route::post('/contact', [complaintController::class, 'contact'])->name('contact');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
