#!/bin/bash

# Activate the virtual environment
echo "Activating venv..."
source venv/Scripts/activate  # Adjust the path accordingly for Windows

# Build the project
echo "Building the project ..."

python3.12 -m pip install -r requirements.txt

echo "Making migrations ..."
python3.12 manage.py makemigrations --noinput

echo "Running migrations..."
python3.12 manage.py migrate --noinput

echo "Collecting Static..."
python3.12 manage.py collectstatic --noinput --clear

# Deactivate the virtual environment
echo "Deactivating venv..."
deactivate
