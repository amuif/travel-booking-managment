<?php

namespace App\Http\Controllers;

use App\Models\Trips;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class travelController extends Controller
{
    public function index()
    {
        $users = User::orderBy('created_at', 'desc')->get();
        return Inertia::render('home', ['users' => $users]);
    }
    public function about()
    {
        return Inertia::render('about');
    }
    public function explore()
    {
        return Inertia::render('explore');
    }
}
