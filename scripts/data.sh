#!/bin/sh

curl -s localhost:8080
curl -s localhost:8080/about
curl -s -X POST -H "Content-Type: application/json" -d '{"name":"high", "color":"#ffcc33", "value":10}' localhost:8080/priorities
