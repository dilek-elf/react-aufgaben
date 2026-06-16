// src/App.tsx
// this App.tsx sets up the routes + sign-in, sign-up, and sign-out

import { Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import Home from "./pages/public/Home";
import MovieDetails from "./pages/dashboard/MovieDetails";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <>
      {/* SignedOut shows this only when im NOT logged in */}
      <SignedOut>
        {/* Link to my own custom sign-in page */}
        <Link to="/sign-in">Sign In</Link>
        {" | "}
        {/* Link to my own custom sign-up page */}
        <Link to="/sign-up">Sign Up</Link>
      </SignedOut>

      {/* SignedIn shows this only when im logged in */}
      <SignedIn>
        {/* UserButton shows the logged-in user's avatar with a logout option */}
        <UserButton />
      </SignedIn>

      <Routes>
        {/* Public route, anyone can see this, as should be :D */}
        <Route path="/" element={<Home />} />

        {/* my custom sign-in page */}
        <Route path="/sign-in" element={<SignIn />} />

        {/* ma custom sign-up page */}
        <Route path="/sign-up" element={<SignUp />} />

        {/* This will later become a protected route */}
        <Route path="/movie-details" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;