#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Download header background video
curl -L "https://redapp.co.il/header-bg.mp4" -o public/header-bg.mp4

# Download header illustration
curl -L "https://redapp.co.il/header-illustration.webp" -o public/header-illustration.webp

echo "Assets downloaded successfully!"
