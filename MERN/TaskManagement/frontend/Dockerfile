# Set base image
FROM node:latest

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code
COPY . .

# Set the container port
EXPOSE 3000

# Command to run the React app
CMD ["npm", "start"]