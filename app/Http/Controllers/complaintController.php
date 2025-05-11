<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Contact;

class complaintController extends Controller
{
    public function index()
    {
        return Inertia::render('contact');
    }
    public function contact(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|min:2',
            'email' => 'required|',
            'message' => 'required|min:5',
            'company' => 'nullable|',
            'subject' => 'required|'
        ]);

        Contact::create($validated);

        return redirect()->back()->with('success', 'Message sent successfully!');
    }
}
