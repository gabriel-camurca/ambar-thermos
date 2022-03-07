## Thermos

# What is this project?

This project aims to create a simple interface for temperature checks.

You are able to choose a city to check it's current, minimum and maximum temperatures.

It serves as an implementation of a challenge for a developer position and has many requiriments; some of those are not present in this version as will be stated in the following section.

# How is this done?

First off, it should be discussed the technologies being used.

The original intent was for the whole application to use Redux-saga and Firebase, alongside an open API to fetch the data.

However, for this project, the use of Firebase was causing trouble and there was little time to master Redux-saga, so simple Redux was utilized instead.

So, whenever a button corresponding to the city is pressed, an API call is made to [the FCC Weather API](https://fcc-weather-api.glitch.me/) and the data is fetched and stored.

Then, the data is passed via props to the component responsible for showing the information on the same page.

It's also possible to click on a button to see the component on another page. This is used to integrate the Redux functionalities of saving information throughout the application.

Jest was originally meant to be used to test the application, however due to time contraints and problems with the library, it was not possible.

# How to run?

First, install all the dependencies

```npm install```

Then, simply run the application with npm or yarn

```npm start```
or
``` yarn start ```
