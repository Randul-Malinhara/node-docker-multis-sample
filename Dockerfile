# Stage 1: Build Stage
FROM node:18 AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY app/package.json /app/
RUN npm install --production

# Copy the rest of the application code
COPY app/ /app/

# Stage 2: Production Stage
FROM node:18-slim

WORKDIR /app

# Copy from the build stage
COPY --from=build /app /app

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
