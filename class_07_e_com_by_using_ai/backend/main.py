# Importing the requests library to make a GET request to Sanity API
import requests 
# Importing the rich library to print data in a pretty format
import rich
# Importing FastAPI to create a web API
from fastapi import FastAPI



# Creating an instance of FastAPI
app = FastAPI()

# Defining the PROJECT_ID variable which is the ID of the Sanity project
PROJECT_ID = "vrsxz4oo"
# Defining the DATASET_ID variable which is the ID of the dataset in Sanity
DATASET_ID = "production"
# Defining the QUERY variable which is the query to fetch all products from Sanity
QUERY = """
*[_type == 'product']{
  category,
  'image': image.asset->url,
   colors, description, features, inStock, name, onSale, originalPrice, price, rating, sizes
}
"""
# Defining the API_URL variable which is the URL of the Sanity API
API_URL = f"https://{PROJECT_ID}.api.sanity.io/v1/data/query/{DATASET_ID}"



# Defining a function to get all products from Sanity
@app.get("/")
# This function will be called when a GET request is made to the root URL
def get_function():
    
    # Making a GET request to the Sanity API with the query
    response = requests.get(API_URL, params={"query": QUERY})
    # Checking if the response status code is 200 (OK)
    if response.status_code == 200:
        # Getting the result of the query from the response
        result = response.json()
        # Printing the result in a pretty format using rich
        rich.print("🤑 Fetch products:", result.get("result"))
        # Returning the result
        return result.get("result")
    else:
        # Printing an error message if the response status code is not 200
        print("😱 Error fetching products:", response.status_code, response.text)
        # Returning None if there is an error
        return None

