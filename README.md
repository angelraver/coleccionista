# base

Node express and vue site.
The express server will serve the compiled vue site from site from /vue/dist.

## Project setup

For express:
```
# npm
npm install

### Compiles and hot-reloads for development

```

Go to /vue where the vue site lives.
On developing work at /vue.

```
# npm
npm install

### Compiles and hot-reloads for development

```
# npm
npm run dev
```

### Compiles and minifies for production

```
# npm
npm run build
```

### Lints and fixes files

```
# npm
npm run lint
```

For relesing a new verson of the app firts run the deploy at /vue.
The go up `cd...` at the root of the proyect.
Then run the deploy to gcloud.
I will deploy the node express site and the compiled contents on /vue/dist.
This is the way to make the vue routes to work on the deploy plattaform.

### Deploy to G CLOUD
```
gcloud config set project coleccionista-web

gcloud app deploy

gcloud app logs tail -s coleccionista-web

gcloud app browse -s coleccionista-web

```

## Estructure
This frontend connects to the API Collector made in Go lang.
The uploaded images are saved at GCloud resources.

## IGDB
Some features use to the Internet Game Data Base API.


### Issues

If the autocomplet search for VideoGames does not work take a look to the collector golang project, it may be the IGDB (Internet Game Data Base) credentials are expired.