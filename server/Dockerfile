# Use the official Node.js 14 image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server code
COPY . .

# Expose the port the server runs on
EXPOSE 8000

# Start the server using the npm start command
CMD ["npm", "start"]
