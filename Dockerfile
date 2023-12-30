# Use an official Nginx image as a base image
FROM nginx:alpine

# Remove the default Nginx configuration
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy the Nginx configuration file from your project to the container
COPY nginx/nginx.conf /etc/nginx/conf.d

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the built React app to the container
COPY dist/ .

# Expose the port that the Nginx server will run on
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
