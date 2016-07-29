# NYPL Footer

This repository is the footer component for the ReactJS applications of nypl.org.

### Version
0.2.3

### Installation
Install all dependencies listed under package.json
```sh
$ npm install
```

### Development Mode
We use Webpack to fire off a hot-reloading development server. This allows for continuous code changes without the need to refresh your browser.

```sh
$ npm start // Starts localhost:3000 defaulting to NODE_ENV=development
```

You can also set the NODE_ENV variable which dictates what API environment to use as the main source.
```sh
$ NODE_ENV=development|qa|production npm start // Starts localhost:3000 with set NODE_ENV
```

### Production Mode
We use Webpack to fire off a production server.

```sh
$ npm run babel-build // Builds dist path & files
$ NODE_ENV=production npm start // Starts localhost:3000 with set NODE_ENV
```

Contributors
----
NYPL Digital Experience