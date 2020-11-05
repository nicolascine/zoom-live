# Zoom live videos

The project consists of a simple site with a list of zoom sessions and a single page to view the session, there are some controls included like 'sort by duration' or 'filter by cost'.

Features:

- List zoom sessions
- Display session inside in a iframeplayer
- Filter & sort sessions
- Load images in 'Lazy load' mode to improve the performance

Links:

- Live version: https://zoom-live-videos.netlify.app/
- Project summary: https://github.com/nicolascine/zoom-live/projects/1

### Stack

- Typescript
- React
- Redux
- Redux-saga
- Bootstrap
- Styled-components

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Dev environment requirements

- Nodejs

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Directory structure

The idea of this structure, bassically is to organize the folders by pages and components (and children components if applies), also the redux artifacts are separated by domain (session, ui, etc).

```
├── build // transpiled files after build process
├── netlify.toml
├── package.json
├── public // static assets
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── common // common components
│   │   ├── layout // layout components
│   │   └── pages // pages componnets
│   ├── config
│   │   └── index.tsx // config constants values
│   ├── routes.tsx // routes configutarion
│   ├── services
│   │   ├── common
│   │   └── http
│   ├── store // redux implementation
│   │   ├── layout
│   │   └── sessions
│   │       ├── actions.ts // redux actions
│   │       ├── reducer.ts // redux reducers
│   │       ├── sagas.ts // sagas (async actions)
│   └── styles // SCSS styles folder
└── tsconfig.json
```

## Architecture

Basically the architecture consists of a redux model, using asynchronous actions through redux-saga

![diagram](https://raw.githubusercontent.com/nicolascine/zoom-live/main/public/diagram.jpg)

The store is divied into 'Layout' (work in progress) to manage the UI aspects, and 'Sessions', to manage the state of the session list and the filters.

#### State object

![diagram](https://raw.githubusercontent.com/nicolascine/zoom-live/main/public/state1.png)
The router is managed as a part of the state inside the store

#### Session object

![diagram](https://raw.githubusercontent.com/nicolascine/zoom-live/main/public/state2.png)

### Roadmap (Work in progress items)

- [ ] UI styles improvement
- [ ] Use Zoom SDK instead of the Video Iframe
- [ ] Unit tests
