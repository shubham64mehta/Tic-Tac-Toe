#!/bin/bash
set -e

# Pull the Docker image from Docker Hub
docker pull shubham64mehta286/simple-tic-tac-toe:latest

# Run the Docker image as a container
docker run -d -p 8000:8000 shubham64mehta286/simple-tic-tac-toe:latest 