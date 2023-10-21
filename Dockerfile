# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app



# Expose the port your app will run on
EXPOSE 4000

# Start the application
# CMD ["npm", "start"]
