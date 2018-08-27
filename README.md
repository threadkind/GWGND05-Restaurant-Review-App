# Restaurant Review App
In this project I was given a restaurant review website. The premise of the project is to convert this static website into a mobile-ready web application. This starting website lacks accessibility and is not mobile responsive. The project adds these features along with a service worker to cache resources to create an offline-first experience for users of the app.


## Motivation
This project was created as part of the Grow With Google Front End Web Developer Nanodegree Scholarship. This is Project 5 in the course.
Initial HTML, CSS & Javascript code was provided as part of the project and can be found at [github](https://github.com/udacity/mws-restaurant-stage-1).


## Getting Started
To view the app locally you can clone the repository to your computer.
[The link to the repository can be found here.](https://github.com/threadkind/GWGND05-Restaurant-Review-App)

You can download the app directly by clicking on the clone or download link on the repository page.

Alternatively, you can use the command line to clone to repository.
Make sure you have git installed on your system.
Navigate to the folder where you want to clone the repository using the command line terminal.
Then type:
```
git clone https://github.com/threadkind/GWGND05-Restaurant-Review-App.git
```
...and press enter.
This will create a local clone on your computer.

Navigate to the repository clone folder

In order to view the app, you will need to start up a simple HTTP server to serve up the site files on your local computer. Python has a simple HTTP server built in and is easy to use.

In the command line, make sure you have python installed.
To check this it will depend on which operating system you are using, but you can usually use either `python -v` or `py-v`.

If you don't have Python installed, you can download it at [Python's website](https://www.python.org/). Once downloaded you can install it on your system.

Note: If you are running Windows You may need to add Python to your path environment variable.

Once you have Python on your system you can use one of the following codes to run it depending on which version you have installed:
* `python -m SimpleHTTPServer 8000`
* `python3 -m http.server 8000`
* `p -m http.server 8000`

Note: You can also use a different port if 8000 is in use.

When the server is running, in the browser, navigate to `http://localhost:8000` to see the app.


## Features of the App
When you load the app there will be a map and a list of all the restaurants available to view.
The map is loaded using leaflet.js and Mapbox. The map shows all the restaurant locations.

There is a filter option form which enables the user to filter the restaurants by neighborhood and cuisine type.

For each of the restaurants, the name, neighborhood and address shows on the page along with an image for the restaurant. There is also a link to view more details about the restaurant.

When you click on the link to view more details, it takes you through to another page which has additional details about the restaurant.

The restaurant details page has breadcrumb links to get back to the home page, a map to show the locations of the restaurant, restaurant name and image, restaurant hours and also the reviews and rating of the restaurant.


### Accessibility
All pages feature a skip link to skip past the map on the page for accessibility for users who are unable to use the mouse and have to navigate using a keyboard. The page has a logical tab order and keyboard items are focusable. Headings don't skip levels.
Elements have semantic tags and the dropdowns have associated labels.
The orange color on the original app was changed to red to provide greater color contrast for users who have some degree of colour vision deficiency or who have more difficulty discerning colors.


### Responsive Web Design
The app is fully responsive. It is able to be used in any viewport, including desktop, tablet, and mobile displays.


### Progressive Web App
A service worker is included in the project to cache the resources to make them available offline and to make load times faster.
A manifest is also included in the app.


## Dependancies
This app is written in HTML, CSS & Javascript.
The app starting code was provided by Udacity as part of the Grow With Google Nanodegree program.
This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/).

The favicon for the page was downloaded from [favicon generator.](https://www.favicon-generator.org/search/---/Pizza)


## Author
Amy W