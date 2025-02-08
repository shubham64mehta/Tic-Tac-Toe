#!/bin/bash
set -e

# Stop the running container (if any)
CONTAINER_NAME="my_container"

if docker ps -q --filter "name=$CONTAINER_NAME" | grep -q .; then
    docker stop "$CONTAINER_NAME"
    docker rm "$CONTAINER_NAME"
fi



# Replace <container_name> with the actual name of your container