#!/bin/bash
set -e

# Stop the running container (if any)
docker ps -q --filter "name=<container_name>" | grep -q . && docker stop <container_name> && docker rm <container_name>

# Replace <container_name> with the actual name of your container