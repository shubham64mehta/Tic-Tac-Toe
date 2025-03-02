#!/bin/bash

# Find the container using port 8000
CONTAINER_ID=$(docker ps -q --filter "publish=8000")

# Check if a container is running on port 8000
if [ -n "$CONTAINER_ID" ]; then
    echo "Stopping existing container on port 8000..."
    docker stop "$CONTAINER_ID"
    docker rm "$CONTAINER_ID"
else
    echo "No container is running on port 8000."
fi
