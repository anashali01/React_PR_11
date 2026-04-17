# React Firebase Auth App

A small React application demonstrating protected routing with Firebase Authentication, built with Vite and Bootstrap.

## Features

- Email/password login
- Google sign-in support
- Protected homepage route
- Redirects unauthenticated users to the login page
- Redirects authenticated users away from login/signup pages
- Responsive card-style auth form UI

## Project Structure

- `src/App.jsx` — router setup and auth-based route protection
- `src/main.jsx` — app entry point with `BrowserRouter`
- `src/firebase.js` — Firebase app and auth initialization
- `src/pages/Login.jsx` — login form and Google auth
- `src/pages/SignUp.jsx` — signup form for new users
- `src/pages/Home.jsx` — protected homepage with logout
- `src/index.css` — global styling for auth pages

## Tech Stack

- React 19
- React Router DOM 7
- Firebase Authentication
- Vite
- Bootstrap 5

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Add Firebase config in `src/firebase.js`.

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Visit `/login` to sign in with email/password or Google.
- Visit `/signup` to create a new account.
- Authenticated users are redirected to `/`.
- Unauthenticated users cannot access the homepage directly.

## Notes

- Update Firebase config with your own project credentials.
- Ensure Firebase Authentication is enabled for Email/Password and Google sign-in.

## License

This project is available for learning and demonstration purposes.