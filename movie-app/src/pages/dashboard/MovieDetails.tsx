// here will be my protected page, only accessible if logged in.
// if NOT logged in, this page redirects to sign-in.

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

export default function MovieDetails() {
    return (
        <>
        <SignedOut>
            <RedirectToSignIn redirectUrl="/sign-in" />
        </SignedOut>

        <SignedIn>
            <h1>Movie Details</h1>
            <p>Inception: A mind-bending thriller about dreams within dreams.</p>
            <p>Interstellar: A journey through space and time to save humanity.</p>
        </SignedIn>
        </>
    );
}