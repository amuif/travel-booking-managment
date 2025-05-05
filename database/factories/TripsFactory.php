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
        $takeOff = $this->faker->dateTimeBetween('00:00:00', '23:00:00');
        $minutesToAdd = $this->faker->numberBetween(60, 1440);
        $landing = (clone $takeOff)->modify("+{$minutesToAdd} minutes");

        return [
            'user_id' => User::factory(),
            'from_city' => 'Addis Ababa',
            'to_city' => $this->faker->city(),
            'departure_date' => $this->faker->dateTimeBetween('+1 days', '+1 month')->format('Y-m-d'),
            'return_date' => $this->faker->dateTimeBetween('+1 month', '+2 months')->format('Y-m-d'),
            'airlines' => $this->faker->randomElement(['Ethiopian Airlines', 'Emirates Airlines']),
            'price' => $this->faker->numberBetween(20000, 100000),
            'take_off_time' => $takeOff->format('H:i:s'),
            'landing_time' => $landing->format('H:i:s'),
        ];
    }
}
