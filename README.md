# Movie Watchlist

This is a React app that allows users to search for movies and add them to a watchlist. Users can also mark movies as watched and remove them from the 
watchlist.

# Live View
https://javad7899.github.io/react-movies-watchlist/

# App Gif
![watchlist](https://github.com/javad7899/react-movies-watchlist/assets/90629580/f9d56b5a-40d3-408b-8bbd-d6163127123e)

## Features
- Search TMDB for movies
- Add/remove movies to/from watchlist
- Mark movies as watched
- Uses Context API for state management
- Uses useReducer hook for state updates

## Usage

### Install Dependencies
```bash
npm install
```
### Run
```bash
npm start
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

## State Management

This app uses the Context API together with the useReducer hook for state management.

The GlobalState provides the watchlist state and dispatch method to components.

The AppReducer handles state updates based on action types

## Technologies
- React (Created with CRA)
- Context API for state management
- useReducer for state updates
- TMDB API for movie data
