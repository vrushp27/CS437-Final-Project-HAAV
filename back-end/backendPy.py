import RPi.GPIO as GPIO
import time
import requests
from datetime import datetime

# Set up GPIO pins for ultrasonic sensor
GPIO.setmode(GPIO.BOARD)
TRIG = 16
ECHO = 18
GPIO.setup(TRIG, GPIO.OUT)
GPIO.setup(ECHO, GPIO.IN)

# Define API endpoint to send trash level data
API_ENDPOINT = "https://localhost:5000/trash-level"

# Function to calculate distance from ultrasonic sensor
def get_distance():
    # Send 10us pulse to trigger pin
    GPIO.output(TRIG, True)
    time.sleep(0.00001)
    GPIO.output(TRIG, False)
    
    # Wait for echo pin to go high and start timer
    while GPIO.input(ECHO) == 0:
        pulse_start = time.time()
    
    # Wait for echo pin to go low and stop timer
    while GPIO.input(ECHO) == 1:
        pulse_end = time.time()
    
    # Calculate duration of pulse and convert to distance in cm
    pulse_duration = pulse_end - pulse_start
    distance = pulse_duration * 17150
    distance = round(distance, 2)
    
    return distance

# Function to send trash level data to API endpoint
def send_trash_level(trash_level):
    data = {'trash_level': trash_level, 'timestamp': datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
    headers = {'Content-type': 'application/json'}
    response = requests.post(API_ENDPOINT, json=data, headers=headers)
    
    return response.json()

# Function to map trash levels to percentages
def map_to_percentage(trash_level, max_height):
    percentage = round((1 - (trash_level / max_height)) * 100, 2)
    return percentage

# Define maximum height of trash can in cm
MAX_HEIGHT = 30

# Initialize empty list for trash level history
trash_history = []

# Loop to continuously check trash level and send data to API endpoint
while True:
    distance = get_distance()
    trash_level = round(distance, 2)
    
    percentage = map_to_percentage(trash_level, MAX_HEIGHT)
    response = send_trash_level(percentage)
    
    # Add current trash level and timestamp to history
    trash_history.append({'timestamp': datetime.now().strftime("%Y-%m-%d %H:%M:%S"), 'trash_level': percentage})
    
    # Keep only last 100 entries in history list
    if len(trash_history) > 100:
        trash_history.pop(0)
    
    print(response)
    
    time.sleep(10) # Wait 10 seconds before checking again
