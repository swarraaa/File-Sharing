# Use the official Node.js 14 image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the client code
COPY . .

# Build the Vite app
RUN npm run build

# Install a simple HTTP server to serve the build files
RUN npm install -g serve

# Expose port 5173
EXPOSE 5173

# Serve the build files
CMD ["serve", "-s", "dist", "-l", "5173"]
