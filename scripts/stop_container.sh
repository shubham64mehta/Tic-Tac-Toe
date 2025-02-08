#!/bin/bash
set -e

# Stop the running container (if any)
#!/bin/bash
CONTAINER_NAME="my_container"

if [ -n "$(docker ps -q --filter "name=$CONTAINER_NAME")" ]; then
    docker stop "$CONTAINER_NAME"
    docker rm "$CONTAINER_NAME"
else
    echo "No running container found with name: $CONTAINER_NAME"
fi


# Replace <container_name> with the actual name of your container