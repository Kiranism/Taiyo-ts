# Contact Management App with Maps and Charts

This is a contact management app built with ReactJS, TypeScript, TailwindCSS, React Router v6, and React Query. It includes features such as adding new contacts, displaying a list of contacts, editing and deleting contacts, and integrating charts and maps for COVID-19 data.

## Features

- Add new contacts using a form
- Display a list of all added contacts
- View contact details
- Edit and delete contacts
- Charts displaying COVID-19 cases fluctuations
- Map with markers showing country-specific COVID-19 data

## APIs

To fetch COVID-19 data for the charts and maps, the following APIs are used:

- World wide data of cases: `https://disease.sh/v3/covid-19/all`
- Country specific data of cases: `https://disease.sh/v3/covid-19/countries`
- Graph data for cases with date: `https://disease.sh/v3/covid-19/historical/all?lastdays=all`

Please ensure that you have a stable internet connection for the app to fetch the necessary data.

## Installation and Setup

1. Clone the repository or download the source code.
2. Install the dependencies by running `npm run dev`.
3. Start the development server with `npm run dev`.
4. Open your web browser and visit `http://localhost:5173`  to see the app.

## Tech Stack

- ReactJS
- TypeScript
- TailwindCSS
- React Router v6
- React Query
- ReChart
- React Leaflet



