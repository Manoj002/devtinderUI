## DevTinder UI

<!-- S2 EP- 15 -->

- Create Vite + React application
- Remove unnecessary code and files and folders
- Install tailwind css
- Install Daisy UI
- Create NavBar.jsx
- Add navbar component to App.jsx
- Install react-router-dom and configure/create routes
- Import BrowserRouter, Routes, Route from react-router-dom
- Create an <Outlet /> in Body
- Create a footer Component

## <!-- S2 EP 16 -->

- Create a Login page
- Make api call for login
- Install axios
- CORS - install cors in backend => add middleware in app, with configuarions a. origin b. credentials: true
- Pass with credentials: true from UI
- Install react-redux @reduxjs/toolkit
- configureStore, combineReducers, add Provider in root of app, create slice and saga, add them to store
- Update Navbar as user logs in
- Refactor code

<!-- S2 EP 17 -->

- Prevent post login route access, before login
- If token is not present redirect user to login page
- Logout feature
- Integrate feed api and display users on feed page
- Edit profile feature
<!-- - show toast on profile edit ------------------PROGRESS------------------ -->
- see all connections
- See all my connection requests
- Feature: Accept/Reject connection req

- Send / Ignore connection req from feed
- Signup new user
- E2E testing

## Components folders design structure

- Body

  - Navbar

    - route = / => Feed Component

    - route = /login => Login Component

    - route = /profile/view => Profile Component

  - Footer (If any)
