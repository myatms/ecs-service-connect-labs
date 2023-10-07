# Use an official Python runtime as the base image
FROM python:3.8-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy the Python application files into the container
COPY . .

# Install Python dependencies
RUN pip install -r requirements.txt

# Expose port 8000 for the Flask app
EXPOSE 8000

# Start the Flask app
CMD ["python", "app.py"]

