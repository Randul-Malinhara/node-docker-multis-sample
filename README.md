# Node.js Docker Multi-Stage Build Project

## 📜 Description
This project demonstrates how to use **Docker multi-stage builds** to optimize a Node.js application. Multi-stage builds help reduce the image size by separating the build environment from the runtime environment.

The project serves a basic "Hello World" API using **Express.js** and includes Dockerization to ensure the application is lightweight and production-ready.

---

## 🚀 Features
- **Node.js with Docker Multi-Stage Builds**: Separate build and runtime stages to create smaller images.
- **Lightweight Production Image**: Uses `node:18-slim` to minimize the final image size.
- **Portability**: Easily deployable as a containerized application.

---

## 🛠️ Project Structure
```plaintext
node-docker-multis-sample/
├── app/
│   ├── package.json      # Node.js dependencies
│   ├── server.js         # Main application file
├── Dockerfile            # Docker multi-stage build file
├── .dockerignore         # Files to exclude from Docker image
└── README.md             # Project documentation
