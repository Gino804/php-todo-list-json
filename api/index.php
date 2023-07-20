<?php

$tasks = ["HTML", "CSS", "Responsive design", "Javascript", "PHP", "Laravel"];

header("Content-Type: application/json");

echo json_encode($tasks);
