# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the Node.js application files into the container
COPY app.js .

# Expose port 3000 for the Node.js app
EXPOSE 3000

# Start the Node.js application
CMD ["node", "app.js"]

