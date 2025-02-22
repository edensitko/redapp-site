#!/bin/bash

# Find all TypeScript/TSX files that import framer-motion
files=$(grep -l "framer-motion" $(find src -name "*.tsx" -o -name "*.ts"))

# Add 'use client' directive to each file if it doesn't already have it
for file in $files; do
  if ! grep -q "^'use client';" "$file"; then
    echo "Adding 'use client' to $file"
    sed -i '' '1i\
\'use client\';
' "$file"
  fi
done
