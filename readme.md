# Make-a-websumé

## Introduction

So, you want to create your own websumé?  

### _Technologies and Languages_

Tools|Description
-----|-----------
[Webstorm](https://www.jetbrains.com/webstorm/)|IDE for javascript. Get a free student version [here](https://www.jetbrains.com/student/)!
[Javascript (ES6)](http://es6-features.org/)|Programming language
[npm (from node.js)](https://nodejs.org/en/)|Package manager
[git](https://git-scm.com/)|Version control

Libraries | Description
-----------|------------
[React](https://facebook.github.io/react/)|Javascript library for building user interfaces
[Bootstrap](http://getbootstrap.com/)|Styling webpages

##  Get Started

### _Installation_

1. Install Webstorm and NodeJS using the links above
2. Create a project folder, and remember the path to the folder
3. Open up your command prompt (terminal for mac users!) and type the following command
`cd <folder>`, replacing `<folder>` with the path of the project folder you just created
<br>_(or, you could press alt+f12 in Webstorm - it'll open an embedded terminal window set to the project folder!)_
4. Now, we are going to initialize the Node project. Run the following command in your command prompt: `npm init -f`
<br>_(the `-f` flag creates the project with default settings!)_
5. Next, we're going to install the libraries our websumé uses. Run the following command in your command prompt: `npm install --save react react-dom webpack html-webpack-plugin react-bootstrap`
<br> _(the --save flag ensures that the libraries are saved to your package.json file)_
6. Last step! We'll be installing the libraries used to develop the websumé. Run the following command in your command prompt: `npm install --save-dev webpack-dev-server babel-loader babel-core babel-preset-es2015 babel-preset-react`
<br> _(difference: you don't have to send the dev libraries to the person using the application)_

### _Configuration_

Now, we'll be adding configuration files to the project folder. To do that, right click your project folder in Webstorm, and select New > File. Then, for each of the files below, copy the code below into the newly created file.

__index.html__
~~~~
<!DOCTYPE html>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
<html>
<head>
   <meta charset="utf-8">
   <title>YOURNAME</title>
</head>
<body>
<div id="root"></div>
</body>
</html>
~~~~

__.babelrc__
~~~~
{
 "presets":[
   "es2015", "react"
 ]
}
~~~~

__index.js__
~~~~
// ./index.js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
   <h1>Hello, world!</h1>,
   document.getElementById('root')
);
~~~~

__webpack.config.js__
~~~~
// ./webpack.config.js
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
   template: './index.html',
   filename: 'index.html',
   inject: 'body'
})

module.exports = {
   entry: './index.js',
   output: {
       path: path.resolve('dist'),
       filename: 'index_bundle.js'
   },
   module: {
       loaders: [
           { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
           { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
       ]
   },
   plugins: [HtmlWebpackPluginConfig]
}
~~~~

Lastly, we will be editing __package.json__. Place the following line of code under scripts.<br/>
`,"start": "webpack-dev-server --hot --open`<br/>

It should look something like this:
~~~~
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    ,"start": "webpack-dev-server --hot --open"
  },
~~~~


After adding these files, your directory structure should look something like this
> project
> <br/>|- node_modules/
> <br/>|- .babelrc
> <br/>|- index.html
> <br/>|- index.js
> <br/>|- package.json
> <br/>|- webpack.config.js

So, what did we just add to our project folder?

`node_modules` contains all the libraries (and their dependencies) we installed using `npm install ..`

`.babelrc` is the configuration file for Babel. Babel allows us to transpile ES6 syntax into the Javascript syntax used in web browsers such as Chrome or Firefox

`index.html` is the first page that is loaded when users visit our websumé. Also known as the "entry point" of the application

`package.json` is the configuration file for NodeJS

`webpack.config.js` is te configuration file for Webpack. Webpack is a module bundler, allowing us to pull code from different files together.

## Hello World

Remember our old friend, the command prompt? Run the following command to start the application: `npm start`

## Deploying to Firebase

### _What is Firebase?_

Firebase is a mobile and web development platform developed by Google. Firebase has multiple features such as website hosting, database hosting, cloud storage etc.

In this section, we will be looking at how we can use Firebase to host our application.

### _Configuration

First, register for an account at the [Firebase site](https://firebase.google.com). Then, head on over to the Firebase Console, and add a new project.

### _Installation_

Now, we're going to install the Firebase library for our application. In your terminal, run the following command:
`npm install -g firebase-tools`

After the installation has finished, log into your Google account with the following command: `firebase login`

Next, we're going to initialize the Firebase library. Run `firebase init`, and accept the default configurations.

Now, we can run `firebase serve`, to check if Firebase is properly working (open http://localhost:5000 in your browser!), or `firebase deploy` to deploy the application to the interwebs.

### Linking Firebase and Webpack

If you ran the previous `firebase serve` or `firebase deploy` commands, you'll notice that Firebase displays a default page, instead of your application. To do so, we need to combine Webpack and Firebase.

Firstly, add the following line of code to the scripts in __package.json__: `"build": "webpack"`

Your scripts should look something like this:
~~~~
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --hot --open",
    "build": "webpack"
  },
~~~~

Now, update hosting in __firebase.json__ with the following line of code: `"public": "./dist",`

In your terminal, run `npm run build`. A new subfolder called __dist__ should be in your project folder, and it should contain two files, __index.html__ and __index_bundle.js__

## Using Firebase DB
`npm install --save firebase reactfire`

__index.html__ - line 4 (below the Bootstrap stylesheet import)
~~~~
<!-- React -->
<script src="https://fb.me/react-15.3.0.min.js"></script>
<script src="https://fb.me/react-dom-15.3.0.min.js"></script>

<!-- Firebase -->
<script src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js"></script>

<!-- ReactFire -->
<script src="https://cdn.firebase.com/libs/reactfire/1.0.0/reactfire.min.js"></script>
~~~~
