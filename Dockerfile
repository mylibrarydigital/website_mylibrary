FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Set the NODE_OPTIONS to increase the heap memory limit
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Install dependencies and build the React app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Nginx to serve the build
FROM nginx:alpine

# Copy the React build files into Nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
