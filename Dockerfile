# Use the official Node 18 image as base
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Command to run your application with hot reloading
CMD ["npm", "run", "serve"]
