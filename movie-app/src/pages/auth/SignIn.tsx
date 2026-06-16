// src/pages/auth/SignIn.tsx

import { useState } from "react";
import { useSignIn } from "@clerk/clerk-react";

export default function SignIn() {
  const { signIn, setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = await signIn.create({ identifier: email, password });
    if (result.status === "complete") {
      await setActive({ session: result.createdSessionId });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
      <button type="submit">Log In</button>
    </form>
  );
}