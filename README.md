Tweets App

The web application shows user cards with their avatars, tweets, and followers. Users are displayed using pagination on page 3. You can subscribe to a specific user or unsubscribe. This will be reflected in the change in the number of followers and the form of buttons. Updated data is sent to the server. There is a "Download more" button. All changes remain after reloading the pages.
A personal backend was created by the technical task:

- mockapi.io service;
  -created "Users" resource;
  -each object has an id, user, tweets, avatar, and follower field.

Technologies

-mockapi.io
-axios
-React.js
-React Router
-React Hooks
-react-loader-spinner
-Styled-components
-localStorage

How it works

The program provides the ability to add users using the "isFollow" button and store them in local storage. Paging is also implemented through local storage. The user data received when requesting the backend is compared with the data in the local storage. Users with the same ID are displayed from the repository.

How to launch the application

Clone or download the project repository.
Install the necessary dependencies by running npm install.
Start the development server using npm start.
The program will be available at http://localhost:3000.
