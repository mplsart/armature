# MPLSART.COM - Armature
Common React Components & Style Guide for MPLSART


## Documentation
This repository also contains the documentation & style guide. View docs at **[https://mplsart.github.io/armature/](https://mplsart.github.io/armature/)**

This library is consumed by:
* [mplsart-web](https://github.com/blainegarrett/mplsart-web) (the public repo)
* [admin](https://github.com/blainegarrett/mplsart-admin) (the public repo)
* [web](https://github.com/mplsart/web) (experimental gen 2 public website)

### Developing
Development of this repository is typically done in  with a consuming repo.

This can be done via:
`npm install ../armature`

To get the latest changes, run `npm run build`

** Note: ** Be sure to uninstall before deploying.


### Developing Docs Locally
Documentation uses NextJS to support documentation.

`npm make build`

### Building and Deploying Documentation
The process of building the docs and publishing them involves building, exporting, and then committing and pushing the generated code to the `gh-pages` of the armature repository.

This is abstracted into the following commands:

`npm run export` - generates static files to ./out

`npm make deploy` - commits & pushes the static files to `gh-pages` branch and publishes them

**Note:** If you add new pages (url routes) to the you will need to add the routes to `.next.config.js` for the export to pick up the route

# Other Stuff
http://justjs.com/posts/npm-link-developing-your-own-npm-modules-without-tears
src/index.js -> dist/index.js
/usr/local/lib/node_modules/armature -> /Users/blainegarrett/sites/mplsart/armature


