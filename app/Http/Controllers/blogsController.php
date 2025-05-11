<?php

namespace App\Http\Controllers;

use App\Models\Blogs;
use Inertia\Inertia;

class BlogsController extends Controller
{

    public function blogs()
    {
        $data = Blogs::all();
        return Inertia::render('blogs', ['data' => $data]);
    }
    public function blogWithId($id)
    {
        $blog = Blogs::find($id);
        $blogs = Blogs::where('id', '!=', $id)->limit(3)->get();
        return Inertia::render('dynamicBlog', ['blog' => $blog, 'blogs' => $blogs]);
    }
}
