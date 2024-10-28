<script lang = "ts">

import exifread
import requests

def get_location_from_photo(image_path):
    """Reads Exif data from a photo and returns latitude and longitude."""
    with open(image_path, 'rb') as f:
        tags = exifread.process_file(f)

    # Extract GPS coordinates
    gps_latitude = tags.get('GPS GPSLatitude')
    gps_longitude = tags.get('GPS GPSLongitude')

    if gps_latitude and gps_longitude:
        # Convert Exif coordinates to decimal degrees
        latitude = convert_exif_to_decimal(gps_latitude)
        longitude = convert_exif_to_decimal(gps_longitude)
        return latitude, longitude
    else:
        return None, None

def convert_exif_to_decimal(exif_coord):
    """Converts Exif GPS coordinates to decimal degrees."""
    degrees = float(exif_coord[0].num) / exif_coord[0].den
    minutes = float(exif_coord[1].num) / exif_coord[1].den
    seconds = float(exif_coord[2].num) / exif_coord[2].den
    return degrees + (minutes / 60) + (seconds / 3600)

def geocode_location(latitude, longitude):
    """Geocodes latitude and longitude using Google Maps API."""
    api_key = "YOUR_GOOGLE_MAPS_API_KEY"
    url = f"https://maps.googleapis.com/maps/api/geocode/json?latlng={latitude},{longitude}&key={api_key}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if data['status'] == 'OK':
            return data['results'][0]['formatted_address']
        else:
            return "Geocoding failed"
    else:
        return "API request failed"

# Example usage
image_path = "path/to/your/photo.jpg"
latitude, longitude = get_location_from_photo(image_path)
if latitude and longitude:
    address = geocode_location(latitude, longitude)
    print(f"Location: {address}")
else:
    print("Location data not found in the photo.")

</script>

// codigo proporcionado por 
// You're asking to create an application that can take a photo, store it in a specific file, and then locate the place where the photo was taken on Google Maps. Here's a breakdown of the steps involved and how you can approach this:

// 1. Capture the Photo

// User Interface: You'll need a way for the user to take a photo. This could be a button that triggers the device's camera or a simple "Choose from Gallery" option.
// Camera Access: Request permission from the user to access their camera.
// Image Storage: Save the captured photo to a specific file location on the device. You'll need to choose a suitable file format (e.g., JPEG, PNG).
// 2. Extract Location Data from the Photo

// Exif Data: Most photos taken with smartphones and cameras contain Exif data (Exchangeable Image File Format). This data includes information like the date, time, and location (latitude and longitude) where the photo was taken.
// Exif Library: You'll need a library to read and parse Exif data from the image file. There are libraries available for various programming languages (e.g., Python, Java, JavaScript).
// 3. Geocoding with Google Maps

// Google Maps API: You'll need to use the Google Maps API to convert the latitude and longitude coordinates into a human-readable address.
// API Key: Obtain a Google Maps API key from the Google Cloud Console.
// Geocoding Request: Send a geocoding request to the Google Maps API, providing the latitude and longitude coordinates.
// Response: The API will return a response containing the address, place name, and other relevant information.
// 4. Display the Location on Google Maps

// Google Maps SDK: Use the Google Maps SDK for your chosen platform (Android, iOS, web) to display the location on a map.
// Marker: Place a marker on the map at the specified coordinates.
// User Interface: You can add additional UI elements to the map, such as a label displaying the address or a button to zoom in/out.
// Example Code (Python with ExifRead and Google Maps API)


// el codigo cambiarlo al lenguaje de svelte

// You provided a Svelte file, and then asked to "change the code to Svelte language". However, the code you provided is already written in Svelte.

// It seems like you might be looking for help with a specific aspect of this Svelte code, such as:

// Functionality: What does this code do? It fetches and displays contact information from an API, likely related to real estate listings.
// Styling: How can I improve the layout or appearance of the contact cards?
// Data Handling: How can I modify the way contacts are fetched, filtered, or displayed?
// Error Handling: How can I make the code more robust and handle potential errors during data fetching?
// Pagination: How can I customize the pagination behavior or improve its user experience?
// To get the most helpful response, please clarify your request:

// What specifically do you want to change or achieve with this Svelte code?
// Are there any specific parts of the code you're struggling with?
// Once you provide more context, I can give you more tailored guidance.
