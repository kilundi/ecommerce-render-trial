#!/bin/bash

# Activate the virtual environment
echo "Activating venv..."
source venv/bin/activate  # Assuming Unix-like system; adjust for Windows if needed

# Install dependencies
echo "Installing dependencies..."
python3.9 -m pip install -r requirements.txt

# Build the project
echo "Building the project..."

# Make migrations
echo "Making migrations..."
python3.9 manage.py makemigrations --noinput

# Run migrations
echo "Running migrations..."
python3.9 manage.py migrate --noinput

# Collect static files
echo "Collecting static files..."
python3.9 manage.py collectstatic --noinput --clear

# Start Tailwind CSS
echo "Starting Tailwind CSS..."
python3.9 manage.py tailwind start

# Deactivate the virtual environment
echo "Deactivating venv..."
deactivate  # Assuming Unix-like system; adjust for Windows if needed
