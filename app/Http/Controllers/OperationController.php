<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

use App\Models\Client;
use App\Models\Operation;

class OperationController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function data_get(){
        $operations = Operation::all();

        return Response::json($operations);
    }
}
