# Base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file
COPY package.json package-lock.json ./

# Install the project dependencies
RUN npm install

# Copy the application code into the container
COPY . .

RUN npm run build

RUN npm install -g serve
#expose the port server runs on
EXPOSE 8000

#cmd to start the application
CMD [ "serve","-s","build","-l","8000" ]

