# Task Management App

## Description

This app allows a user to create, edit and delete tasks. There is also an option to check completed tasks.

## Prerequisites

Make sure you have the following installed:

- Docker
- Node.js (if applicable)

## Getting Started

Follow these steps to run the application using Docker:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd your-app-directory
```

### 2. Build Docker Images

```bash
docker-compose build
```

### 3. Start Docker Containers

```bash
docker-compose up
```

### 4. Access the App

Once the containers are running, access the application in a web browser:

Frontend: http://localhost:3000
Backend/API: http://localhost:5000 (if applicable)
Database: Check your database-specific connection information

### 5. Shutting Down the App

```bash
docker-compose down
```