<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\Trips;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{

    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        $defaultImages = [
            '/storage/profile-images/user1.jpg',
            '/storage/profile-images/user2.jpg',
            '/storage/profile-images/user3.jpg',
            '/storage/profile-images/user4.jpg',
            '/storage/profile-images/user5.jpg',
            '/storage/profile-images/user6.jpg',
            '/storage/profile-images/user7.jpg',
            '/storage/profile-images/user8.jpg',
            '/storage/profile-images/user9.jpg',
            '/storage/profile-images/user10.jpg',
            '/storage/profile-images/user11.jpg',
            '/storage/profile-images/user12.jpg',

        ];

        return [
            'name' => fake()->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
            'profile_img' => $this->faker->randomElement($defaultImages),
            // 'image'=>fake()->i
            // 'trips_id' => Trips::inRandomOrder()->first()->id,
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
