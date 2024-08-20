#!/bin/bash

# Set directory for the project
PROJECT_DIR="pong-game"

# Set Node.js version
NODE_VERSION="14.x"

# Install Node.js
curl -sL https://deb.nodesource.com/setup_${NODE_VERSION} | sudo -E bash -
sudo apt-get install -y nodejs

# Initialize a new Node.js project
mkdir -p ${PROJECT_DIR}
cd ${PROJECT_DIR}
npm init -y

# Install required dependencies
npm install --save canvasAPI.js gameLogic userInputHandler renderGame handleInput style.css

# Open index.html in the default browser
xdg-open index.html