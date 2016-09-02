# 2016-06-greenfield

## What is Quest?
Quest sends you on a mission to take pictures and collect points. You can also see other pictures taken around you.

## Team
1. Pyry Kovanen
2. Vincent Huang
3. Leah Loversky
4. Zohar Sanchez

## Setup
### Requirements for iOS
Xcode is needed for running this app on iOS
### Starting React Native
  - Quest can be started in Xcode by pressing the play button
  - Quest can also be started through the command line by running npm start.  In a new tab run react-native run-ios to open up Simulator.

### Firebase
  - A firebase project is needed to add credentials into an environment file

## Database
The database is hosted on Firebase, which can be accessed with the API key.
- Firebase has extensive API documentation at: https://firebase.google.com/docs/reference/js/

### Authentication
Authentication is hosted on firebase
- Firebase has extensive API documentation at: https://firebase.google.com/docs/reference/js/

## Quest Features
- Players receive 20 randomly generated tags and are tasked to take pictures that contain one or more of the tags. For example if given the tags dog, brown and window, a user would receive the maximum points if he takes a picture containing a brown dog and a window.
- Users can use Quest to drop artifacts wherever they go. Artifacts are images or messages that are tracked by geolocation.
- Images can be taken within the app or chosen from the user's camera roll.
- A user will be able to view their past artifacts in their user profile, and discover nearby artifacts using the map or list view.
