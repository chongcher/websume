# Make-a-websumé

[![Join the chat at https://gitter.im/websume/Lobby](https://badges.gitter.im/websume/Lobby.svg)](https://gitter.im/websume/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Introduction

So, you want to learn how create your own website? At the end of this tutorial, you will have learnt how to set up your own webpage, and use it to create a [websumé](https://chongcher.com/)!

### _Technologies and Languages_

Tools|Description
-----|-----------
[Webstorm](https://www.jetbrains.com/webstorm/)|IDE for Javascript. Get a free student version [here](https://www.jetbrains.com/student/)! <br/>_(You may use any IDE that supports JSX - [Atom](https://atom.io/) with the [Atom React plugin](https://orktes.github.io/atom-react/#jsx-reformatting) is a good choice for those without a student email!)_
[Javascript (ES6)](http://es6-features.org/)|Programming language
[npm (from node.js)](https://nodejs.org/en/)|Package manager
[git](https://git-scm.com/)|Version control

Libraries | Description
-----------|------------
[React](https://facebook.github.io/react/)|Javascript library for building user interfaces
[Bootstrap](http://getbootstrap.com/)|Styling webpages

##  Get Started

### _Installation_

1. Install your preferred IDE as well as NodeJS using the links above
2. Create a project folder, and remember the where you created the folder directory! _(Also known as the folder's __path__)_
3. Open up your command prompt (terminal for mac users!) and type the following command
`cd <folder>`, replacing `<folder>` with the path of the project folder you just created
<br>_(or, you could press alt+f12 in Webstorm - this opens an embedded terminal window set to the project folder!)_
4. Now, we are going to initialize the Node project. Run the following command in your command prompt: `npm init -f`
<br>_(the `-f` flag creates the project with default settings!)_
5. Next, we're going to install the libraries our websumé uses. _(Libraries are code that have been written by other people, and allows us to skip most of the boring stuff.)_ Run the following command in your command prompt: `npm install --save react react-dom webpack html-webpack-plugin react-bootstrap`
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

### _Configuration_

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

Now, run `firebase deploy`. Firebase will grab the two files in __dist__, and load them when you go to your project's Firebase site.

### _Creating our first webpage_

In this section, we'll be creating our application's landing page. Currently, `index.html` is displayed when we go to the application, which then loads the content in `index.js`. We will be creating a __React__ component, and placing it into `index.js` to be displayed (also known as _rendering_).

Go to line 6 of `index.js`, and replace `<h1>Hello, world</h1>,` with the following code.
~~~~
<div className="row">
    <Navbar bsStyle="inverse" style={{margin: '0 0 1vh 0', width: '100vw'}}>
        <Nav>
            <NavItem>hello</NavItem>
            <NavItem>there!</NavItem>
        </Nav>
    </Navbar>
</div>
~~~~

The angular brackets (< and >) are known as __tags__, and in our case, may contain either HTML code or indicate a __React__ component. A quick (but not foolproof) way to tell the difference between the two is to look at the capitalization of the tags; HTML tags are usually in lowercase, while React components are typically CamelCased.

The first line `<div className="row">` tells the browser that we want to create a [HTML div](https://www.w3schools.com/tags/tag_div.asp), with the className _row_. A div(ider) is typically used to hold some content within a web page. The _row_ classname is used by __Bootstrap__ to add style to the div.
 
 In the following line, we have `<Navbar bsStyle="inverse" style={{margin: '0 0 1vh 0', width: '100vw'}}>`. This tells the browser that we want to display a __React__ component called `Navbar`. However, we have never told the browser where where `Navbar` is located, so how does it know?
 
 Well, run `npm start` now, and open your browser console _(press f12 for Windows users, or alt+cmd+i for Mac users)_. You will see the following error message: `Uncaught ReferenceError: Navbar is not defined`. 
 
 Luckily for us, we have already installed a library that defines `Navbar` for us. On the fourth line of `index.js`, add the following line: `import { Navbar, Nav, NavItem } from 'react-bootstrap'`. This lets the browser know, that `Navbar`, `Nav` and `NavItem` components can be found in the `react-bootstrap` library we installed previously. Save your changes, and wait for Webpack to recompile the edited code, after which the browser should display a black navbar.
 
 ### _Creating our first component_
 
 Now, you may notice that adding all the code we need to `index.js` will eventually lead to an extremely long file. This is __not good__; generally, you want your code to be modular and easily understandable. 
 
 To do this, we will have to create our custom React components. First, create a new folder in your project folder. You can name this folder anything you want, but I choose the name `scenes` as it will contain all the different scenes of the web application.
 
 Inside this folder, create a new file called `main.jsx`. This will be the main page the browser loads when the web application is opened. Copy the following code into `main.jsx`.
 ~~~~
 import React from 'react';
 import { Navbar, Nav, NavItem } from 'react-bootstrap';
 
 
 export default class Main extends React.Component {
    
    constructor(super) {
        super(props);
    }
    
    render() {
        return (
            <div className="row">
                <Navbar bsStyle="inverse" style={{margin: '0 0 1vh 0', width: '100vw'}}>
                    <Nav>
                        <NavItem>hello</NavItem>
                        <NavItem>there!</NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
    
 }
 ~~~~
 
 Wow! Many new commands in there. Read the following section if you want to find out what they mean, or skip to the one after that to continue building your application.  
 
 ***
 Firstly, we are creating a new _class_ object called `Main`. This object _extends_ the code in React's Component class (i.e. it adds our code to the code already provided by React - this lets us focus on the things that make our component unique, and ignore the boring part). This object requires a _constructor_ method, which is some code that is called to create the object. 
 
 The `props` within the brackets are known as the _method arguments_, which are provided to the method when it runs. `super(props)` means that we are using the `constructor` method in React's Component class instead of writing our own method. 
 
 The `render` method is what React uses to determine what it should tell the browser to display. Inside it, we `return` the HTML code we want to see. 
 ***
 
 You may have noticed that the code within the `render` method in `main.jsx` is similar to the one in `index.js`. This means that we can simplify the code in `index.js` with `main.jsx`!
 
Try importing `main.jsx` into `index.js`. You should have something similar to the following code.

~~~~
// ./index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './scenes/main.jsx';

ReactDOM.render(
   <Main/>,
   document.getElementById('root')
);
~~~~

Notice that we remove the `Navbar`, `Nav` and `NavItem` imports as we no longer require them. Run npm start again, and you should be able to see your web application!

### _What's next?_

This ends our short _(heh)_ tutorial into creating your own web application! If you're interested to learn more, feel free to 
* __Sign up for Project PHalcon!__
* Read the code in the github repository to see how it works
* Post on our [Gitter](https://gitter.im/websume/Lobby) if you have any questions
* Try the [React tutorial](https://facebook.github.io/react/tutorial/tutorial.html)

So long, and thanks for all the fish!