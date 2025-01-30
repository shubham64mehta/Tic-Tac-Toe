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

EXPOSE 8000

RUN npm start