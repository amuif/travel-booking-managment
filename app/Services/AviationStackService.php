<?php


namespace App\Services;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;

class AviationStackService extends Model
{
    protected $baseUrl;
    protected $apiKey;

    public function __construct()
    {
        $this->baseUrl = config('services.aviationstack.base_url');
        $this->apiKey = config('services.aviationstack.key');
    }

    public function getFlights(array $params = [])
    {
        $response = Http::get($this->baseUrl . '/flights', [
            'access_key' => $this->apiKey,
        ] + $params);

        return $response->json();
    }

    // Add other API endpoints as needed
}