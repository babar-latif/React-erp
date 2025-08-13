#!/bin/bash

cd erp-suite/apps/web

npm install

npm run dev -- --port 3000

# Open browser
if command -v xdg-open > /dev/null; then
  xdg-open http://localhost:3000
elif command -v open > /dev/null; then
  open http://localhost:3000
fi