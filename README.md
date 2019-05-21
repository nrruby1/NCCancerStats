# Visualization of North Carolina Cancer Mortality and Vital Statistics

Authors: McRae Massey and Nick Ruby

Computer Science capstone project from Western Carolina University.

This project is a web application for the interactive comparison and displaying of cancer and population statistics from North Carolina. By using tables and graphs, this application allows for comparison of selected statistics by county, year, and type. The application also has an interactive county map of North Carolina to display certain statistics.

The web application was built using [Angular 7](https://angular.io/). The database is [MongoDB](https://www.mongodb.com/) hosted on [Amazon Web Services](https://aws.amazon.com/). The graphs are generated using [canvasJS](https://canvasjs.com/). The map is displayed using [mapbox](https://www.mapbox.com/) and updated using [GeoJSON](https://geojson.org/). The [cancer](https://schs.dph.ncdhhs.gov/data/cancer.cfm) and [population](https://schs.dph.ncdhhs.gov/data/vital.cfm) statistics were provided from the NC Department of Health and Human Services website.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Screenshots 

Map Screen:
![map](https://github.com/nrruby1/NCCancerStats/blob/master/map%20screen%20screenshot.PNG)

Graph:
![graph](https://github.com/nrruby1/NCCancerStats/blob/master/graph%20screenshot.PNG)

Raw Statistics Screen:
![stats](https://github.com/nrruby1/NCCancerStats/blob/master/raw%20stats%20screen%20screenshot.PNG)

## To Run

1. Run `npm install --save-dev @angular-devkit/build-angular` to get the angular devkit (it might take a while)
2. Navigate into `api/`. Run `npm start`. Leave window running or run in background.
3. Run `ng build` to build the project.
4. Run `ng serve --open` for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/) in the browser. The app will automatically reload if you change any of the source files.

*In order for the graphs to generate properly you must get a canvasjs key (we used the free student version which is only good for 1 user)*

## Node.js server

Navigate into `api/`. Run `npm start`. This server connects to the cloud-based MongoDB database.

## Development server

Run `ng serve --open` for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/) in the browser. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
