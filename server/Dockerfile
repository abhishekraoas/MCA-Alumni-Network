# Use the latest Node.js image from Docker Hub
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install --production

# Copy the rest of the project files into the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Set environment variables using the .env file
# Assuming .env is in the root of your project
COPY .env .env

# Command to run the application
CMD ["npm", "start"]
