FROM node:24-alpine

# Create a new directory for the application
WORKDIR /app

# Copy package*.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 3000

# Run the development server
CMD ["npm","start"]
