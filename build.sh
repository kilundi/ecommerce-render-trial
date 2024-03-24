#!/bin/bash

# Build the project
echo "Building the project ..."

python3.9 -m pip install -r requirements.txt

echo "Making migrations ..."
python3.9 manage.py makemigrations --noinput

echo "Running migrations..."
python3.9 manage.py migrate --noinput


echo "Collecting Static..."
python3.9 manage.py collectstatic --noinput --clear
