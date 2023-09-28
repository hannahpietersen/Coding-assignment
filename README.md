# Countries Web App

## Overview

The Countries Web App is a Python-based web application that allows users to explore and learn about countries around the world. It provides a user-friendly interface to view a list of countries, filter them by various criteria, and access detailed information about each country.

## Features

- **Listing Page:**
  - Displays a table with a list of countries.
  - Table Headers:
    - Name with Flag
    - Region
    - Country ISO Code
    - Currency
    - Population
    - Capital
  - Filters:
    - Population Range
    - Dropdown of the Region
    - Search by Name or Capital
  - Sorting:
    - Name
    - Population
    - Region

- **Details Page:**
  - Accessible by clicking on a country's name.
  - Displays detailed information about a country.
  - Includes a map and flag of the country.
  - Provides information such as:
    - Name
    - Country ISO Code
    - Currency
    - Region
    - Population
    - Capital
    - Dialing Code
    - Timezones
    - Flag
    - Borders
    - Native name in their language.

## Data Source

Country data is sourced from [restcountries.com](https://restcountries.com).

## Demo

A live demo of this web app can be accessed at [https://hannahkongara.pythonanywhere.com/](#).

## Screenshots

![Screenshot 1](/screenshots/screenshot1.png)
![Screenshot 2](/screenshots/screenshot2.png)

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Install the required dependencies for both the Flask backend and React frontend.
   - Backend: Navigate to the `server` directory and run `pip install -r requirements.txt`.
   - Frontend: Navigate to the `client` directory and run `npm install`.
3. Configure your environment variables (if necessary).
4. Start the Flask backend by running `python app.py` in the `server` directory.
5. Start the React development server by running `npm start` in the `client` directory.

## Usage

1. Access the web app in your browser by visiting `http://localhost:3000`.
2. Explore the listing page to view a table of countries.
3. Click on a country's name to access the details page.
4. Use the filters and sorting options to refine your search.



