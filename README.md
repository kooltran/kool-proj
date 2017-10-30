# Starter build template for Ekino F-E Development

> Starter seed for Ekino F-E development using [bower](https://bower.io), [Gulp](http://gulpjs.com), [Sass](http://sass-lang.com), [Jade](http://jade-lang.com), [Babel](https://babeljs.io)

___


## Table of Contents
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
* [Commands](#codeommands)

## File Structure

```
ekino.vn-boilerplate-gulp-html/
 ├──gulp/                       * Gulp task definitions and configuration
 │
 ├──src/                        * Source directory
 │   ├──assets/
 │   │   ├──img/                * contains the images
 │   │   │
 │   │   ├──js/                 * contains the js files
 │   │   │
 │   │   └──scss/               * contains the Sass
 │   │       ├──common/         * various common Sass files
 │   │       │  ├──_bootstrap   * import of Bootstrap componentns from vendor directory
 │   │       │  ├──_general     * file for global styles (body, heading, links, etc..)
 │   │       │  ├──_mixins      * custom mixins
 │   │       │  └──_variables   * definitions of variables. This is also where you override Bootstrap variables
 │   │       │
 │   │       └──app.scss        * Main Sass file
 │   │
 │   ├──root/                   * Files that will be copied to the root of the build directory
 │   │
 │   ├──tmpl/                   * contains the Jade fragments and layout
 │   │
 │   └──index.pug               * Jade index file
 └──*.*                         * Various config files, should not be touched

```

## Getting Started
### Dependencies
What you need to run the App
* `node` version 4+
* `gulp`
* `sass`
* `bower`
* `yarn`

### Installing
* `fork` this repo
* `clone` your fork
* `npm install` or `yarn install` install dependencies
* `gulp` run the app and serves on [http://localhost:3000/](http://localhost:3000/)

## Commands
1. `Gulp`: default task for development. Lauch a httpserver on `localhost:3000`. Then launch the watcher to auto-compile sass files and include/replace the partials in html files.
2. `Gulp validate`: validate JS and CSS sources using eslint an csslint. Validate W3C compliance using html validation plugin. Execute Jasmine Unit Test using phantomJS
3. `Gulp build`: build everything in the build dir + 1 + 2 (without watcher)
4. `Gulp compile`: 3 + concate, minify files in the compile directoy
5. `Gulp delivery`: 4 + create a zip for delivery
6. `Gulp deploy`: 4 + rsync the content of the compile folder to the dev server (to be set up)
