#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Download header background video
curl -L "https://red-softwares.com/header-bg.mp4" -o public/header-bg.mp4

# Download header illustration
curl -L "https://red-softwares.com/header-illustration.webp" -o public/header-illustration.webp

echo "Assets downloaded successfully!"
