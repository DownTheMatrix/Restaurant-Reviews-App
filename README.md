# Restaurant Reviews App

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

![App screenshot for tablet](https://github.com/DownTheMatrix/Restaurant-Reviews-App/blob/master/Screenshot.png?raw=true)

## How to run the App

1. Clone this repo to your local machine, or download the project as a .zip file
2. Don't alter the folder/files disposition
3. If you have Python installed, from the terminal run:

`python -m http.server` (for Python 3x)

`python -m SimpleHTTPServer` (for Python 2x)

Finally, move to the default address `http://localhost:8000`

Note: If you're using a code editor like **VS Code**, and have the live server extension installed, remember to change the port in the __`js/dbhelper.js`__ file to your live server port.

### Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). You need to put your token, namely, in __`main.js`__ and in __`restaurant_info.js`__.
Mapbox is free to use, and does not require any payment information. 

#### Audits

So far, this is how the app scored using Chrome Lighthouse: 

![Chrome Lighthouse results](https://github.com/DownTheMatrix/Restaurant-Reviews-App/blob/master/Audit.png?raw=true)

There is certainly room for improvement (see Todos below).

##### Todos

1. Add intersectionObserver to improve performance
2. Optimize image format
3. Reduce render-blocking stylesheets



