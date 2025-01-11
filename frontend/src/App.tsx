import React from "react"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"

export default function Home() {
  return (
    <div>
       <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </div>
  )
}
