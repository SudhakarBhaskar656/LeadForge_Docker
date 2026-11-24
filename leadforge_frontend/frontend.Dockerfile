FROM node:20-alpine

# Create a new directory for the application
WORKDIR /app

# Copy package*.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 5173

# Run the development server
CMD ["npm", "run", "dev", "--", "--host"]
