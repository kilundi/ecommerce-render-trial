#!/bin/bash

# Activate the virtual environment
echo "Activating venv..."
source venv/Scripts/activate  # Adjust the path accordingly for Windows

# Build the project
echo "Building the project ..."

python3.10 -m pip install -r requirements.txt

echo "Making migrations ..."
python3.10 manage.py makemigrations --noinput

echo "Running migrations..."
python3.10 manage.py migrate --noinput

echo "Collecting Static..."
python3.10 manage.py collectstatic --noinput --clear

# Start Tailwind CSS
echo "Starting Tailwind CSS..."
python3.10 manage.py tailwind start

# Deactivate the virtual environment
echo "Deactivating venv..."
deactivate
