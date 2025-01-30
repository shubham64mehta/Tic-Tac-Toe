#!/bin/bash
set -e

# Stop the running container (if any)
docker rm -f my_container || true