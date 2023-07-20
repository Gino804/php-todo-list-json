<?php

$database_path = __DIR__ . '/../database/tasks.json';

$tasks = json_decode(file_get_contents($database_path), true);

$new_task = $_POST['task'] ?? null;

if ($new_task) {
    $tasks[] = $new_task;

    file_put_contents($database_path, json_encode($tasks));

    header("Content-Type: application/json");

    echo $new_task;
} else {
    header("Content-Type: application/json");

    echo json_encode($tasks);
}
