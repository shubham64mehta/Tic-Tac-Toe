#!/bin/bash
set -e
set -x
set -o pipefail

echo "Stopping the running container (if any)"

# Stop the running container (if any)
# containerId = `docker ps |awk -f " " '{print $1}'`
# docker rm -f $containerId