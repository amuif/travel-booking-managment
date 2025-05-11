<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Trips;

class FlightController extends Controller
{
    public function flights()
    {
        $AllTrips = Trips::all();
        $trips = Trips::paginate(15);
        return Inertia::render('flights', ['trips' => $trips, 'AllTrips' => $AllTrips]);
    }
}
