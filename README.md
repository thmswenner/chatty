#Chatty
=====================

Chatty is a simple single-page web application that allows 2 or more people to communicate to each other threw websockets. This application uses: HTML, CSS, REACT, JAVASCRIPT, NODE.js & WEBSOCKETS.

!["Chatty main page"](https://github.com/thmswenner/chatty/blob/master/public/images/standard.png)
!["Conversation"](https://github.com/thmswenner/chatty/blob/master/public/images/conversation.png)

### Usage

Clone the boilerplate and create your own git repo.

```
git clone git@github.com:lighthouse-labs/react-simple-boilerplate.git
cd react-simple-boilerplate
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
