# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Introduction

* Application basically is a React front end UI which will render a blog page. The blog page data will be fetched from a node backend hosted on Heroku (https://backend-for-react-blog-render.herokuapp.com). 
   
* Deployment
  * Application is hosted on Vercel
  * Live demo can be seen here : (https://11-react-blog-rendering.vercel.app/)
 

* The application UI contains following sections

  1. Navigation links with logo
  2. Footer with social media icons and navigation links
  3. Home Page with all tiles of each blog.
  
 ## Features
  1. Fully responsive
  2. Upon clicking on a single blog tile the application UI will rerender to display the blog details.

      1. Blog heading
      2. Blog content
      3. Blog banner image
      4. Aside section with related links
    
  2. Upon clicking a link in the related link section of a Blog, the web page rerenders the details and display the details of the blog whose link was clicked. 

### New Concepts used
   1. history object
   2. withRouter from "react-router-dom"
   3. conditional rendering
   4. Learned how to handle routing when component is not changing but only the params in url are changing and still render the page using Link 
