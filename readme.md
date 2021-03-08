# Interview practical test

## Setup

You'll need to have [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) and a code editor like [Visual Studio Code](https://code.visualstudio.com/) installed.

Clone this project using git.

Install NPM modules with `npm install`

Run the project with `npm start`

## Instructions

The aim of this task is to produce a profile listing component that uses the [RandomUser](https://randomuser.me/) API.

**Requirements:**

- On page load, 10 random profiles showing their avatar and name should be listed. (This is completed. currently getting 10 random users however, on the page load, the users will stay same as I have used "seed=" in the url as query string to generate the same set of users from the API)

- These profiles can be filtered by their name with a text input box. (This is completed. If user input is empty shows all of the data, and then it converts the user's first name to lowercase then checks if it includes in filterString text as lowercase. I've used onTextChange in class component and onChange in functional component just to show you that we can use both. we can also use other options onKeyUp, etc but I believe the best one in this case will be onTextChange and onChange)

- When clicking one of the profile items, this needs to take the user to a new page or open a pop-up modal, that gives more details about the person they have clicked on. (This is completed. I am parsing the data to query string then using them in the profile page by accessing the data in location.search)


- It needs to match the designs given, be responsive, and use the assets provided.(This is completed, I have used more than one options when using styled component to show that we can use alternative ways. We can also use if statements if needed. I have also showed that we can change the size of the SVG files more than one way. Such as; from SVG file, by overwriting from inline CSS or etc.)

- Only needs to work in Chrome.

## Submission

Once complete, push them up to a repository you've created on a git hosting platform of your choice. We will discuss the task and take a look at your submission in your interview.

## Designs

You can find the designs in the `/designs` folder.

## Create component/requirements

You should create your component(s) in the components folder located in `/src/app/components`.

You can show the profile details on a new page using React Router, in which you just need to add a new route to the `routes.js` file located in `/src/core/routing/`. Or create a pop-up model to show the data if you don't wish to use React router.

You should use Styled Components for styling your components. You can find documentation for Styled Components [here]( https://styled-components.com/).

## API

You should use the RandomUser API for this task. No signup or auth token is required. You can find the documentation for the API here https://randomuser.me/documentation.

## Assets

You can find the assets in the `/public` folder. Webpack has been already set up for you with [file-loader](https://webpack.js.org/loaders/file-loader/) for images and [SVGR](https://github.com/gregberge/svgr) for SVG's. If you need an example, the `Example` component shows how you would import and use images and SVG's. 

## Have a question or issue?

Submit a new issue in the issue tracker [here](https://gitlab.com/solent-university/public/solent-interview-project/-/issues).
