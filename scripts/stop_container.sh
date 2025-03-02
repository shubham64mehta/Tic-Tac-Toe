#!/bin/bash
set -e

# Stop the running container (if any)
containerId = sudo docker ps | awk 'NR>1 {print $1}'
docker rm -f $containerId