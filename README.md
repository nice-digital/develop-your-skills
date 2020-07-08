# Develop your skills

This application is a tool to help you identify skill development areas to plan your career aspirations.  The job roles and skill levels are based on the [Digital, Data and Technology profession capability framework](https://www.gov.uk/government/collections/digital-data-and-technology-profession-capability-framework).

Try it: [Develop your skills](https://nice-digital.github.com/develop-your-skills) or [view the framework](https://nice-digital.github.com/develop-your-skills#/framework)

## Why have we built this tool?
The is a proof of concept to test out in career development planning for our development team


## Technical stack

This app is build with

* React.js + bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
* React testing library
* [NICE Design system](https://github.com/nice-digital/nice-design-system)

## Skills data

Skills data is fetched on application startup.  The skills data URLs can be configured in the .env file at the top level.  Default configuration to fetch data from the [engineering repository](https://github.com/nice-digital/engineering/tree/master/skill-framework/skills).  Three files are fetched:
* skills.yml - collection of all levels of all skills, organised by skill (must be YAML and can contain markdown in the skill examples)
* roles.json - a collection of developer roles with associated skill levels (JSON)
* levels.json - a definition of the different levels use across all skills (JSON)

# Setup

## Installing dependencies

Some initial dependencies that you may need if you haven't got them already:
* Node.js
* Node Package Manager (NPM)

If you have just pulled down this code repository and have yet to run the app, you will need to install the dependencies:

`npm install`

## Available Scripts

In the project directory, you can run:

### Running the app

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Running tests

`npm test`

Launches the test runner in the interactive watch mode.  There are currently no tests for this! (To improve)
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### Deployment

`npm run deploy`

This app is configured to deploy to [https://nice-digital.github.com/develop-your-skills](a github hosted page)

