# Blackfoot Research Project

The Blackfoot Research Project is a University of Lethbridge Research Project that aims to take Traditional non-sacred Blackfoot artifacts out of the museum, and place them in your browser instead.

## Table of contents

- [General Info](#general-info)
- [Getting Started](#getting-started)
- [Code Examples](#code-examples)<!-- - [Deployment](#deployment) -->
- [Built With](#built-with)
- [Learn More](#learn-more)<!-- - [Contributing](#contributing) -->
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## General Info

At the heart of this project is the Blackfoot principle that we have a responsibility to care for and share knowledge. The Blackfoot Research Project aims to create a collection of detailed non-sacred historical Blackfoot objects, that have been housed in British museums for years. These artifacts have been seperated from Blackfoot people, and their culture for far too long. Advised by a group of Blackfoot Elders, our University of Lethbridge research team aims to return these historical objects to the Blackfoot in an interactive website that will allow them to have experiences with these artifacts that would otherwise be impossible.

![Explainer](./img/screenshot.png)

### Features

- View high quality scans non-sacred Blackfoot artifacts in the comfort of your home.
- Interact with maps to learn about Blackfoot lands.
- Explore Blackfoot history.
- And more...

### Screenshots

![Example screenshot](./img/screenshot.png)

### Status

**Project is:** In Development.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

#### Node.js

To install Node.js visit the link found [here](https://nodejs.org/en/download/).<br/>
For help getting started with Node.js, please see [their documentation](https://nodejs.org/en/docs/).<br/>

### Installing

#### Step 1: Download the repository.

##### Option 1: Clone the repository using git.

Navigate to an empty folder (where you want the project) on your machine and run the following command:

```
git clone https://github.com/CalvinLloyd117/BlackfootProject.git
```

or run:

```
git clone https://github.com/CalvinLloyd117/BlackfootProject.git <path/to/your/chosen/directory>
```

##### Option 2: Download the repository directly.

1.  Click the green 'Clone or download' button.
2.  Click 'Download ZIP'.
3.  Extract the ZIP to your chosen directory.

#### Step 2: Install dependencies.

1. Navigate to the project's home directory.
   - This directory should contain a file called package.json.
2. Run the following command:

   ```
   npm install
   ```

### Once Installed

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

<!-- ### Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```

Give an example

``` -->

## Code Examples and Tutorials

### Adding a New Artifact

The website will dynamically populate based on each artifact included. This process should not require changes to be made to any of the website's core code. Of course, the website is a work in progress, and therefore the process for adding additional artifacts to the site, as well as the formatting of the artifact's JavaScript Object is subject to change.

#### Finding the _Artifacts_ Folder

First, navigate to the home directory of the website. Inside the home directory, you will see the _src_ folder. The Artifacts folder is found inside the _src_ folder.

#### Artifacts Folder Structure

Everything about an artifact is contained within in a single folder dedicated to that artifact. Within the _Artifacts_ folder, you will find a series of folders, each with a name related to the artifact contained within, in CamelCase.

Inside each individual artifact folder, you will find a folder called _Model_. This _Model_ folder contains the artifact's files related to it's 3D model. This includes the artifact's .glb and/or .gltf files, as well as the various icons needed to display that artifact.

In addition to a _Model_ folder, you will also see a file called _Model_.js, where _Model_ is the name of the artifact in question. This file contains the JavaScript Object code that defines the artifact, including its name, description, map information, hotspot declarations, and other related information.

Inside the _Artifacts_ folder, you will also find a folder called _Template_, which we will use to add a new artifact to the system.

#### Creating a New Artifact

Creating a new Artifact for the website is quite simple. React will handle the bulk of the work, but we still have to define the artifact for it to add. Following these steps will create a new artifact for the website.

**Note: The _Template_ artifact is actually already defined as a working artifact, and can therefore be added to the system as-is. However, the data contained within the Template is all place-holder information. This should help to allieviate any difficulty in creating and adding an artifact.**

1. Inside the _Artifacts_ folder, copy the _Template_ folder and paste it back into the Artifacts folder. Rename this newly copied folder to the name of the artifact you wish to create in CamelCase.

   **Note:** For the purposes of this tutorial, this newly renamed folder shall be reffered to as **_NewArtifact_**. You will replace instances of _NewArtifact_ with whatever the new artifact is called. For example **_AncientBelt_**.

   **Note:** If you wish to verify that the new artifact template is functional, see [Adding your Artifact to the System](#adding-your-artifact-to-the-system).

2. Place the 3D model (and dependencies if .gltf format is used) for your artifact inside of the _Model_ Folder found within the _NewArtifact_ folder. This 3D model must be in either .glb or .gltf formats. To alieviate any confusion, follow the _NewArtifact_ naming scheme here. For example _NewArtifact.glb_. Place any icons or thumbnails you will be using to represent your artifact inside of Model as well. Any standard image format should do.

3. Inside the _NewArtifact_ folder, rename _Template.js_ to _NewArtifact.js_

4. Open _NewArtifact.js_ using your favorite text editor, or IDE.
   a. Once open, you will see a JavaScript Object which defines the artifact. If you are not familiar with JavaScript Object notation, do not be afraid. The structure found here is much simpler than it looks. This Object is entirely filled out with placeholders at the moment, and all you need to do is replace them with the relevant information for your artifact.

5. Replace placeholder information by following these steps:

   a. Change the import for the 3D model from:

   ```
   import Model from "./Model/Template.glb";
   ```

   to

   ```
   import Model from "./Model/NewArtifact.glb";
   ```

   b. Change the Import for Icon from:

   ```
   import Icon from "./Model/TemplateIcon.png";
   ```

   to

   ```
   import Icon from "./Model/NewArtifactIcon.png";
   ```

   c. Change the export statement from:

   ```
   export const Template = {
      .
      .
      .
   ```

   to

   ```
   export const NewArtifact = {
      .
      .
      .
   ```

   d. Change the name of the artifact from:

   ```
   name: "Template",
   ```

   to

   ```
   name: "NewArtifact",
   ```

   **Note:** The name of the artifact in quotes is allowed to have spaces (Ex. `name: "New Artifact",` Ex2. `name: "Ancient Belt",`).

6. Add all relevant hotspots to the artifacts if applicable. If this artifact has no hotspots, skip to step 7.

   a. Inside of the _NewArtifact_ JavaScript Object, you will find:

   ```
   Model: {
      mdl: Model,
      icon: Icon,
      hotspots: [],
   },
   ```

   b. For each Hotspot you want to add to the artifact, copy the following hotspot declatation template:

   ```
   {
     name: "Hotspot Name",
     dataPosition: "Xm Ym Zm",
     dataNormal: "Xm Ym Zm",
     content: "Information describing Hotspot",
   },
   ```

   And Paste the above template into `hotspots: [],` as follows:

   ```
   Model: {
     mdl: Model,
     icon: Icon,
     hotspots: [
        {
           name: "Hotspot Name",
           dataPosition: "Xm Ym Zm",
           dataNormal: "Xm Ym Zm",
           content: "Information describing Hotspot",
        },
     ],
   },
   ```

   c. For each hotspot you wish to add, make the following alterations to the hotspot template:

   change:

   ```
   name: "Hotspot Name",
   ```

   to:

   ```
   name: "Whatever you want to call the hotspot.",
   ```

   _Note:_ The hotspot name does not appear anywhere on the site for users to see, but is utilized by the code, and is visible in the DOM.

   change:

   ```
   dataPosition: "Xm Ym Zm",
   ```

   Such that:

   - `X` is set to the X coordinate (in meters) for the hotspot location.

   - `Y` is set to the Y coordinate (in meters) for the hotspot location.

   - `Z` is set to the Z coordinate (in meters) for the hotspot location.

   change:

   ```
   dataNormal: "Xm Ym Zm",
   ```

   Such that:

   - `X` is set to the X normal (in meters) for the hotspot location.

   - `Y` is set to the Y normal (in meters) for the hotspot location.

   - `Z` is set to the Z normal (in meters) for the hotspot location.

   **Note:** Finding the _dataPosition_ and the _dataNormal_ for a hotspot can be tricky, and can require some trial and error to get positioned and oriented correctly. To help with the process of adding hotspots, the developers of Google's Model-Viewer have given us a helpful tool for finding the values for _dataPosition_ and _dataNormal_. That tool can be found [here](https://modelviewer.dev/examples/tester.html). Simply upload your model to the site, select the _Add Hotspot_ button, and click the 3D model where the hotspot belongs. The values for _dataPosition_ and _dataNormal_ are generated by the site, and displayed to you when the hotspot is clicked.

   change:

   ```
   content: "Information describing Hotspot",
   ```

   to:

   ```
   content: "The actual information for the hotspot. ",
   ```

   d. Repeat step 5.a through 5.c for every hotspot you wish to add to the artifact's model. When you are done, you should have a _Model_ object that looks something like:

   ```
   Model: {
      mdl: Model,
      icon: Icon,
      hotspots: [
         {
            name: "Hotspot 1",
            dataPosition: "-0.18607953164141378m 0.17541244358931224m 0.5m",
            dataNormal: "0m 0m 1m",
            content: "Information describing Hotspot 1",
         },
         {
            name: "Hotspot 2",
            dataPosition: "0.3156754317937271m -0.3537557368692759m 0.4999999999999998m",
            dataNormal: "0m 0m 1m",
            content: "Information describing Hotspot 2",
         },
         .
         .
         .
      ],
   },
   ```

7. Fill in the description for _NewArtifact_.

   a. Inside the JavaScript Object for _NewArtifact_ you will find the following:

   ```
   description: [
      {
         initialDescription:
            "Initial description Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quo quam enim nihil obcaecati modi    sed dignissimos accusamus vero. Expedita culpa possimus deleniti dolorem quibusdam. Sed, libero quo illo asperiores amet consequatur eum error repudiandae est perspiciatis quidem veniam quasi tenetur sunt harum odit tempore voluptatibus nihil aliquam reiciendis. Temporibus?",
      },
      {
         title: "Provenance",
         content:
            "Provenance content Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus iste possimus maiores tenetur molestias, alias quibusdam repellendus dicta error, labore sed? Laborum autem facere vel cupiditate quas eius itaque, eaque suscipit. Quas dolore impedit voluptatibus quibusdam, sit atque neque officiis autem vero nam voluptatem totam eum ullam nihil maiores!",
      },
      {
         title: "Historical Context",
         content:
            "Historical Context Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus iste possimus maiores tenetur molestias, alias quibusdam repellendus dicta error, labore sed? Laborum autem facere vel cupiditate quas eius itaque, eaque suscipit. Quas dolore impedit voluptatibus quibusdam, sit atque neque officiis autem vero nam voluptatem totam eum ullam nihil maiores!",
      },
      {
         title: "Cultural Context",
         content:
            "Cultural Context Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus iste possimus maiores tenetur molestias, alias quibusdam repellendus dicta error, labore sed? Laborum autem facere vel cupiditate quas eius itaque, eaque suscipit. Quas dolore impedit voluptatibus quibusdam, sit atque neque officiis autem vero nam voluptatem totam eum ullam nihil maiores!",
      },
      {
         title: "Location Details",
         content:
            "Location Details Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus iste possimus maiores tenetur molestias, alias quibusdam repellendus dicta error, labore sed? Laborum autem facere vel cupiditate quas eius itaque, eaque suscipit. Quas dolore impedit voluptatibus quibusdam, sit atque neque officiis autem vero nam voluptatem totam eum ullam nihil maiores!",
      },
      {
         title: "Related Objects",
         content: ["Beading", "Deerhide"],
      },
   ],
   ```

   This is the default format for an artifact's description. With the exception of _initialDescription_, each section follows the same format.

   b. Replace the lorem ipsem `initialDescription` text block with the artifact's initial description text. This is the first text that the users sees when browsing an artifact's story page.

   c. For each of:

   ```
   {
      title: "Provenance",
      content:
      "Provenance content Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus iste possimus maiores tenetur molestias, alias quibusdam repellendus dicta error, labore sed? Laborum autem facere vel cupiditate quas eius itaque, eaque suscipit. Quas dolore impedit voluptatibus quibusdam, sit atque neque officiis autem vero nam voluptatem totam eum ullam nihil maiores!",
   },
   {
      title: "Historical Context",
      content:
         "Historical Context Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus iste possimus maiores tenetur molestias, alias quibusdam repellendus dicta error, labore sed? Laborum autem facere vel cupiditate quas eius itaque, eaque suscipit. Quas dolore impedit voluptatibus quibusdam, sit atque neque officiis autem vero nam voluptatem totam eum ullam nihil maiores!",
   },
   {
      title: "Cultural Context",
      content:
         "Cultural Context Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus iste possimus maiores tenetur molestias, alias quibusdam repellendus dicta error, labore sed? Laborum autem facere vel cupiditate quas eius itaque, eaque suscipit. Quas dolore impedit voluptatibus quibusdam, sit atque neque officiis autem vero nam voluptatem totam eum ullam nihil maiores!",
   },
   {
      title: "Location Details",
      content:
         "Location Details Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus iste possimus maiores tenetur molestias, alias quibusdam repellendus dicta error, labore sed? Laborum autem facere vel cupiditate quas eius itaque, eaque suscipit. Quas dolore impedit voluptatibus quibusdam, sit atque neque officiis autem vero nam voluptatem totam eum ullam nihil maiores!",
   },

   ```

   Replace the block of text inside of each respective section's `content: "..."` with the relevant information for that section. For example:

   ```
   {
      title: "Provenance",
      content:
         "Provenance content Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates accusamus iste possimus maiores tenetur molestias, alias quibusdam repellendus dicta error, labore sed? Laborum autem facere vel cupiditate quas eius itaque, eaque suscipit. Quas dolore impedit voluptatibus quibusdam, sit atque neque officiis autem vero nam voluptatem totam eum ullam nihil maiores!",
   },
   ```

   Becomes:

   ```
   {
      title: "Provenance",
      content:
      "This is all of the text pertaining to the provenance of the artifact.",
   },
   ```

   d. Add relevant categories as follows:

   ```
   {
      title: "Related Objects",
      content: ["Beading", "Deerhide"],
   },
   ```

   Becomes:

   ```
   {
      title: "Related Objects",
      content: ["Relevant Category 1", "Relavant Category 2", ... , "Relevant Category n"],
   },
   ```

   **Note:** Each relevant category must be contained in quotes, and all relevant categories must be seperated by a `,`.

   **Important:** Each Category included here must pertain to one of the categories recognized by the system. See [Adding Categories](#adding-categories).

   **Important:** Each category in this step should be the same as the categories found in Step 9.b. Spelling and Capitalization Matters.

   e. If you want to add another section of description that is not included, simply copy the following template, insert it above the `title: "Location Details` section. Fill in the information as you would in step 7.c.

   ```
   {
      title: "New Description Section Name",
      content:
         "Content that belongs in this section.",
   },
   ```

8. Replace information found in `mapMarker` with the correct values.

   a. Inside of the _NewArtifact_ JavaScript Object, you will find:

   ```
   mapMarker: {
      lat: 49.694168,
      lng: -112.832779,
      icon: Icon,
   },
   ```

   b. Replace the values for `lat` and `lng` with the correct values for the latitude and longitude respectively for the artifact you are adding.

9. Add the artifact's relevant categories.

   a. Inside of the _NewArtifact_ JavaScript Object, you will find:

   ```
   categories: ["Beading", "Deerhide"],
   ```

   b. Add relevant categories as follows:

   ```
   categories: ["Beading", "Deerhide"],
   ```

   Becomes:

   ```
   categories: ["Relevant Category 1", "Relavant Category 2", ... , "Relevant Category n"],
   ```

   **Note:** Each relevant category must be contained in quotes, and all relevant categories must be seperated by a `,`.

   **Important:** Each Category included here must pertain to one of the categories recognized by the system. See [Adding Categories](#adding-categories).

   **Important:** Each category in this step should be the same as the categories found in Step 7.d. Spelling and Capitalization Matters.

10. Save your file.

#### Adding your Artifact to the System

1. To add your newly created artifact to the website, navigate to the website's home directory.

2. Inside the websites home directory, you will find a file called _AppState.js_.

3. Open _AppState.js_ using your favorite text editor, or IDE.

4. Add the import for your artifact.

   a. Copy the following code, and paste it near the top of _AppState.js_.

   ```
   import { NewArtifact } from "./Artifacts/NewArtifact/NewArtifact";
   ```

   You should now have a series of imports at the top of _AppState.js_ that resembles the following:

   ```
   import { Knife } from "./Artifacts/Knife/Knife";
   import { Sheath } from "./Artifacts/Sheath/Sheath";
   import { BeadedObject } from "./Artifacts/BeadedObject/BeadedObject";
   .
   .
   .
   import { NewArtifact } from "./Artifacts/NewArtifact/NewArtifact";
   ```

   **Note:** This name used in the `import { NewArtifact }` must exactly match the name found in the Export Statement found in your _NewArtifact.js_ File. See [Creating a New Artifact](#creating-a-new-artifact).

   b. Replace all instances of _NewArtifact_ with the name of the artifact you wish to add.
   For example, if the name of the artifact you are adding is called _AncientBelt_, you will have:

   ```
   import { AncientBelt } from "./Artifacts/AncientBelt/AncientBelt";
   ```

5. Add your artifact to the list of artifacts that appear on the site.

   a. Inside _AppState.js_ you will find code that resembles the following:

   ```
   export var AppState = {
      models: [
         Sheath,
         Knife,
         Pipe,
         .
         .
         .
      ],
   ```

   b. Add your _NewArtifact_ to this list. You should have:

   ```
   export var AppState = {
   models: [
      Sheath,
      Knife,
      Pipe,
      .
      .
      .
      NewArtifact
   ],
   ```

   Where _NewArtifact_ is replaced by the name of the Artifact you are adding.

   **Note:** This name must exactly match the name found in the Import Statement in step 4.

6. Save the _AppState.js_ file.

<!-- ## Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Deploying from Github

You will first need to install it by going to the project's home directory and executing:
`npm install ./`

Now you can build as usual:
`npm run build`

Following the start command:
`npm run start` -->

## Built With

- [React](https://reactjs.org/) - Web Framework.
- [Node.js](https://nodejs.org/en/) - Package and dependency management.
- [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html) - Bootstrapped with create-react-app.
- [Model-viewer](https://modelviewer.dev/) - Used to display interactive 3D models on the web.
- [google-maps-react](https://github.com/fullstackreact/google-maps-react) - Library for using Google Maps JavaScript API in React.

## Learn More

To Learn more, visit [The Blackfoot Digital Library](https://www.blackfootdigitallibrary.com/digital/collection/bdl).

<!-- ## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us. -->

## Authors

### Developers

- **Calvin Lloyd** - _Initial work_ - [CalvinLloyd117](https://github.com/CalvinLloyd117)
- **Justin Petluk**-
<!-- ### Research Team
See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->

## License

Copyright and Intellectual Property is held by the Blackfoot people and administered by the Blackfoot Digital Library.

## Acknowledgments

- Special thanks to the Blackfoot people, and the Elder Advisory group.
<!-- - Hat tip to anyone whose code was used
- Inspiration
- etc -->
