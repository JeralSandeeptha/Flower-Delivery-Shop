# Use the official Node.js image
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the application
COPY . .

# Build the project
RUN npm run build

# === Stage 2: Serve with Nginx ===
FROM nginx:stable-alpine

# Copy built assets from previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]