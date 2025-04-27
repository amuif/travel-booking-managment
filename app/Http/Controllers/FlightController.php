<?php

namespace App\Http\Controllers;

use App\Services\AviationStackService;  // Fixed namespace
use Illuminate\Http\Request;
use Inertia\Inertia;

class FlightController extends Controller
{
    protected $aviationStack;
    
    public function __construct(AviationStackService $aviationStack)
    {
        $this->aviationStack = $aviationStack;
    }

    public function index()
    {
        $flights = $this->aviationStack->getFlights([
            'limit' => 10,
            // You can add more parameters here as needed by the API
            // 'flight_status' => 'active',
            // 'dep_iata' => 'JFK',
        ]);

        // Check for errors in response
        if (isset($flights['error'])) {
            return back()->with('error', $flights['error']);
        }

        return Inertia::render('explore', [
            'flights' => $flights['data'] ?? [],
        ]);
    }
}