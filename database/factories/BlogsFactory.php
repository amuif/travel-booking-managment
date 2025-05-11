<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as FakerFactory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blogs>
 */
class BlogsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = FakerFactory::create('en_US');
        $images = [
            '/blogs/1.jpg',
            '/blogs/2.jpg',
            '/blogs/3.jpg',
            '/blogs/4.jpg',
            '/blogs/5.jpg',
            '/blogs/6.jpg',
            '/blogs/7.jpg',
            '/blogs/8.jpg',
            '/blogs/9.jpg',
            '/blogs/10.jpg',
            '/blogs/11.jpg',
            '/blogs/12.jpg',
            '/blogs/13.jpg',
            '/blogs/14.jpg',
            '/blogs/20.jpg',
            '/blogs/15.jpg',
        ];

        return [
            'title' => $faker->sentence(),
            'body' => $faker->paragraphs(10, true),
            'author' => $faker->name(),
            'image' => $images[array_rand($images)],
            'date' => $faker->dateTimeBetween('2024-01-01', 'now')->format('Y-m-d'),
        ];
    }
}
