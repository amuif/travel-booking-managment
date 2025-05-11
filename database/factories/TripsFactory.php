<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\trips>
 */


class TripsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // List of top tourist cities from various regions around the world


        $citiesWithAirports = [
            // Europe
            ['city' => 'Paris', 'airport' => 'Charles de Gaulle Airport', 'duration' => 7],
            ['city' => 'London', 'airport' => 'Heathrow Airport', 'duration' => 8],
            ['city' => 'Rome', 'airport' => 'Leonardo da Vinci–Fiumicino Airport', 'duration' => 6.5],
            ['city' => 'Barcelona', 'airport' => 'Barcelona–El Prat Airport', 'duration' => 7],
            ['city' => 'Amsterdam', 'airport' => 'Schiphol Airport', 'duration' => 7.5],

            // Africa
            ['city' => 'Cape Town', 'airport' => 'Cape Town International Airport', 'duration' => 6],
            ['city' => 'Nairobi', 'airport' => 'Jomo Kenyatta International Airport', 'duration' => 2],
            ['city' => 'Cairo', 'airport' => 'Cairo International Airport', 'duration' => 3],
            ['city' => 'Addis Ababa', 'airport' => 'Bole International Airport', 'duration' => 0],
            ['city' => 'Marrakech', 'airport' => 'Marrakesh Menara Airport', 'duration' => 7.5],

            // Asia
            ['city' => 'Tokyo', 'airport' => 'Narita International Airport', 'duration' => 16],
            ['city' => 'Bangkok', 'airport' => 'Suvarnabhumi Airport', 'duration' => 9],
            ['city' => 'Singapore', 'airport' => 'Changi Airport', 'duration' => 10],
            ['city' => 'Dubai', 'airport' => 'Dubai International Airport', 'duration' => 4],
            ['city' => 'Seoul', 'airport' => 'Incheon International Airport', 'duration' => 13],

            // North America
            ['city' => 'New York', 'airport' => 'John F. Kennedy International Airport', 'duration' => 14],
            ['city' => 'Los Angeles', 'airport' => 'Los Angeles International Airport', 'duration' => 17],
            ['city' => 'Toronto', 'airport' => 'Toronto Pearson International Airport', 'duration' => 15],
            ['city' => 'Mexico City', 'airport' => 'Benito Juárez International Airport', 'duration' => 16],
            ['city' => 'Vancouver', 'airport' => 'Vancouver International Airport', 'duration' => 18],

            // South America
            ['city' => 'Rio de Janeiro', 'airport' => 'Galeão International Airport', 'duration' => 13],
            ['city' => 'Buenos Aires', 'airport' => 'Ministro Pistarini International Airport', 'duration' => 14],
            ['city' => 'Lima', 'airport' => 'Jorge Chávez International Airport', 'duration' => 12.5],
        ];

        static $index = 0;
        $destination = $citiesWithAirports[$index];
        $index = ($index + 1) % count($citiesWithAirports);

        $takeOff = $this->faker->dateTimeBetween('00:00:00', '23:00:00');
        $minutesToAdd = $this->faker->numberBetween(60, 1440);
        $landing = (clone $takeOff)->modify("+{$minutesToAdd} minutes");

        return [
            'user_id' => User::factory(),
            'from_city' => 'Addis Ababa',
            'to_city' => $destination['city'],
            'to_airport' => $destination['airport'],
            'departure_date' => $this->faker->dateTimeBetween('+1 days', '+1 month')->format('Y-m-d'),
            'return_date' => $this->faker->dateTimeBetween('+1 month', '+2 months')->format('Y-m-d'),
            'airlines' => $this->faker->randomElement(['Ethiopian Airlines', 'Emirates Airlines', 'Qatar Airways']),
            'price' => $this->faker->numberBetween(20000, 100000),
            'take_off_time' => $takeOff->format('H:i:s'),
            'landing_time' => $landing->format('H:i:s'),
            'duration' => $destination['duration']
        ];
    }
}
